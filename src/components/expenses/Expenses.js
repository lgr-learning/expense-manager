import { useState } from "react";

import Card from "../ui/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpenseChart from "./ExpenseChart";
import ExpenseList from "./ExpenseList";

import "./Expenses.css";

const Expenses = ({ items }) => {
  const [filterState, setFilterState] = useState(
    new Date().getFullYear().toString()
  );

  const updateFilter = (filter) => {
    setFilterState(filter);
  };

  const filteredItems = items.filter((expense) => {
    return expense.date.getFullYear().toString() === filterState;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter onFilter={updateFilter} selected={filterState} />
      <ExpenseChart expenses={filteredItems}/>
      <ExpenseList items={filteredItems} />
    </Card>
  );
};

export default Expenses;
