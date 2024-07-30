import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';

import "./PublicNav.css"

const Root = () => {

  return (
    <Fragment>
      <nav>
        <ul>
          <li>
            <NavLink to="/" className={({isActive}) => (isActive ? "active" : undefined)} >Home</NavLink>
          </li>
          <li>
            <NavLink to="/products" className={({isActive}) => (isActive ? "active" : undefined)} >Products</NavLink>
          </li>
        </ul>
      </nav>
    </Fragment>
  );
};
export default Root;
