import React from "react";
import { useNavigate } from "react-router-dom";
import clients from "../data/clients";

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <img src="/logo.jpg" alt="Logo" className="w-12 h-12" />
        <div>
          <button onClick={() => navigate("/calendar")} className="mx-2 text-blue-500 underline">Calendar</button>
          <button onClick={() => navigate("/admin")} className="mx-2 text-blue-500 underline">Admin Panel</button>
          <button onClick={() => { localStorage.removeItem("password"); navigate("/"); }} className="mx-2 text-red-500 underline">Logout</button>
        </div>
      </div>
      <h2 className="text-2xl mb-4">Client Overview</h2>
      <ul className="space-y-3">
        {clients.map((client, i) => (
          <li key={i} className="p-4 bg-gray-100 rounded shadow">
            <strong>{client.name}</strong> - {client.company}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
