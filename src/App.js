import { useState } from "react";

import Expenses from "./components/expenses/Expenses";
import ExpenseForm from "./components/expenses/ExpenseForm";

const DUMMY = [
  { title: "Xmas present - dad", price: 229, date: new Date(2022, 11, 15) },
  { title: "Xmas present - mom", price: 200, date: new Date(2021, 11, 12) },
  { title: "Xmas present - sis", price: 150, date: new Date(2020, 11, 10) },
  {
    title: "Xmas present - Gonçalo",
    price: 100,
    date: new Date(2020, 11, 20),
  },
];

const App = () => {
  const [expenses, updateExpenses] = useState(DUMMY);

  const addExpense = (expense) => {
    updateExpenses((prev) => {
      return [expense, ...prev];
    });
  };

  return (
    <div>
      <ExpenseForm onAddExpense={addExpense} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
