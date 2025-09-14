import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Login';
import Dashboard from './Dashboard';
import Signup from './Signup';
import Home from './Home'; // Import the new Home component

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} /> {/* Set Home as the landing page */}
                <Route path="/login" element={<Login />} /> {/* Explicit route for Login */}
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/signup" element={<Signup />} />
            </Routes>
        </Router>
    );
}

export default App;
