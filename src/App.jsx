import React, { useState, useEffect } from 'react';
import UserList from './components/UserList/UserList';
import UserForm from './components/UserForm/UserForm';
import Dashboard from './components/Dashboard/Dashboard';
import { initialUsers } from './data/data';
import './App.css';

const App = () => {
  const [users, setUsers] = useState(() => {
    const savedUsers = localStorage.getItem('users');
    return savedUsers ? JSON.parse(savedUsers) : initialUsers;
    
  });

  useEffect(() => {
    localStorage.setItem('users', JSON.stringify(users));
  }, [users]);

  const handleAddUser = (newUser) => {
    setUsers([...users, newUser]);
  };

  const handleEditUser = (editedUser) => {
    setUsers(users.map(user => 
      user.id === editedUser.id ? editedUser : user
    ));
  };

  const handleDeleteUser = (userId) => {
    setUsers(users.filter(user => user.id !== userId));
  };

  return (
    <div className="app">
      <Dashboard users={users} />
      <UserForm onSubmit={handleAddUser} />
      <UserList 
        users={users}
        onEdit={handleEditUser}
        onDelete={handleDeleteUser}
      />
    </div>
  );
};

export default App;
