import Header from './Header';
import React, { useState, useEffect } from 'react';
import axios from "axios";

function FindBlood() {
  const [data, setdata] = useState([]);
  const [search, setsearch] = useState("");
  const [selectedBloodType, setSelectedBloodType] = useState("");

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

  // Filter data based on search (for city) and blood type
  const filteredData = data.filter((getdata) => {
    const searchLower = search.toLowerCase();
    return (
      selectedBloodType !== '' && searchLower.length >= 3 && // Ensure blood type is selected and city has at least 3 characters
      getdata.bloodType.toLowerCase() === selectedBloodType.toLowerCase() &&
      getdata.district.toLowerCase().includes(searchLower)
    );
  });

  return (
    <div className="container mx-auto p-4">
      <Header />

      {/* Container for Search input and Dropdown */}
      <div className="flex flex-col md:flex-row justify-center mt-[100px] space-y-4 md:space-y-0 md:space-x-4">
        
        {/* Search input for city */}
        <input
          value={search}
          onChange={(event) => setsearch(event.target.value)}
          type="text"
          id="search"
          className="w-full md:w-[400px] px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
          placeholder="Raadi magaalada (Ugu yaraan 3 xaraf)"
        />

        {/* Blood type dropdown */}
        <select
          value={selectedBloodType}
          onChange={(e) => setSelectedBloodType(e.target.value)}
          className="w-full md:w-[200px] px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
        >
          <option value=""> Dooro nuuca Dhiiga</option>
          <option value="A+">A+</option>
          <option value="A-">A-</option>
          <option value="B+">B+</option>
          <option value="B-">B-</option>
          <option value="O+">O+</option>
          <option value="O-">O-</option>
          <option value="AB+">AB+</option>
          <option value="AB-">AB-</option>
          {/* Add more blood types as needed */}
        </select>
      </div>

      {/* Display filtered results */}
      {selectedBloodType === '' || search.trim() === "" || search.length < 3 ? (
        <p className="text-center mt-20 text-4xl text-gray-400">
          Fadlan dooro nuuca dhiigga aad raadineyso  iyo Degmada ama magalada aad joogto .
        </p>
      ) : filteredData.length > 0 ? (
        <table className="w-full mt-20 text-center">
          <thead>
            <tr>
              <th> Name </th>
              <th> Blood Type </th>
              <th> Degmada/Magaalada </th>
              <th> Number </th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((data) => (
              <tr className="border-y-2" key={data.phone}>
                <td className="p-1">{data.name}</td>
                <td className=" p-1">{data.bloodType}</td>
                <td className=" p-1">{data.district}</td>
                <td className=" p-1">{data.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="text-center mt-20 text-gray-300 text-4xl">Waan ka xunahay, manoo diiwan gashano nuuca dhiigas qof wata oo joga degmadan magaladan.</p>
      )}
    </div>
  );
}

export default FindBlood;
