import List from '../List/List';
import InputField from '../InputField/InputField';

import './grocerylist.css';

const GroceryList = ({ items, onClickItem, onSubmitItem }) => {
  return (
    <div>
      <h2 className='title-grocerylist'>Grocery list</h2>
      <div>
        <InputField onSubmit={onSubmitItem}/>
        <List items={items} onClick={onClickItem} className='grocery-list-item' showAmount={false} />
      </div>
    </div>
  );
};

export default GroceryList;
