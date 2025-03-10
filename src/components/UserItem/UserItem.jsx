import React, { useState } from 'react';

const UserItem = ({ user, onEdit, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedUser, setEditedUser] = useState(user);

  const handleSave = () => {
    onEdit(editedUser);
    setIsEditing(false);
  };

  return isEditing ? (
    <div className="user-item editing">
      <input
        type="text"
        value={editedUser.name}
        onChange={(e) => setEditedUser({...editedUser, name: e.target.value})}
      />
         <input
        type="email"
        value={editedUser.email}
        onChange={(e) => setEditedUser({...editedUser, email: e.target.value})}
      />
      <select
        value={editedUser.role}
        onChange={(e) => setEditedUser({...editedUser, role: e.target.value})}
      >
        <option value="admin">Admin</option>
        <option value="user">User</option>
      </select>
      <button onClick={handleSave}>Guardar</button>
      <button onClick={() => setIsEditing(false)}>Cancelar</button>
    </div>
  ) : (
    <div className="user-item">
      <h3>{user.name}</h3>
      <p>{user.email}</p>
      <p>Role: {user.role}</p>
      <button onClick={() => setIsEditing(true)}>Editar</button>
      <button onClick={() => onDelete(user.id)}>Eliminar</button>
    </div>
  )};

export default UserItem;