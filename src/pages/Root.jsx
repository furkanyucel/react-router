import React, { Fragment } from 'react';
import PublicNav from '../components/PublicNav';
import { Outlet } from 'react-router-dom';

const Root = () => {
  return (
    <Fragment>
      <PublicNav />
      <Outlet />
    </Fragment>
  );
};
export default Root;
