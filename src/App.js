import ExpenseList from "./components/expenses/ExpenseList";

const App = () => {
  const expenses = [
    { title: "Xmas present - dad", price: 229, date: new Date(2022, 11, 15) },
    { title: "Xmas present - mom", price: 200, date: new Date(2022, 11, 12) },
    { title: "Xmas present - sis", price: 150, date: new Date(2022, 11, 10) },
    {
      title: "Xmas present - Gonçalo",
      price: 100,
      date: new Date(2022, 11, 20),
    },
  ];
  return (
    <div>
      <ExpenseList items={expenses} />
    </div>
  );
}

export default App;
