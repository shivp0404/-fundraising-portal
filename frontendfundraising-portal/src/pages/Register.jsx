import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import config from '../config';
const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    password: '',
    refferalcode: '',
    totaldonation: 0,
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: name === 'totaldonation' ? Number(value) : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`${config.BASE_URL}/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
       navigate('/login');
      } else {
        alert(data.message || 'Registration failed');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred');
    }
  };

  return (
    <div className="min-h-screen bg-black px-4 pt-20 pb-10">
      <div className="bg-white w-full max-w-md m-auto h-screen shadow-2xl p-8 space-y-6">
        <h2 className="text-4xl font-bold text-center text-blue-700">Register</h2>

        <form onSubmit={handleSubmit} className="space-y-7 m-5">
          <div>
            <label className="block font-semibold text-gray-700">Name</label>
            <input
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md text-gray-800"
              placeholder="Your name"
              required
            />
          </div>

          <div>
            <label className="block font-semibold text-gray-700">Password</label>
            <input
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md text-gray-800"
              placeholder="••••••••"
              required
            />
          </div>

          <div>
            <label className="block font-semibold text-gray-700">Referral Code</label>
            <input
              name="refferalcode"
              type="text"
              value={formData.refferalcode}
              onChange={handleChange}
              className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md text-gray-800"
              placeholder="e.g., Name12345"
              required
            />
          </div>

          <div>
            <label className="block font-semibold text-gray-700">Total Donation</label>
            <input
              name="totaldonation"
              type="number"
              value={formData.totaldonation}
              onChange={handleChange}
              className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md text-gray-800"
              placeholder="e.g., 100"
              min="0"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-md"
          >
            Register
          </button>
        </form>

        <p className="text-center text-sm text-gray-600">
          Already have an account?{' '}
          <a href="/login" className="text-blue-500 hover:underline">Login</a>
        </p>
      </div>
    </div>
  );
};

export default Register;
