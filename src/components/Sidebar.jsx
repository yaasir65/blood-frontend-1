import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { FaTint } from 'react-icons/fa'; // Blood icon from react-icons
import { Link, useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate= useNavigate()

  const logout= ()=>{
    localStorage.clear();
    navigate('/login');
  } 


  return (
    <div className="">
      {/* Sidebar */}
      <div className={`fixed top-0 left-0 md:w-[20%]  h-full bg-blue-900 text-white transition-transform duration-300 ease-in-out transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}>
        <div className="flex items-center justify-between p-4 bg-red-600">
          <h1 className="text-xl font-bold ml-16">Menu</h1>
          <button className="md:hidden text-white" onClick={() => setIsOpen(false)}>
            <FiX size={24} />
          </button>
        </div>
        <nav className="p-4 text-2xl">
          <ul>
            <li className="py-2 px-4 hover:bg-red-600 rounded">
              <a href="/dashboard" className="flex items-center">
              <i class="fa-brands fa-microsoft mr-2 "></i>
                Dashboard
              </a>
            </li>
            <li className="py-2 px-4 hover:bg-red-600 rounded">
              <a href="/members" className="flex items-center">
              <i class="fa-solid fa-user-group mr-2 "></i>
                Members
              </a>
            </li>
            <li className="py-2 px-4 hover:bg-red-600 rounded">
              <a href="/createAdmin" className="flex items-center">
              <i class="fa-solid fa-plus mr-2"></i>
                Create Admin
              </a>
            </li>
             <li onClick={logout} className="py-2 px-4 hover:bg-red-600 rounded">
              <a href="/login" className="flex items-center">
              <i class="fa-solid fa-power-off mr-2"></i>
               Logout
              </a>
            </li> 
          </ul>
        </nav>
      </div>

      {/* Menu Button for mobile */}
      <div className="md:hidden">
        <button
          className=" text-black p-4 fixed top-0 left-0"
          onClick={() => setIsOpen(true)}
        >
          <FiMenu  size={40} />
        </button>
      </div>
      
      {/* Content area */}
      <div className="flex-grow p-6 bg-gray-100">
        <h2 className="text-2xl   sm:hidden ml-[100px] font-bold">Main Content Area</h2>
        {/* Rest of your dashboard content */}
      </div>
    </div>
  );
};

export default Sidebar;
