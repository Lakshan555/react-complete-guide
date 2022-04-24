import React, { useState } from "react";
import "./ExpensesForm.css";

// FIXME
const ExpensesForm = () => {
  //NOTE Multipe single State
  const [enterdTitel, setEnterdTitel] = useState("");
  const [enterdAmount, setEnterdAmount] = useState("");
  const [enterdDate, setEneterdDate] = useState("");

  const titelChangeHandeler = (event) => {
    setEnterdTitel(event.target.value);
  };

  const amountChangeHandeler = (event) => {
    setEnterdAmount(event.target.value);
  };

  const dateChangeHandeler = (event) => {
    setEneterdDate(event.target.value);
  };

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control label">
          <label>Titel</label>
          <input type="text" onChange={titelChangeHandeler} />
        </div>
        <div className="new-expense__control label">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandeler}
          />
        </div>
        <div className="new-expense__control label">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2023-12-31"
            onChange={dateChangeHandeler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button>Add Expenses</button>
      </div>
    </form>
  );
};

export default ExpensesForm;
