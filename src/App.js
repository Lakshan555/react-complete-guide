import ExpenseItem from "./components/ExpenseItem";
function App() {
  const expenses = [
    {
      id: 1,
      titel: "Toilet Papers",
      amount: 245.6,
      date: new Date(2022, 1, 20),
    },
    {
      id: 2,
      titel: "Insuarnce",
      amount: 255.69,
      date: new Date(2022, 3, 14),
    },
    {
      id: 3,
      titel: "Papers",
      amount: 55.69,
      date: new Date(2022, 4, 25),
    },
    {
      id: 4,
      titel: "Helth",
      amount: 855.69,
      date: new Date(2022, 5, 25),
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
      <ExpenseItem
        titel={expenses[2].titel}
        amount={expenses[2].amount}
        date={expenses[2].date}
      />
      <ExpenseItem
        titel={expenses[3].titel}
        amount={expenses[3].amount}
        date={expenses[3].date}
      />
    </div>
  );
}

export default App;
