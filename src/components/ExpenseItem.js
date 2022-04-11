import "./ExpenseItem.css";

function ExpenseItem() {
  const expenseDate = new Date(2022, 3, 30);
  const expenseTitel = "Insurance";
  const expenseAmount = 275.45;

  return (
    <div className="expense-item">
      <div>{expenseDate.toISOString().substring(0, 10)}</div>
      <div className="expense-item__description">
        <h2>{expenseTitel}</h2>
        <div className="expense-item__price">${expenseAmount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
