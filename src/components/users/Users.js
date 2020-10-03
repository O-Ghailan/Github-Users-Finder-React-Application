import React, { useContext } from 'react';
import UserItem from './UserItem';
import Spinner from '../layout/Spinner';

import GithubContext from '../../context/github/githubContext'; //calling the context

const Users = () => {
  const githubContext = useContext(GithubContext); //initializing the context

  const { loading, users } = githubContext; //getting loading & users from githubContext

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div style={userStyle}>
        {users.map((user) => (
          <UserItem key={user.id} user={user} /> //props of the UserItem component
        ))}
      </div>
    );
  }
};

const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem',
};

export default Users;
