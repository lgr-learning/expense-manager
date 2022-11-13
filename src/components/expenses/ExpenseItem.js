import { useState } from 'react';

import Card from '../ui/Card';
import CalendarDate from '../ui/CalendarDate';

import './ExpenseItem.css';

const ExpenseItem = (props) => {

  const [ itemName, setItemName ] = useState(props.title);

  const changeItemNameHandler = e => {
    setItemName(itemName + '!');
  };

  return (
    <Card className='expense-item'>
      <CalendarDate cal={props.date}/>
      <div className='expense-item__description'>
        <h2>{itemName}</h2>
        <div className='expense-item__price'>{props.amount} €</div>
      </div>
      <button onClick={changeItemNameHandler}>Change item name</button>
    </Card>
  );
}

export default ExpenseItem;
