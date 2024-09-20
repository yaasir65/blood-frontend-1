import React, { useState } from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login() {
  const navigate = useNavigate();
  const [email, setemail] = useState("");
  const [pass, setpass] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    axios.post("http://localhost:1000/login", {
      "email": email,
      "password": pass
    }).then((res) => {
      if (res.data.error) {
        toast.error("Incorrect Email or Password", {
          position: "top-center",
          autoClose: 3000,
        });
      } else if (res.data.empty) {
        toast.warn("Please enter both Email and Password", {
          position: "top-center",
          autoClose: 3000,
        });
      } else {
        toast.success("Login successful!", {
          position: "top-center",
          autoClose: 3000,
        });
        localStorage.setItem("admin", JSON.stringify(res.data));
        navigate("/dashboard");
      }
    }).catch((error) => {
      toast.error("An error occurred. Please try again.", {
        position: "top-center",
        autoClose: 3000,
      });
      console.log(error);
    });
  };

  return (
    <div className="h-screen flex justify-center items-center bg-cover bg-center" style={{ backgroundImage: `url('https://img.freepik.com/free-vector/gradient-network-connection-background_23-2148865393.jpg?t=st=1726664361~exp=1726667961~hmac=3482d879ae0a2cc81479e0cd7d83b61cae4d0135245ba0e594ec9bc890e67d38&w=740')` }}>
      <div className="bg-black bg-opacity-70 p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-white mb-6 text-center">Login</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-300 mb-2">Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setemail(e.target.value)}
              required
              className="w-full p-3 rounded bg-gray-800 text-white outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-300 mb-2">Password:</label>
            <input
              type="password"
              value={pass}
              onChange={(e) => setpass(e.target.value)}
              required
              className="w-full p-3 rounded bg-gray-800 text-white outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button onClick={handleLogin} className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg font-bold transition duration-300">
            Login
          </button>
        </form>
      </div>

      {/* Toast Container for displaying notifications */}
      <ToastContainer />
    </div>
  );
}

export default Login;
