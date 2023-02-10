import React from "react";
import commonColumnsStyles from "../../common/styles/Columns.module.scss";

function ProductsList(props) {
  const {productsToDisplay,shoppingItems} = props;
  // const { productsToDisplay, onAddtoShoppingList } = props;
  const onAddtoShoppingList = (produkt) => {
    let updatedShoppingList=[...shoppingItems]
    updatedShoppingList.push(produkt); //tu wrzucamy nasz item do tablicy, nastepnie wywołujemy funkcję która updatuje wartość tablicy, koniecznie z destrukturyzacją
    props.sendUpdatedShoppingList(updatedShoppingList)
  };
  return (
    <div className={commonColumnsStyles.App}>
      <header className={commonColumnsStyles.AppHeader}>
        <h2>LISTA PRODUKTÓW</h2>
        <h3>Kliknij lewym przyciskiem by wybrać produkt</h3>
        <ul>
          {productsToDisplay.map((produkt, index) => (
            <li key={index} onClick={() => onAddtoShoppingList(produkt)}>
                {produkt.nazwa}
            </li>
          ))}
        </ul>
      </header>
    </div>
  );
}
export default ProductsList;