import React from "react";
import styles from "../../common/styles/Headers.module.scss";

class ProductsFilters extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchPhrase: "",
      CathegorySelected: "",
      searchOnlyFoodStuffs: false,
    };
  }
  handleSearchPhraseChange = (event) => {
    this.setState({ searchPhrase: event.target.value }, () =>
      this.filterProducts()
    );
  };
  handleFilterByCathegory = (event) => {
    this.setState({ CathegorySelected: event.target.value }, () =>
      this.filterProducts()
    );
  };
  handleShowOnlyFood = (event) => {
    this.setState({ searchOnlyFoodStuffs: event.target.checked }, () =>
      this.filterProducts()
    );
  };
  getAllUniqueCathegories = () => {
    const { UpdatedItems } = this.props; //pobór danych z propsa, które przypisaliśmy w app
    const productsCathegoryList = UpdatedItems.map((item) => item.kategoria); //otrzymujemy listę kategorii wszystkich produktów, także się powtarzają
    const uniqueCathegoryList = [...new Set(productsCathegoryList)]; //jak zrobimy z tego set to będzie przechowywał tylko unikalne wartości arraya
    return uniqueCathegoryList;
  };
  filterProducts = () => {
    const { UpdatedItems } = this.props;
    const { searchPhrase, CathegorySelected, searchOnlyFoodStuffs } =
      this.state;
    let filteredProducts = UpdatedItems.filter((item) =>
      item.nazwa.includes(searchPhrase.toLowerCase())
    );
    if (CathegorySelected) {
      filteredProducts = filteredProducts.filter(
        (item) => item.kategoria === CathegorySelected
      );
    }
    if (searchOnlyFoodStuffs) {
      filteredProducts = filteredProducts.filter(
        (item) => item.produktSpozywczy === true
      );
    }
    // przekazanie wyfiltrowanych pojazdów do komponentu rodzica (App)
    this.props.sendFilteredProductsBackToParent(filteredProducts);
  };
  render() {
    const uniqueCathegories = this.getAllUniqueCathegories(); //troche słaba opcja, jak masz kod js i jsx obok siebie, łatwo sie walnąć
    const { searchPhrase, CathegorySelected, searchOnlyFoodStuffs } =
      this.state;
    return (
      <div className={styles.Wrapper}>
        <h2>Filtry Wyszukiwania</h2>
        <input
          value={searchPhrase}
          type="text"
          onChange={this.handleSearchPhraseChange}
        ></input>
        <h2>Szukaj po kategorii</h2>
        <select
          value={CathegorySelected}
          onChange={this.handleFilterByCathegory}
        >
          <option key={"all"} value={""}>
            wszystkie kategorie
          </option>
          {uniqueCathegories.map((cathegory) => (
            <option key={cathegory} value={cathegory}>
              {cathegory}
            </option>
          ))}
        </select>
        <p> Tylko produkty spożywcze </p>
        <input
          type="checkbox"
          onChange={this.handleShowOnlyFood}
          value={searchOnlyFoodStuffs}
        ></input>
      </div>
    );
  }
}
export default ProductsFilters;
