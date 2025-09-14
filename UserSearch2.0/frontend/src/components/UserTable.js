import React from 'react';

const UserTable = ({ users, loading }) => {
  if (loading) {
    return <div style={{ textAlign: 'center', padding: '20px' }}>Loading...</div>;
  }

  if (users.length === 0) {
    return <div style={{ textAlign: 'center', padding: '20px' }}>No users found.</div>;
  }

  return (
    <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '20px' }}>
      <thead>
        <tr style={{ backgroundColor: '#f5f5f5' }}>
          <th style={{ padding: '12px', textAlign: 'left', border: '1px solid #ddd' }}>ID</th>
          <th style={{ padding: '12px', textAlign: 'left', border: '1px solid #ddd' }}>Name</th>
          <th style={{ padding: '12px', textAlign: 'left', border: '1px solid #ddd' }}>Email</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td style={{ padding: '12px', border: '1px solid #ddd' }}>{user.id}</td>
            <td style={{ padding: '12px', border: '1px solid #ddd' }}>{user.name}</td>
            <td style={{ padding: '12px', border: '1px solid #ddd' }}>{user.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserTable;