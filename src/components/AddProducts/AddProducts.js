import React from "react";
import styles from "../../common/styles/Headers.module.scss";
import { useState } from "react";

function AddProducts(props) {
    const {UpdatedItems}=props
  const [newProduct, setnewProduct] = useState("");
  const [newCathegory, setnewCathegory] = useState("");
  const [newIsFood, setnewIsFood] = useState(false);
  
  const handleNewProduct=(event)=>{
        if(event.target.name==='product'){
            setnewProduct(event.target.value)
        }
    }
    const handleNewCathegory=(event)=>{
        if(event.target.name==='cathegory'){
            setnewCathegory(event.target.value)
        }
    }
    const handleNewIsFood=(event)=>{
        if(event.target.checked){
            setnewIsFood(true)
        }
        else{
            setnewIsFood(false) 
        }
  }
  const handleSubmit=(event)=>{
    event.preventDefault();
    let updatedProductsList=[...UpdatedItems]
    updatedProductsList.push({
        nazwa: newProduct.toLowerCase(),
        kategoria: newCathegory.toLowerCase(),
        produktSpozywczy: newIsFood,
      })
    //   console.log(updatedProductsList)
    props.sendUpdatedProductsBacktoParents(updatedProductsList)
  }
    return (
    <div className={styles.Wrapper}>
      <form onSubmit={handleSubmit}>
        <label>
          Nazwa produktu:
          <input
            type="text"
            name="product"
            value={newProduct}
            onChange={handleNewProduct}
          />
        </label>
        <label>
          Nazwa kategorii:
          <input
            type="text"
            name="cathegory"
            value={newCathegory}
            onChange={handleNewCathegory}
          />
        </label>
        <label>
          To zjadliwe?
          <input
            type="checkbox"
            name="isFood"
            value={newIsFood}
            onChange={handleNewIsFood}
          />
        </label>
        <input type="submit" value="Dodaj" />
      </form>
    </div>
  );
}

export default AddProducts;
