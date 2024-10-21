import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Notification.css'; // Import your CSS for styling
import NavBar from './NavBar';

const Notification = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    // Fetch data from your API
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:9000/notifpost/getAll'); // Replace with your API endpoint
        setNotifications(response.data); 
      } catch (error) {
        console.error('Error fetching notifications:', error);
      }
    };

    fetchData();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:9000/deleteNotifpostById/${id}`); 
      setNotifications(notifications.filter((notification) => notification.id !== id));
    } catch (error) {
      console.error('Error deleting notification:', error);
    }
  };

  return (
    <>
      <div>
        <NavBar />
      </div>
      <div className="notification-container">
        {notifications.length === 0 ? (
          <p>No notifications to display.</p>
        ) : (
          notifications.map((notification) => (
            <div key={notification.id} className="notification-card">
              <h3>{notification.name}</h3>
              <p>Email: {notification.email}</p>
              <p>Phone: {notification.mobile}</p>
              <p>Message: {notification.message}</p>
              <button onClick={() => handleDelete(notification.id)} className="delete-button">Delete</button>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default Notification;
