// AdminDashboard.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserList from './UserList';
import SellerList from './SellerList';
import AgentList from './AgentList';
import './AdminDashboard.css';

const AdminDashboard = () => {
  const [users, setUsers] = useState({});
  const [sellers, setSellers] = useState({});
  const [agents, setAgents] = useState({});
  const [selectedUser, setSelectedUser] = useState(null);
  const [selectedSeller, setSelectedSeller] = useState(null);
  const [selectedAgent, setSelectedAgent] = useState(null);

  // Fetch data from the server
  useEffect(() => {
    const fetchData = async () => {
      const usersRes = await axios.get('http://localhost:9000/detailsget');
      const sellersRes = await axios.get('http://localhost:9000/salepost/getAll');
      const agentsRes = await axios.get('');
      setUsers(usersRes.data);
      setSellers(sellersRes.data);
      setAgents(agentsRes.data);
    };

    fetchData();
  }, []);

  // Handler for deleting seller or agent
  const handleDelete = async (id, type) => {
    if (window.confirm('Are you sure you want to delete this profile?')) {
      await axios.delete(`/api/${type}/${id}`);
      if (type === 'sellers') {
        setSellers(sellers.filter((seller) => seller.id !== id));
      } else if (type === 'agents') {
        setAgents(agents.filter((agent) => agent.id !== id));
      }
    }
  };

  return (
    <div className="admin-dashboard">
      <h1>Admin Dashboard</h1>
      <div className="list-container">
        <UserList users={users} setSelectedUser={setSelectedUser} />
        <SellerList sellers={sellers} setSelectedSeller={setSelectedSeller} handleDelete={handleDelete} />
        <AgentList agents={agents} setSelectedAgent={setSelectedAgent} handleDelete={handleDelete} />
      </div>

      <div className="details-container">
        {selectedUser && (
          <div className="user-details">
            <h2>User Details</h2>
            <p>Username: {selectedUser.username}</p>
            <p>Email: {selectedUser.email}</p>
            <p>Mobile: {selectedUser.mobile}</p>
          </div>
        )}

        {selectedSeller && (
          <div className="seller-details">
            <h2>Seller Details</h2>
            <p>Seller Name: {selectedSeller.name}</p>
            <p>Email: {selectedSeller.email}</p>
            <p>Mobile: {selectedSeller.mobile}</p>
            <h3>Properties:</h3>
            <div className="properties">
              {selectedSeller.properties.map((property, index) => (
                <div className="property" key={index}>
                  <img src={property.image} alt={`property-${index}`} />
                  <p>{property.details}</p>
                </div>
              ))}
            </div>
            <button onClick={() => handleDelete(selectedSeller.id, 'sellers')}>Delete Seller</button>
          </div>
        )}

        {selectedAgent && (
          <div className="agent-details">
            <h2>Agent Details</h2>
            <p>Agent Name: {selectedAgent.name}</p>
            <p>Email: {selectedAgent.email}</p>
            <p>Mobile: {selectedAgent.mobile}</p>
            <h3>Properties:</h3>
            <div className="properties">
              {/* {selectedAgent.properties.map((property, index) => (
                <div className="property" key={index}>
                  <img src={property.image} alt={`property-${index}`} />
                  <p>{property.details}</p>
                </div>
              ))} */}
            </div>
            <button onClick={() => handleDelete(selectedAgent.id, 'agents')}>Delete Agent</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
