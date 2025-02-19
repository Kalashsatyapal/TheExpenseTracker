import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <h1>Expense Tracker</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/expenses">Expenses</Link>
      </nav>
    </header>
  );
}

export default Header;
