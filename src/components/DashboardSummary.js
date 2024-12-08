import React from 'react';

function DashboardSummary({ expenses, clearExpenses }) {
  const totalAmount = expenses.reduce((sum, expense) => sum + parseFloat(expense.amount || 0), 0);

  return (
    <div className="dashboard-summary">
      <h3>Total Expenses: ${totalAmount.toFixed(2)}</h3>
      <p>Number of Expenses: {expenses.length}</p>
      <button onClick={clearExpenses} className="clear-btn">Clear All</button>
    </div>
  );
}

export default DashboardSummary;
