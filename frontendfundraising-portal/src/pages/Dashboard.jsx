import React, { useEffect, useState } from 'react';
import config from "../config"
const Dashboard = () => {
  const [internData, setInternData] = useState("");

useEffect(() => {
  const name = localStorage.getItem('username');

  if (!name) return;

  fetch(`${config.BASE_URL}/profile`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name }),
  })
    .then((res) => res.json())
   .then((data) => {
      setInternData(data.user);
    })
    .catch((err) => console.error('Error fetching intern data:', err));
}, []);

  return (
    <div className="min-h-screen bg-black  justify-center py-10 px-4">
      <div className="w-50% max-w-4xl h-screen bg-white m-auto shadow-2xl p-8 md:p-12 space-y-10">
        
       
        <h1 className="text-4xl font-bold text-blue-700 text-center">Intern Dashboard</h1>

      
        <div className="bg-gray-100  rounde shadow-sm">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">👤 Profile Info</h2>
          {internData ? (
            <div className="space-y-4  text-gray-700">
              <p><span className="font-semibold">Name:</span> {internData.name}</p>
              <p><span className="font-semibold">Referral Code:</span> {internData.refferalcode}</p>
              <p><span className="font-semibold">Total Donation Raised:</span> ₹{internData.totaldonation}</p>
            </div>
          ) : (
            <p className="text-gray-600">Loading intern data...</p>
          )}
        </div>

      
        <div className="bg-blue-50 rounded-xl p-6 shadow-sm">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">🏆 Rewards</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 text-base">
            <li>🎉 Raise ₹5000 – Get Certificate</li>
            <li>💼 Raise ₹10000 – Get Internship Letter</li>
            <li>🎁 Raise ₹20000 – Get Goodies Pack</li>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default Dashboard;
