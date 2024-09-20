import React, { useEffect, useState } from 'react';
import Sidebar from "../components/Sidebar"
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const navigate = useNavigate();

  const admin = JSON.parse(localStorage.getItem("admin"));

  useEffect(() => {
    if (!admin) {
      navigate("/login");
    }
  }, [admin, navigate]);

  const [totalMembers, setTotalMembers] = useState("");
  const [totalAdmins, setTotalAdmins] = useState("");
  const [totalUsers, setTotalUsers] = useState("");

  const getAllMembers = () => {
    axios.get("http://localhost:1000/get/Totalblood")
      .then((res) => {
        setTotalMembers(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getTotalAdmins = () => {
    axios.get("http://localhost:1000/total/admins").then((res) => {
      setTotalAdmins(res.data.totalAdmins);
    }).catch((error) => {
      console.log(error);
    });
  };

  const getTotalUsers = () => {
    axios.get("http://localhost:1000/total/users").then((res) => {
      setTotalUsers(res.data.totalUsers);
    }).catch((error) => {
      console.log(error);
    });
  };

  useEffect(() => {
    getAllMembers();
    getTotalAdmins();
    getTotalUsers();
  }, []);

  return (
    <div className="flex">
      <Sidebar />

      <main className="flex-1 ml-0 md:ml-64 p-4">
        {/* User Information (Name and Profile Picture) */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-red-700">
            {/* Welcome, <span className='text-blue-900'>{admin.username}!</span> as an Admin */}
          </h1>
        </div>

        {/* Total Members Info */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="bg-blue-900 text-center p-6 rounded-lg shadow-lg flex flex-col justify-center items-center">
            <h1 className="text-xl font-bold text-white mb-2">Total Members</h1>
            <h2 className="text-2xl font-bold text-white">{totalMembers}</h2>
          </div>
          <div className="bg-red-600 text-center p-6 rounded-lg shadow-lg flex flex-col justify-center items-center">
            <h1 className="text-xl font-bold text-white mb-2">Total Admins</h1>
            <h2 className="text-2xl font-bold text-white">{totalAdmins}</h2>
          </div>
          <div className="bg-blue-900 text-center p-6 rounded-lg shadow-lg flex flex-col justify-center items-center">
            <h1 className="text-xl font-bold text-white mb-2">Total Users</h1>
            <h2 className="text-2xl font-bold text-white">{totalUsers}</h2>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
