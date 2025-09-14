import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            navigate('/');
            return;
        }

        const fetchDashboard = async () => {
            try {
                const response = await axios.get('http://localhost:8000/dashboard.php', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });

                if (response.data.loggedIn) {
                    setUser(response.data.user);
                } else {
                    localStorage.removeItem('token');
                    navigate('/');
                }
            } catch (err) {
                console.log(err);
                localStorage.removeItem('token');
                navigate('/');
            }
        };

        fetchDashboard();
    }, [navigate]);

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/');
    };

    return (
        <div>
            {user ? (
                <div>
                    <h2>Welcome, {user}</h2>
                    <button onClick={handleLogout}>Logout</button>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default Dashboard;