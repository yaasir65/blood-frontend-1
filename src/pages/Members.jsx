import React from 'react'
import Sidebar from "../components/Sidebar"
import axios from "axios"
import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import the CSS for toast notifications
import { Link, useNavigate } from 'react-router-dom';

function Members() {

  const [data, setdata] = useState([]);
  const navigate = useNavigate()

  // protecting this page
  const admin= localStorage.getItem("admin")
useEffect(()=>{
    if (!admin){
navigate("/login")
    }
})

  // Fetch data from server
  const getData = () => {
    axios.get("http://localhost:1000/get/blood").then((res) => {
      setdata(res.data);
    }).catch((error) => {
      console.log(error);
    });
  };

  useEffect(() => {
    getData();
  }, []);



  const handleDeleteBlood = (id)   => {
    axios.delete(`http://localhost:1000/delete/blood/${id}`).then(() => {
      toast.success("Mahadsanid waad is diwangalise!");
     }).catch((error) => {
    console.log(error)
     })
    
    }

  return (
    <div className='flex'>
      <Sidebar />
      <div className='ml-[17%] w-full   h-screen overflow-auto'>
        <div className='relative w-full'>
          <table className="w-full text-white table-auto">
            <thead className="bg-red-600 text-left sticky top-0">
              <tr>
                <th className="px-4 py-2">Name</th>
                <th className="px-4 py-2">Blood Type</th>
                <th className="px-4 py-2">Degmada/Magaalada</th>
                <th className="px-4 py-2">Number</th>
                <th className="px-4 py-2">Age</th>
                <th className="px-4 py-2">Gender</th>
                <th className="px-4 py-2">Actions</th>
                <th className="px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {data.map((data) => (
                <tr className="border-b text-black border-blue-900 hover:bg-blue-900 hover:text-white" key={data.phone}>
                  <td className="px-4 py-2">{data.name}</td>
                  <td className="px-4 py-2">{data.bloodType}</td>
                  <td className="px-4 py-2">{data.district}</td>
                  <td className="px-4 py-2">{data.phone}</td>
                  <td className="px-4 py-2">{data.age}</td>
                  <td className="px-4 py-2">{data.gender}</td>
                  <td className="px-4 py-2"><button onClick={()=>handleDeleteBlood(data._id)} className='bg-red-500 w-[100px]'>Delete</button></td>
                  <Link to={`/update/${data._id}`}><td className="px-4 py-2"><button   className='bg-red-100 w-[100px] text-black'>Update</button></td></Link>
             

                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <ToastContainer />
    </div>
  )
}

export default Members;
