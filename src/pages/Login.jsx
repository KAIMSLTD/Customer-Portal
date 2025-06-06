import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (input === "ABC123") {
      localStorage.setItem("password", input);
      navigate("/dashboard");
    } else if (input === "ALPHA123") {
      localStorage.setItem("password", input);
      navigate("/admin");
    } else {
      alert("Invalid password");
    }
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center bg-cover bg-center" style={{ backgroundImage: "url('/background.jpg')" }}>
      <div className="bg-white p-10 rounded shadow-lg text-center">
        <img src="/logo.jpg" alt="Logo" className="mx-auto mb-6 w-20 h-20" />
        <input
          type="password"
          placeholder="Enter password"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="border p-2 w-full mb-4"
        />
        <button onClick={handleLogin} className="bg-blue-600 text-white px-4 py-2 rounded w-full">
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
