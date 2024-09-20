import { Link, useLocation, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from 'react';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation(); // Get the current location
  const navigate = useNavigate(); // To navigate programmatically
  const [user, setUser] = useState(null); // State to store user info

  // Use useEffect to get the user from localStorage
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    setUser(storedUser);
  }, []);

  // Function to handle logout
  const handleLogout = () => {
    localStorage.removeItem("user"); // Clear user from localStorage
    setUser(null); // Reset user state
    navigate("/home"); // Redirect to login page
  };

  return (
    <header className="w-full bg-white font-bold text-2xl backdrop-blur-md bg-opacity-60 shadow fixed top-0 left-0 right-0 z-10">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-red-500 text-2xl font-bold hover:scale-125 duration-700 hover:text-blue-900 cursor-pointer">
          Somali Blood Donation
        </h1>

        {/* Menu Icon for mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-2xl text-blue-900 hover:text-red-500"
          >
            {isMenuOpen ? '✕' : '☰'}
          </button>
        </div>

        {/* Navigation Links */}
        <nav
          className={`md:flex items-center space-x-6 absolute md:static top-[80px] left-0 w-full md:w-auto bg-white md:bg-transparent transition-transform duration-300 md:space-x-8 ${
            isMenuOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
          }`}
        >
          <Link to="/">
            <li
              className={`list-none p-4 text-blue-900 hover:scale-125 duration-300 cursor-pointer ${
                location.pathname === '/' ? 'underline' : 'hover:text-red-500'
              }`}
            >
              Home
            </li>
          </Link>

          <Link to="/about">
            <li
              className={`list-none p-4 text-blue-900 hover:scale-125 duration-300 cursor-pointer ${
                location.pathname === '/about' ? 'underline' : 'hover:text-red-500'
              }`}
            >
              About
            </li>
          </Link>

          {/* Conditionally show "Find Blood" link if user is logged in */}
          {user && (
            <Link to="/find">
              <li
                className={`list-none p-4 text-blue-900 hover:scale-125 duration-300 cursor-pointer ${
                  location.pathname === '/find' ? 'underline' : 'hover:text-red-500'
                }`}
              >
                Find Blood
              </li>
            </Link>
          )}

          {/* User Info / Login */}
          <div className="ml-auto flex items-center gap-4">
            {user ? (
              <>
                <span className="text-blue-900 text-2xl font-bold"> <i class="fa-solid fa-user text-2xl "></i> {user.username}</span>
            <Link to="/" >     <button
                  onClick={handleLogout}
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                >
                  Logout
                </button> </Link>
              </>
            ) : (
              <Link to="/userLogin">
                <li className="list-none p-4 text-blue-900 hover:scale-125 duration-300 cursor-pointer hover:text-red-500">
                  Login
                </li>
              </Link>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
