import ExpenseList from "./components/expenses/ExpenseList";
import ExpenseForm from "./components/expenses/ExpenseForm";

const App = () => {
  const expenses= [
    { title: "Xmas present - dad", price: 229, date: new Date(2022, 11, 15) },
    { title: "Xmas present - mom", price: 200, date: new Date(2022, 11, 12) },
    { title: "Xmas present - sis", price: 150, date: new Date(2022, 11, 10) },
    {
      title: "Xmas present - Gonçalo",
      price: 100,
      date: new Date(2022, 11, 20),
    },
  ];

  const addExpense = (itemName, price, date) => {
    console.log(itemName, price, date);
  };

  return (
    <div>
      <ExpenseForm onAddExpense={addExpense} />
      <ExpenseList items={expenses} />
    </div>
  );
};

export default App;
