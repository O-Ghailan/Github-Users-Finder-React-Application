import React, { Fragment } from 'react';
import Search from '../users/Search';
import Users from '../users/Users';

const Home = () => (
  //we don't need the return if we're using the arrow function
  <Fragment>
    <Search />
    <Users />
  </Fragment>
);

export default Home;
