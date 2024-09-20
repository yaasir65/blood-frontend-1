import React, { useState } from 'react';
import axios from 'axios'; // Import axios

function SignUp() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,  // Corrected this to use e.target.name
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Add form validation and submission logic here
    axios.post("http://localhost:1000/newAdmin", formData)
      .then(() => {
        alert('Admin Created Successfully!');
        // Reset form fields after successful submission
        setFormData({
          username: '',
          email: '',
          password: '',
        });
      })
      .catch((error) => {
        alert("An error occurred", error);
      });
  };

  return (
    <div className="h-screen flex justify-center items-center bg-cover bg-center">
      <div className="bg-white bg-opacity-80 p-10 rounded-lg shadow-lg w-full max-w-lg">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Create an Account</h2>
        <form onSubmit={handleSubmit}> {/* Add onSubmit here */}
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Username</label> {/* Changed label to Username */}
            <input
              type="text"
              name="username"  // Changed name to "username" to match the state
              value={formData.username}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        
          <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg font-bold transition duration-300">
            Sign Up
          </button>
        </form>
        <p className="text-center text-gray-600 mt-6">
          Already have an account? <a href="/login" className="text-blue-500 hover:underline">Login</a>
        </p>
      </div>
    </div>
  );
}

export default SignUp;
