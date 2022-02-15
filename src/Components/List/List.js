import ListItem from '../ListItem/ListItem';

const List = ({items, onClick, className, showAmount}) => {

  return (
    <ul className="grocery-list">
        {items.map(groceryItem => <ListItem key={groceryItem.id} item={groceryItem} clickItem={onClick} className={className} showAmount={showAmount} />)}
    </ul>
  );
};

export default List;