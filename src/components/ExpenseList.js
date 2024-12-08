// src/components/ExpenseList.js
import React from 'react';

const ExpenseList = ({ expenses, deleteExpense }) => {
  return (
    <div>
      <h2>Expense List</h2>
      {expenses.length === 0 ? (
        <p>No expenses added yet.</p>
      ) : (
        <ul>
          {expenses.map((expense, index) => (
            <li key={index}>
              <span>{expense.name} - ${expense.amount} - {expense.category}</span>
              <button onClick={() => deleteExpense(index)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ExpenseList;
