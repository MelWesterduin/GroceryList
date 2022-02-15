import List from '../List/List';

import './ShoppingCart.css';

const ShoppingCart = ({items, onClickEmptyCart}) => {

    return(
        <div>
            <h2 className='title-shoppingcart'>Shopping cart</h2>
            <button onClick={onClickEmptyCart} >Empty cart</button>
            <List className='shopping-cart-item' items={items} showAmount={true} />
        </div>
    );
};

export default ShoppingCart