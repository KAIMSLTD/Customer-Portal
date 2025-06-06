import React, { useState, useEffect } from "react";

const AdminPanel = () => {
  const [clients, setClients] = useState([]);
  const [form, setForm] = useState({ name: "", company: "" });

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("clients")) || [];
    setClients(saved);
  }, []);

  const handleAdd = () => {
    const updated = [...clients, form];
    localStorage.setItem("clients", JSON.stringify(updated));
    setClients(updated);
    setForm({ name: "", company: "" });
  };

  const handleDelete = (index) => {
    const updated = clients.filter((_, i) => i !== index);
    localStorage.setItem("clients", JSON.stringify(updated));
    setClients(updated);
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl mb-4">Admin Panel</h2>
      <input className="border p-2 mb-2 mr-2" placeholder="Client Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
      <input className="border p-2 mb-2 mr-2" placeholder="Company" value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} />
      <button onClick={handleAdd} className="bg-blue-600 text-white px-4 py-2 rounded">Add Client</button>
      <ul className="mt-6 space-y-2">
        {clients.map((c, i) => (
          <li key={i} className="flex justify-between bg-gray-100 p-2 rounded">
            <span>{c.name} - {c.company}</span>
            <button onClick={() => handleDelete(i)} className="text-red-500">Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminPanel;
