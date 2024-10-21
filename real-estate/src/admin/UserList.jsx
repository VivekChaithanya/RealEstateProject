// UserList.js
import React from 'react';

const UserList = ({ users, setSelectedUser }) => {
  return (
    <div className="user-list">
      <h2>Users</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id} onClick={() => setSelectedUser(user)}>
            <img src={user.icon} alt="user icon" />
            {user.username}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
