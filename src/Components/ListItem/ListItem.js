import './ListItem.css';

const ListItem = ({ item, clickItem, className, showAmount }) => {

  return (
    <li key={item.id} className={`${className} li`} onClick={() => clickItem(item)} >
    <div>{item.title}</div>
    <div>{showAmount ? `Amount: ${item.amount}` : ''}</div>
    </li>
  );
};

export default ListItem;