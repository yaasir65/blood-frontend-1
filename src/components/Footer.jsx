import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className="w-full bg-blue-900 backdrop-blur-lg">
      <div className="h-[400px] flex flex-col justify-center items-center">
        <h1 className="text-white text-4xl font-bold text-center">Somali Blood Donation</h1>

        <div className="text-center mt-6">
          <input className="border-2 border-white outline-red-500 p-2 rounded-full w-[80%] sm:w-[320px]" type="email" placeholder="Search here" />
          <button className="bg-blue-900 p-2 w-[80px] mt-5 rounded-full font-bold text-white border-2 ml-2 border-white hover:bg-red-500">Search</button>
        </div>

        <div className="flex justify-center mt-6">
          <ul className="flex flex-wrap gap-6 text-white">
            <Link to="/"><li className="hover:text-red-500 cursor-pointer">Home</li></Link>
            <Link to="/about"><li className="hover:text-red-500 cursor-pointer">About</li></Link>
            <Link to="/find"><li className="hover:text-red-500 cursor-pointer">Find Blood</li></Link>
          </ul>
        </div>

        <h1 className="text-center text-white text-3xl pt-4">Donate today to save tomorrow</h1>
        <p className="text-center pt-6 text-white">Copyright@2024</p>
      </div>
    </div>
  )
}

export default Footer
