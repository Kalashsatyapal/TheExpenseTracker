import React from 'react';

function ExpenseItem({ expense }) {
  return (
    <div className="expense-item">
      <span>{expense.title}</span>
      <span>${parseFloat(expense.amount).toFixed(2)}</span>
    </div>
  );
}

export default ExpenseItem;
