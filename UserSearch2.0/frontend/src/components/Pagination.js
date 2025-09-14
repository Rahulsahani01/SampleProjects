import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const buttonStyle = {
    padding: '8px 12px',
    margin: '0 4px',
    border: '1px solid #ddd',
    backgroundColor: '#fff',
    cursor: 'pointer',
    borderRadius: '4px'
  };

  const activeButtonStyle = {
    ...buttonStyle,
    backgroundColor: '#007bff',
    color: 'white',
    border: '1px solid #007bff'
  };

  const disabledButtonStyle = {
    ...buttonStyle,
    backgroundColor: '#f5f5f5',
    cursor: 'not-allowed',
    color: '#999'
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px' }}>
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        style={currentPage === 1 ? disabledButtonStyle : buttonStyle}
      >
        Previous
      </button>
      
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          style={page === currentPage ? activeButtonStyle : buttonStyle}
        >
          {page}
        </button>
      ))}
      
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        style={currentPage === totalPages ? disabledButtonStyle : buttonStyle}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;