import React from 'react';
import UserItem from '../useritem/useritem';

const UserList = ({ users, onEdit, onDelete }) => {
  return (
    <div className="user-list">
      {users.length === 0 ? (
        <p>No hay usuarios registrados</p>
      ) : (
        users.map(user => (
          <UserItem 
            key={user.id}
            user={user}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        ))
      )}
    </div>
  );
};

export default UserList;
