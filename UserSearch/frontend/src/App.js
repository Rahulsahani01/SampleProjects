import React from 'react';
import UsersTable from './UsersTable';
import './App.css'; // Assuming you might want some app-wide CSS

function App() {
  return (
    <div className="App">
      <h1>User Listing with Search and Pagination</h1>
      <UsersTable />
    </div>
  );
}

export default App;
