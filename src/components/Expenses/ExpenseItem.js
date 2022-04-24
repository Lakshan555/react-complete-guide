import React, { useState } from "react";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  const [titel, setTitel] = useState(props.titel);

  const titelChangeHandeler = () => {
    setTitel("Updated");
    console.log(titel);
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{titel}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button type="submit" onClick={titelChangeHandeler}>
        Change Titel
      </button>
    </Card>
  );
}

export default ExpenseItem;
