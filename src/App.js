import ProductsList from "./components/ProductsList/ProductsList";
import ShopingList from "./components/ShopingList/ShopingList";
import AddProducts from "./components/AddProducts/AddProducts";
import ProductsFilters from "./components/ProductsFilters/ProductsFilters";
import styles from "./App.module.scss";
import produkty from "./common/consts/produkty";
import { useState } from "react";
import { useEffect } from "react";

function App() {
  const [shoppingItems, setShoppingItems] = useState([]);
  const [UpdatedItems, setUpdatedItems] = useState(produkty);
  const [ProductsToDisplay, setProductsToDisplay] = useState([...UpdatedItems]);
  const onAddtoShoppingList = (produkt) => {
    shoppingItems.push(produkt); //tu wrzucamy nasz item do tablicy, nastepnie wywołujemy funkcję która updatuje wartość tablicy, koniecznie z destrukturyzacją
    setShoppingItems([...shoppingItems]);
  };
  const onRemoveFromShoppingList = (produkt, event) => {
    event.preventDefault();
    shoppingItems.splice(produkt, 1); //tu wrzucamy nasz item do tablicy, nastepnie wywołujemy funkcję która updatuje wartość tablicy, koniecznie z destrukturyzacją
    setShoppingItems([...shoppingItems]);
  };
  useEffect(()=>{
    setProductsToDisplay([...UpdatedItems])//tak by podczas zmiany state mógł przerenderować appkę 
  },[UpdatedItems])
  
  return (
    <div className={styles.appWrapper}>
      <AddProducts/>
      <ProductsFilters />
      <div className={styles.columnsWrapper}>
        <ProductsList
          onAddtoShoppingList={onAddtoShoppingList}
          productsToDisplay={ProductsToDisplay}
        />
        <ShopingList
          onRemoveFromShoppingList={onRemoveFromShoppingList}
          shoppingItems={shoppingItems}
        />
      </div>
    </div>
  );
}
export default App;

