import React from 'react';
import { Link } from 'react-router-dom';

const PageHeadline = (props) => {
  return (
    <div>
      <Link to="/invoices">Home</Link> | <Link to="/expenses">Expenses</Link>
    </div>
  );
};

export default PageHeadline;
