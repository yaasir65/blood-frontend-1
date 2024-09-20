import React, { useState } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import the CSS for toast notifications
import Header from './pages/Header';

function BloodRegister() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [phone, setPhone] = useState("");
  const [degmo, setDegmo] = useState("");
  const [blood, setBlood] = useState("");
  const [gender, setGender] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate(); // Hook for navigation

  const validateForm = () => {
    if (!name || !age || !phone || !degmo || !blood || !gender) {
      setError("All fields must be filled out");
      return false;
    }
    setError("");
    return true;
  };

  const createBlood = (e) => {
    e.preventDefault();
    if (validateForm()) {
      axios.post("http://localhost:1000/register", {
        "name": name,
        "phone": phone,
        "age": age,
        "district": degmo,
        "bloodType": blood,
        "gender": gender
      }).then(() => {
        toast.success("Mahadsanid waad is diwangalise!");
        // Reset form fields after successful submission
        setName("");
        setPhone("");
        setAge("");
        setDegmo("");
        setBlood("");
        setGender("");
        // Redirect to home page after successful submission
        setTimeout(() => {
          navigate("/");
        }, 3000); // Delay for toast notification to be visible
      }).catch((error) => {
        console.log(error);
        toast.error("An error occurred while sending data.");
      });
    }
  };

  return (
    <div className="relative">
      <Header />
      <div className="max-w-4xl mt-10 md:mt-24 mx-auto p-6 md:p-8 bg-red-600 rounded-lg shadow-md">
        <h2 className="text-xl md:text-2xl font-bold text-white text-center mb-6">Blood Donation Form</h2>

        {error && <p className="text-white text-center mb-4">{error}</p>}

        <form onSubmit={createBlood} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Name Input */}
          <div>
            <label htmlFor="name" className="block text-white font-semibold mb-2">Name</label>
            <input
              value={name}
              onChange={(event) => setName(event.target.value)}
              type="text"
              id="name"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your name"
            />
          </div>

          {/* Phone Number Input */}
          <div>
            <label htmlFor="phone" className="block text-white font-semibold mb-2">Phone Number</label>
            <div className="flex">
              <select id="country_code" className="w-1/4 px-4 py-2 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>+252 (Somali)</option>
              </select>
              <input
                value={phone}
                onChange={(event) => setPhone(event.target.value)}
                type="tel"
                id="phone"
                className="w-3/4 px-4 py-2 border rounded-r-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your phone number"
              />
            </div>
          </div>

          {/* Blood Type Input */}
          <div>
            <label htmlFor="blood_type" className="block text-white font-semibold mb-2">Blood Type</label>
            <select
              id="blood_type"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={blood}
              onChange={(event) => setBlood(event.target.value)}
            >
              <option value="">Select Blood Type</option>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
            </select>
          </div>

          {/* Gender Input */}
          <div>
            <label htmlFor="gender" className="block text-white font-semibold mb-2">Gender</label>
            <select
              id="gender"
              className="w-full px-4 py-2 border bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={gender}
              onChange={(event) => setGender(event.target.value)}
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>

          {/* Age Input */}
          <div>
            <label htmlFor="age" className="block text-white font-semibold mb-2">Age</label>
            <select
              id="age"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={age}
              onChange={(event) => setAge(event.target.value)}
            >
              <option value="">Select Age Range</option>
              <option value="18-25">18-25</option>
              <option value="25-30">25-30</option>
              <option value="30-35">30-35</option>
              <option value="35-40">35-40</option>
              <option value="40-45">40-45</option>
              <option value="45-50">45-50</option>
              <option value="50-60">50-60</option>
            </select>
          </div>

          {/* District/Town Input */}
          <div>
            <label htmlFor="district" className="block text-white font-semibold mb-2">District/Town</label>
            <input
              value={degmo}
              onChange={(event) => setDegmo(event.target.value)}
              type="text"
              id="district"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your District/Town"
            />
          </div>

          {/* Submit Button */}
          <div className="col-span-1 md:col-span-2 mt-4">
            <button
              type="submit"
              className="w-full bg-blue-900 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
            >
              Submit
            </button>
          </div>
        </form>
      </div>

      {/* Toast Container for Notifications */}
      <ToastContainer />
    </div>
  );
}

export default BloodRegister;
