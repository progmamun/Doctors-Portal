import React from 'react';

const UserRow = ({ user, refetch }) => {
  const { email, role } = user;

  const makeAdmin = () => {
    fetch(`http://localhost:5000/user/admin/${email}`, {
      method: 'PUT',
      headers: {
        authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
    })
      .then(res => res.json())
      .then(data => {
        refetch();
        toast.success(`Successfully made an admin`);
      });
  };
  return (
    <tr>
      <th>1</th>
      <td>{email}</td>
      <td>
        {role !== 'admin' && (
          <button onClick={makeAdmin} className="btn btn-xs">
            Make Admin
          </button>
        )}
      </td>
      <td>
        <button className="btn btn-xs">Remove User</button>
      </td>
    </tr>
  );
};

export default UserRow;
