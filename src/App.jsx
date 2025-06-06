import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Calendar from "./pages/Calendar";
import AdminPanel from "./pages/AdminPanel";

function App() {
  const password = localStorage.getItem("password");

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={password ? <Dashboard /> : <Navigate to="/" />} />
      <Route path="/calendar" element={password ? <Calendar /> : <Navigate to="/" />} />
      <Route path="/admin" element={password === "ALPHA123" ? <AdminPanel /> : <Navigate to="/" />} />
    </Routes>
  );
}

export default App;
