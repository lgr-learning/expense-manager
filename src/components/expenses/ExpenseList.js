import ExpenseItem from "./ExpenseItem";

import "./ExpenseList.css";

const ExpenseList = ({ items }) => {
  let expensesContent = (
    <h2 className="expense-list__fallback">No expenses found</h2>
  );

  if (items.length) {
    expensesContent = items.map((el, i) => (
      <ExpenseItem key={i} title={el.title} amount={el.price} date={el.date} />
    ));
  }

  return <div className="expense-list">{expensesContent}</div>;
};

export default ExpenseList;
