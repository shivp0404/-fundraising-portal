import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import config from '../config';

const Login = () => {
  const [formData, setFormData] = useState({ name: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

 const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const res = await fetch(`${config.BASE_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: formData.name,
        password: formData.password,
      }),
    });

    const data = await res.json();

    if (res.ok) {
    

      localStorage.setItem('username', formData.name);

    
      navigate('/profile');
    } else {
      alert(data.message || 'Login failed');
    }
  } catch (error) {
    console.error('Error:', error);
    alert('Something went wrong');
  }
};


  return (
    <div className="min-h-screen bg-black px-4 pt-20 pb-10">
      <div className="bg-white w-full max-w-md m-auto h-screen shadow-2xl p-8 space-y-6">
        <h2 className="text-4xl font-bold text-center text-blue-700">Login</h2>

        <form className="space-y-7 m-5" onSubmit={handleSubmit}>
          <div>
            <label className="block font-semibold text-gray-700">Name</label>
            <input
              name="name"
              type="text"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none text-gray-800"
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
              className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none text-gray-800"
              placeholder="••••••••"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-md"
          >
            Login
          </button>
        </form>

        <p className="text-center text-sm text-gray-600">
          Don’t have an account?{' '}
          <a href="/" className="text-blue-500 hover:underline">Register</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
