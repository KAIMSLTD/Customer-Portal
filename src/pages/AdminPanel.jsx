
import React, { useState, useEffect } from 'react';

const AdminPanel = () => {
  const [clients, setClients] = useState([]);
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [code, setCode] = useState('');

  useEffect(() => {
    const storedClients = JSON.parse(localStorage.getItem('clients')) || [];
    setClients(storedClients);
  }, []);

  useEffect(() => {
    localStorage.setItem('clients', JSON.stringify(clients));
  }, [clients]);

  const addClient = () => {
    if (name && company && code) {
      const newClient = { name, company, code };
      setClients([...clients, newClient]);
      setName('');
      setCompany('');
      setCode('');
    }
  };

  const removeClient = (index) => {
    const updatedClients = [...clients];
    updatedClients.splice(index, 1);
    setClients(updatedClients);
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Admin Panel</h1>
      <div className="flex gap-2 mb-4">
        <input
          className="border p-2 rounded"
          type="text"
          placeholder="Client Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="border p-2 rounded"
          type="text"
          placeholder="Company"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        />
        <input
          className="border p-2 rounded"
          type="text"
          placeholder="Client Code"
          value={code}
          onChange={(e) => setCode(e.target.value.toUpperCase())}
        />
        <button className="bg-blue-600 text-white px-4 py-2 rounded" onClick={addClient}>
          Add Client
        </button>
      </div>
      <ul>
        {clients.map((client, index) => (
          <li key={index} className="flex justify-between py-1 bg-gray-100 my-1 px-2">
            <span>{client.name} - {client.company} ({client.code})</span>
            <button className="text-red-500" onClick={() => removeClient(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminPanel;
