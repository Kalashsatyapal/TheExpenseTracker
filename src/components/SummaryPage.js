// src/components/SummaryPage.js
import React from 'react';

const SummaryPage = ({ expenses }) => {
  const totalAmount = expenses.reduce((total, expense) => total + parseFloat(expense.amount), 0);

  return (
    <div>
      <h2>Summary</h2>
      <p>Total Expenses: ${totalAmount.toFixed(2)}</p>
      <ul>
        {expenses.length > 0 ? (
          expenses.map((expense, index) => (
            <li key={index}>
              {expense.name} - ${expense.amount} - {expense.category}
            </li>
          ))
        ) : (
          <p>No expenses to display</p>
        )}
      </ul>
    </div>
  );
};

export default SummaryPage;
