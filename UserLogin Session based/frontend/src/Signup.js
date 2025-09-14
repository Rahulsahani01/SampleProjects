import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import './Signup.css'; // Import the CSS file for Signup component

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const navigate = useNavigate();

    const handleSignup = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');

        try {
            const response = await axios.post('http://localhost:8000/signup.php', { email, password });
            if (response.data.success) {
                setSuccess('Signup successful! You will be redirected to login.');
                setTimeout(() => {
                    navigate('/login'); // Redirect to /login instead of / after signup
                }, 2000);
            } else {
                setError(response.data.message || 'An error occurred during signup.');
            }
        } catch (err) {
            console.log(err);
            setError('An error occurred during signup.');
        }
    };

    return (
        <div className="auth-container">
            <h2 className="auth-title">Sign Up</h2>
            <form onSubmit={handleSignup} className="auth-form">
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        placeholder="name@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="form-input"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="form-input"
                        required
                    />
                </div>
                <button type="submit" className="auth-button">Sign Up</button>
            </form>
            {error && <p className="error-message">{error}</p>}
            {success && <p className="success-message">{success}</p>}
            <p className="auth-switch-text">
                Already have an account? <Link to="/login" className="auth-link">Login</Link>
            </p>
        </div>
    );
};

export default Signup;