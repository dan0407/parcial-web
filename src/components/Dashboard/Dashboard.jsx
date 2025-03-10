import React from 'react';

const Dashboard = ({ users }) => {
  const totalUsers = users.length;
  const adminCount = users.filter(user => user.role === 'admin').length;

  return (
    <div className="dashboard">
      <h2>Panel de Control</h2>
      <div className="stats">
        <div className="stat-item">
          <h3>Total Usuarios</h3>
          <p>{totalUsers}</p>
        </div>
        <div className="stat-item">
          <h3>Administradores</h3>
          <p>{adminCount}</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
