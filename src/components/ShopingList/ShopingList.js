import React from "react";
import commonColumnsStyles from "../../common/styles/Columns.module.scss";

class ShopingList extends React.Component {
  handleClickToCross = (event) => {
    event.preventDefault();
    event.target.style.textDecoration === `none`
      ? event.target.style.setProperty("text-decoration", "line-through")
      : event.target.style.setProperty("text-decoration", `auto`);
    // if (event.target.style.textDecoration) {
    //   //event odnosi sie tutaj do obiektu style a dokładnie jego własciwości textDecoration i sprawdza czy on istnieje
    //   event.target.style.removeProperty("text-decoration"); //jeżeli istnieje  ( np z przekreśleniem) to usunięcie przywraca go do wartości domyślnej
    // } else {
    //   event.target.style.setProperty("text-decoration", "line-through"); //jeżeli nie istnieje (np po powtórnym kliknięciu) to go tworzy i ustawia mu wartość
    // }
    console.log(event.target.style.textDecoration);
  };
  render() {
    const { shoppingItems, onRemoveFromShoppingList } = this.props;
    return (
      <div className={commonColumnsStyles.App}>
        <header className={commonColumnsStyles.AppHeader}>
          <h2>KOSZYK</h2>
          <h3>
            Kliknij lewym przyciskiem by usunąć z listy, prawym by przekreślić
          </h3>
          <ul>
            {shoppingItems.map((produkt, index) => (
              <li
                key={index}
                style={{ textDecoration: `auto` }}
                onClick={() => onRemoveFromShoppingList(produkt)}
                onContextMenu={(event) => this.handleClickToCross(event)}
              >
                {produkt.nazwa}
              </li>
            ))}
          </ul>
        </header>
      </div>
    );
  }
}
export default ShopingList;
