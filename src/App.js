import ExpenseItem from "./components/ExpenseItem";
function App() {
  const expenses = [
    {
      id: 1,
      titel: "Toilet Papers",
      amount: 245.6,
      date: new Date(2022, 3, 20),
    },
    {
      id: 2,
      titel: "Insuarnce",
      amount: 255.69,
      date: new Date(2022, 3, 25),
    },
  ];
  return (
    <div>
      <h2>Get Starded</h2>
      <ExpenseItem
        titel={expenses[0].titel}
        amount={expenses[0].amount}
        date={expenses[0].date}
      />
      <ExpenseItem
        titel={expenses[1].titel}
        amount={expenses[1].amount}
        date={expenses[1].date}
      />
    </div>
  );
}

export default App;
