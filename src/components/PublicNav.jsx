import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Root = () => {
  const navStyle = {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    gap: '2rem',
    listStyleType: 'none',
    padding: '0',
  };

  return (
    <Fragment>
      <nav>
        <ul style={navStyle}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
        </ul>
      </nav>
    </Fragment>
  );
};
export default Root;
