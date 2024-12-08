// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ExpenseForm from './components/ExpenseForm'; // Your Expense Form Component
import ExpenseList from './components/ExpenseList'; // Your Expense List Component
import SummaryPage from './components/SummaryPage'; // New Summary Page
import './App.css'; // Importing the CSS file

const App = () => {
  const [expenses, setExpenses] = useState([]);

  const addExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  const deleteExpense = (index) => {
    setExpenses(expenses.filter((_, i) => i !== index));
  };

  return (
    <Router>
      <div>
        <header className="header">
          <h1>Expense Tracker</h1>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/list">Expense List</Link>
            <Link to="/summary">Summary</Link>
          </nav>
        </header>

        <Routes>
          <Route path="/" element={<ExpenseForm addExpense={addExpense} />} />
          <Route
            path="/list"
            element={<ExpenseList expenses={expenses} deleteExpense={deleteExpense} />}
          />
          <Route path="/summary" element={<SummaryPage expenses={expenses} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
