import React from "react";
import commonColumnsStyles from "../../common/styles/Columns.module.scss";

function ProductsList(props) {
  const { productsToDisplay,onAddtoShoppingList} = props;
  return (
    <div className={commonColumnsStyles.App}>
      <header className={commonColumnsStyles.AppHeader}>
        <h2>LISTA PRODUKTÓW</h2>
        <h3>Kliknij lewym przyciskiem by wybrać produkt</h3>
        <ul>
          {productsToDisplay.map((produkt, index) => (
            <li key={index}>
              <button onClick={() => onAddtoShoppingList(produkt)}>
                {produkt.nazwa}
              </button>
            </li>
          ))}
        </ul>
      </header>
    </div>
  );
}
export default ProductsList;