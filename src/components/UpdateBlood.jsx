import React, { useEffect, useState } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import the CSS for toast notifications
import Header from './pages/Header';
import { useParams } from 'react-router-dom';

function UpdateBlood() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [phone, setPhone] = useState("");
  const [degmo, setDegmo] = useState("");
  const [blood, setBlood] = useState("");
  const [gender, setGender] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate(); // Hook for navigation
  const { _id } = useParams(); // Destructure _id from params

  const validateForm = () => {
    if (!name || !age || !phone || !degmo || !blood || !gender) {
      setError("All fields must be filled out");
      return false;
    }
    setError("");
    return true;
  };

  // Fetch single donor data by id
  const getSingleData = () => {
    axios
      .get(`http://localhost:1000/get/single/${_id}`)
      .then((res) => {
        setName(res.data.name);
        setAge(res.data.age);
        setDegmo(res.data.district);
        setGender(res.data.gender);
        setPhone(res.data.phone);
        setBlood(res.data.bloodType);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // Fetch data when the component mounts
  useEffect(() => {
    getSingleData(); // Ensure this is called, not just referenced
  }, [_id]);

  // Update the donor's data
  const updatedBlood = (e) => {
    e.preventDefault();
    if (validateForm()) {
      axios
        .put(`http://localhost:1000/update/blood/${_id}`, {
          name,
          phone,
          age,
          district: degmo,
          bloodType: blood,
          gender,
        })
        .then(() => {
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
            navigate("/members");
          }, 3000); // Delay for toast notification to be visible
        })
        .catch((error) => {
          console.log(error);
          toast.error("An error occurred while updating data.");
        });
    }
  };

  return (
    <div className='relative'>
      <Header />
      <div className="max-w-4xl mt-24 mx-auto p-6 bg-red-400 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-white text-center mb-6">Blood Donation Update Form</h2>

        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

        <form onSubmit={updatedBlood} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Name Input */}
          <div className="mb-3">
            <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Name</label>
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
          <div className="mb-3">
            <label htmlFor="phone" className="block text-gray-700 font-semibold mb-2">Phone Number</label>
            <div className="flex">
              <select id="country_code" className="w-1/4 px-4 py-2 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>+252 (Somali)</option>
                {/* Add more country codes if necessary */}
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
          <div className="mb-3">
            <label htmlFor="blood_type" className="block text-gray-700 font-semibold mb-2">Blood Type</label>
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
          <div className="mb-3">
            <label htmlFor="gender" className="block text-gray-700 font-semibold mb-2">Gender</label>
            <select
              id="gender"
              className="w-full px-4 py-2 border bg-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={gender}
              onChange={(event) => setGender(event.target.value)}
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>

          {/* Age Input */}
          <div className="mb-3">
            <label htmlFor="age" className="block text-gray-700 font-semibold mb-2">Age</label>
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
          <div className="mb-3 ">
            <label htmlFor="district" className="block text-gray-700 font-semibold mb-2">District/Town</label>
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
          <div className="col-span-2 mt-4">
            <button
              type="submit"
              className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
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

export default UpdateBlood;
