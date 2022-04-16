import ExpenseItem from "./ExpenseItem";

function Expenses(props) {
  return (
    <div>
      <ExpenseItem
        titel={props.items[0].titel}
        amount={props.items[0].amount}
        date={props.items[0].date}
      />
      <ExpenseItem
        titel={props.items[1].titel}
        amount={props.items[1].amount}
        date={props.items[1].date}
      />
      <ExpenseItem
        titel={props.items[2].titel}
        amount={props.items[2].amount}
        date={props.items[2].date}
      />
      <ExpenseItem
        titel={props.items[3].titel}
        amount={props.items[3].amount}
        date={props.items[3].date}
      />
    </div>
  );
}

export default Expenses;
