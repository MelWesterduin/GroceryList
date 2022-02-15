import { useState } from 'react';
import GroceryList from '../GroceryList/GroceryList';
import ShoppingCart from '../ShoppingCart/ShoppingCart';

import './Container.css';

const Container = () => {
  const [groceryItems, setGroceryItems] = useState([
    { id: 1, title: 'Milk', amount: 1 },
    { id: 2, title: 'Oatmeal', amount: 1 },
    { id: 3, title: 'Bread', amount: 1 },
    { id: 4, title: 'Chocolate', amount: 1 },
  ]);
  const [shoppingCartItems, setShoppingCartItems] = useState([]);

  const addAmountToItem = (id) => {
    const updatedShoppingCartItems = shoppingCartItems.map(shoppingCartItem => shoppingCartItem.id === id ? {...shoppingCartItem, amount: shoppingCartItem.amount + 1} : shoppingCartItem);
    setShoppingCartItems(updatedShoppingCartItems);
  };

  const handleClickGroceryItem = (groceryItem) => {
    const foundItem = shoppingCartItems.find((shoppingCartItem) =>
      shoppingCartItem.id === groceryItem.id);

    if(foundItem === undefined) {
        setShoppingCartItems((listItems) => [...listItems, groceryItem]);
    } else {
        addAmountToItem(foundItem.id);
    };
  };

  const emptyCart = () => {
    setShoppingCartItems([]);
  };

  const handleSubmitItem = (listItemTitle) => {
    const groceryItem = { id: groceryItems.length + 1, title: listItemTitle, amount: 1 };

    setGroceryItems((listItems) => [...listItems, groceryItem]);
  };

  return (
    <div className='container'>
      <div className='container-grocerylist'>
      <GroceryList
        items={groceryItems}
        onClickItem={handleClickGroceryItem}
        onSubmitItem={handleSubmitItem}
      /></div>
      
      <div className='container-shoppingcart'>
      <ShoppingCart items={shoppingCartItems} onClickEmptyCart={emptyCart} />
      </div>
    </div>
  );
};

export default Container;
