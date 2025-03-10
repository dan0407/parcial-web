import React, { useState } from 'react';

const UserForm = ({ onSubmit }) => {
  const initialState = {
    name: '',
    email: '',
    role: 'user'
  };

  const [formData, setFormData] = useState(initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({...formData, id: Date.now()});
    setFormData(initialState);
  };
  return (
    <form onSubmit={handleSubmit} className="user-form">
      <input
        type="text"
        placeholder="Nombre"
        value={formData.name}
        onChange={(e) => setFormData({...formData, name: e.target.value})}
        required
      />
      <input
        type="email"
        placeholder="Email"
        value={formData.email}
        onChange={(e) => setFormData({...formData, email: e.target.value})}
        required
      />
      <select
        value={formData.role}
        onChange={(e) => setFormData({...formData, role: e.target.value})}
      >
        <option value="user">Usuario</option>
        <option value="admin">Administrador</option>
      </select>
      <button type="submit">Agregar Usuario</button>
    </form>
  );
 
};

export default UserForm;
