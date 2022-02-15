import { useState } from 'react';

import './InputField.css';

const InputField = ({ onSubmit }) => {
  const [listItem, setListItem] = useState();

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(listItem);
      }}
    >
      <input className='inputfield' onChange={(e) => setListItem(e.target.value)} type="text" />
      <button>Add</button>
    </form>
  );
};

export default InputField;