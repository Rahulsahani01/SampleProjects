import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Import the CSS file for Home component

const Home = () => {
    return (
        <div className="home-container">
            <h1 className="home-title">Welcome to Our Application!</h1>
            <p className="home-description">Your journey starts here. Please log in or sign up to continue.</p>
            <div className="home-buttons">
                <Link to="/login" className="home-button login-button">Login</Link>
                <Link to="/signup" className="home-button signup-button">Sign Up</Link>
            </div>
        </div>
    );
};

export default Home;
