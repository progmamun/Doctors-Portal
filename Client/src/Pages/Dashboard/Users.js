import React from 'react';
import { useQuery } from 'react-query';
import UserRow from './UserRow';
import Loading from '../Shared/Loading';

const Users = () => {
  const {
    data: users,
    isLoading,
    refetch,
  } = useQuery('users', () =>
    fetch('http://localhost:5000/user', {
      method: 'GET',
      headers: {
        authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
    })
  ).then(res => res.json());

  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <h2 className="text-2xl">All Users: {users.length}</h2>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr></tr>
            <tr>Email</tr>
            <tr>Role</tr>
            <tr>Action</tr>
          </thead>
          <tbody>
            {users.map(user => (
              <UserRow key={user._id} user={user} refetch={refetch} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
