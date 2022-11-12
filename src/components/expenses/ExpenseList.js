import Card from "../ui/Card";
import ExpenseItem from "./ExpenseItem";

import "./ExpenseList.css";

const ExpenseList = ({items}) => {
  return (
    <Card className="expense-list">
      {items.map((el, i) => (
        <ExpenseItem key={i} title={el.title} amount={el.price} date={el.date} />
      ))}
    </Card>
  );
}

export default ExpenseList;
