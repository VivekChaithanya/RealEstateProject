import React, { useState } from "react";
import axios from "axios";
import './ForgotPassword.css'; 

const ForgotPassword = ({ userId }) => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      const response = await axios.put(`http:localhost:9000/user/update/${userId}`, {
        password: newPassword,
      });
      if (response.status === 200) {
        setSuccess("Password updated successfully!");
        setError("");
      }
    } catch (err) {
      setError("Error updating password.");
    }
  };

  return (
    <div className="update-password-container">
      <form onSubmit={handleSubmit} className="update-password-form">
        <h2>Update Password</h2>
        {error && <p className="error">{error}</p>}
        {success && <p className="success">{success}</p>}
        <div className="form-group">
          <label>New Password</label>
          <input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Confirm Password</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="submit-button">Update Password</button>
      </form>
    </div>
  );
};

export default ForgotPassword;
