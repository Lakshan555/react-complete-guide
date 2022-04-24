import React, { useState } from "react";
import "./ExpensesForm.css";

// FIXME
const ExpensesForm = () => {
  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control label">
          <label>Titel</label>
          <input type="text" />
        </div>
        <div className="new-expense__control label">
          <label>Amount</label>
          <input type="number" min="0.01" step="0.01" />
        </div>
        <div className="new-expense__control label">
          <label>Date</label>
          <input type="date" min="2019-01-01" max="2023-12-31" />
        </div>
      </div>
      <div className="new-expense__actions">
        <button>Add Expenses</button>
      </div>
    </form>
  );
};

export default ExpensesForm;
