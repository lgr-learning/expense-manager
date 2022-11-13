import { useState } from "react";

import Card from "../ui/Card";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";

import "./ExpenseList.css";

const ExpenseList = ({ items }) => {
  const [filterState, setFilterState] = useState(new Date().getFullYear());

  const updateFilter = (filter) => {
    setFilterState(filter);
  };

  return (
    <Card className="expense-list">
      <ExpensesFilter onFilter={updateFilter} selected={filterState}/>
      {items.map((el, i) => (
        <ExpenseItem
          key={i}
          title={el.title}
          amount={el.price}
          date={el.date}
        />
      ))}
    </Card>
  );
};

export default ExpenseList;
