import Card from '../ui/Card';
import CalendarDate from '../ui/CalendarDate';

import './ExpenseItem.css';

const ExpenseItem = (props) => {
  return (
    <Card className='expense-item'>
      <CalendarDate cal={props.date}/>
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>{props.amount} €</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;
