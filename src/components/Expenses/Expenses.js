import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";

function Expenses(props) {
  return (
    <Card className="expenses">
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
    </Card>
  );
}

export default Expenses;
