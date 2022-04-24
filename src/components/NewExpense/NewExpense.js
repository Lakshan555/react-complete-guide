import React from "react";
import ExpensesForm from "./ExpensesForm";
import "./NewExpenses.css";

//FIXME
const NewExpense = (props) => {
  const saveExpensesDataHandeler = (enterdExpenseData) => {
    const expenses = {
      id: Math.random().toString(),
      ...enterdExpenseData,
    };
    console.log(expenses);
    props.onAddExpense(expenses);
  };
  return (
    <div className="new-expense">
      <ExpensesForm OnSaveExpensesData={saveExpensesDataHandeler} />
    </div>
  );
};

export default NewExpense;
