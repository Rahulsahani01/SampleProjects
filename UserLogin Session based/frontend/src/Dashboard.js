import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css'; // Import the CSS file for Dashboard component

const Dashboard = () => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchDashboard = async () => {
            try {
                const response = await axios.get('http://localhost:8000/dashboard.php', {
                    withCredentials: true // Send cookies with the request
                });

                if (response.data.loggedIn) {
                    setUser(response.data.user);
                } else {
                    navigate('/login'); // Redirect to /login instead of / if not logged in
                }
            } catch (err) {
                console.log(err);
                navigate('/login'); // Redirect to /login instead of / on error
            }
        };

        fetchDashboard();
    }, [navigate]);

    const handleLogout = async () => {
        try {
            await axios.get('http://localhost:8000/logout.php', {
                withCredentials: true // Send cookies with the request
            });
            navigate('/login'); // Redirect to /login instead of / after logout
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div className="dashboard-container">
            <nav className="navbar">
                <div className="navbar-brand">My App</div>
                <button onClick={handleLogout} className="logout-button">Logout</button>
            </nav>
            {user ? (
                <div className="welcome-section">
                    <h2 className="welcome-title">Welcome, {user}!</h2>
                    <p className="welcome-message">You are now logged in to your dashboard.</p>
                </div>
            ) : (
                <p className="loading-message">Loading user data...</p>
            )}
        </div>
    );
};

export default Dashboard;