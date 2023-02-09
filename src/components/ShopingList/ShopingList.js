import React from 'react';
import commonColumnsStyles from "../../common/styles/Columns.module.scss";

class ShopingList extends React.Component {
  render() {
    const { shoppingItems,onRemoveFromShoppingList } = this.props;
    return (
      <div className={commonColumnsStyles.App}>
        <header className={commonColumnsStyles.AppHeader}>
        <h2>KOSZYK</h2>
        <h3>Kliknij prawym przyciskiem by usunąć z listy</h3>
        <ul>
        {shoppingItems.map((produkt, index) => (
        <li key={index}><button onContextMenu={(event)=>onRemoveFromShoppingList(produkt,event)}>{produkt.nazwa}</button></li>
        ))}
        </ul>
        </header>
      </div>
    );
  }
}
export default ShopingList;
