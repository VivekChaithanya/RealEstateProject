import React, { useState } from 'react';
import './AdminLogin.css';

const AdminLogin = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});

    const validateForm = () => {
        const newErrors = {};
        if (!username) newErrors.username = "Email is required.";
        if (!password) newErrors.password = "Password is required.";
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit =async (e) => {
        e.preventDefault();
        if (validateForm()) {
            // Handle successful login here
            console.log('Login successful');
            // Reset input fields
            setUsername('');
            setPassword('');
            setErrors({}); // Clear any previous errors
        }

        try {
            const response = await axios.post("http://localhost:9000/login",{username,password},{
                headers: {
                  "Access-Control-Allow-Origin": "*",
                  "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
                }
              });
            // Handle successful login, perhaps store token
            console.log("Logged in", response.data);
        } catch (error) {
            console.error("Error during login", error);
        }
    };
    

    return (
        <>
        <section id='adminloginPage'>
            <div className="login-container">
                <h1>Admin Login</h1>
                <form onSubmit={handleSubmit} className='adminform'>
                    <div className="input-group">
                        <label htmlFor="uemail">Username</label>
                        <input
                            type="email"
                            id="uemail"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        {errors.username && <span className="error">{errors.username}</span>}
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        {errors.password && <span className="error">{errors.password}</span>}
                    </div>
                    <button type="submit">Login</button>
                </form>
            </div>
        </section>
        </>
    );
};

export default AdminLogin;