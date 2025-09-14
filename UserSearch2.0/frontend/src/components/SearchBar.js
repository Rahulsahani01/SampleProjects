import React from 'react';

const SearchBar = ({ searchTerm, onSearchChange }) => {
  return (
    <div style={{ marginBottom: '20px' }}>
      <input
        type="text"
        placeholder="Search users by name..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        style={{
          width: '100%',
          padding: '10px',
          fontSize: '16px',
          border: '1px solid #ddd',
          borderRadius: '4px',
          boxSizing: 'border-box'
        }}
      />
    </div>
  );
};

export default SearchBar;