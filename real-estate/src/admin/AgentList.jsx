// AgentList.js
import React from 'react';

const AgentList = ({ agents, setSelectedAgent, handleDelete }) => {
  return (
    <div className="agent-list">
      <h2>Agents</h2>
      <ul>
        {agents.map((agent) => (
          <li key={agent.id} onClick={() => setSelectedAgent(agent)}>
            {agent.name} - <button onClick={() => handleDelete(agent.id, 'agents')}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AgentList;
