import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
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
  const addExpenseHandeler = (expense) => {
    console.log("In App.js");
    console.log(expense);
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandeler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
