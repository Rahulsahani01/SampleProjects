import React, { useState, useEffect, useCallback } from 'react';
import SearchBar from './components/SearchBar';
import UserTable from './components/UserTable';
import Pagination from './components/Pagination';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:8000';

function App() {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalUsers, setTotalUsers] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const perPage = 10;
  const totalPages = Math.ceil(totalUsers / perPage);

  const fetchUsers = async (search = '', page = 1) => {
    setLoading(true);
    setError(null);
    
    try {
      const params = new URLSearchParams();
      if (search) params.append('search', search);
      params.append('page', page.toString());
      
      const response = await fetch(`${API_URL}/index.php?${params}`);
      if (!response.ok) throw new Error('Failed to fetch users');
      
      const data = await response.json();
      setUsers(data.data);
      setTotalUsers(data.total);
    } catch (err) {
      setError(err.message);
      setUsers([]);
      setTotalUsers(0);
    } finally {
      setLoading(false);
    }
  };

  const debouncedFetchUsers = useCallback(
    debounce((search, page) => fetchUsers(search, page), 500),
    []
  );

  useEffect(() => {
    if (searchTerm.trim() === '') {
      fetchUsers('', currentPage);
    } else {
      debouncedFetchUsers(searchTerm, currentPage);
    }
  }, [searchTerm, currentPage, debouncedFetchUsers]);

  const handleSearchChange = (term) => {
    setSearchTerm(term);
    setCurrentPage(1);
  };

  function debounce(func, delay) {
    let timeoutId;
    return (...args) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => func.apply(null, args), delay);
    };
  }

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '30px' }}>User Search</h1>
      
      <SearchBar searchTerm={searchTerm} onSearchChange={handleSearchChange} />
      
      {error && (
        <div style={{ color: 'red', textAlign: 'center', marginBottom: '20px' }}>
          Error: {error}
        </div>
      )}
      
      <div style={{ marginBottom: '20px', textAlign: 'center', color: '#666' }}>
        {!loading && (
          <span>
            Showing {users.length} of {totalUsers} users 
            {searchTerm && ` for "${searchTerm}"`}
            {totalPages > 1 && ` (Page ${currentPage} of ${totalPages})`}
          </span>
        )}
      </div>
      
      <UserTable users={users} loading={loading} />
      
      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      )}
    </div>
  );
}

export default App;