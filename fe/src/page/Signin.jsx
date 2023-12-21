/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { writeContract } from '@wagmi/core';
import LoginAbi from '../assets/Abi/Authentication.json';


import backgroundImage from '../assets/pxfuel.jpg';

const Authentication = ({ setIsAuthenticated, setWalletAddress }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [loginError, setLoginError] = useState(null);
  const navigate = useNavigate();

  const handleInputChange = () => {
    if (loginError) {
      setLoginError(null);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setIsLoading(true);

    try {
      const username = event.target.username.value;
      const password = event.target.password.value;

      await writeContract({
        address: '0xA0b9Dc94FDbcE89EBF9B3a99918207c5fB5efa24',
        abi: LoginAbi,
        functionName: 'login',
        args: [username, password],
      });

      setIsLoading(false);
      setIsAuthenticated(true); // Set authentication state to true
      navigate('/Vote');
    } catch (error) {
      console.error('Login failed:', error);
      setLoginError('Invalid username or password');
      setIsLoading(false);
    }
  };

  return (
    <div
      className="min-h-screen bg-gray-800 py-6 flex flex-col justify-center sm:py-12 md:py-16 lg:py-20"
      style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      
      <div className="relative py-3 sm:max-w-xl sm:mx-auto mt-14">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-700 to-purple-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="text-white relative px-4 py-10 bg-indigo-400 shadow-lg sm:rounded-3xl sm:p-20">
          
          <div className="text-center pb-6">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-7">Login</h1>

          </div>
          <form onSubmit={handleSubmit}>
            <label htmlFor="username" className="text-white">
              Username/Email
              <input
                id="username"
                className="shadow mb-4 appearance-none border rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Username/Email"
                name="username"
                onChange={handleInputChange}
              />
            </label>
            <label htmlFor="password" className="text-white">
              Password
              <input
                id="password"
                className="shadow mb-4 appearance-none border rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="password"
                placeholder="Password"
                name="password"
                onChange={handleInputChange}
              />
            </label>
            {loginError && (
              <div className="flex items-center p-4 mb-4 text-sm text-red-800 rounded-full bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                <svg className="flex-shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
                </svg>
                <span className="sr-only">Info</span>
                <div>
                  <span className="font-medium">{loginError}</span>
                </div>
              </div>
            )}
            <div className="flex justify-between">
              <button
                className="shadow bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full sm:w-auto"
                type="submit"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    Loading{' '}
                    <span className="animate-spin inline-block w-4 h-4 border-t-2 border-white ml-2"></span>
                  </>
                ) : (
                  'Login ➤'
                )}
              </button>
            </div>
          </form>
          <p className="text-gray-300 mt-4 text-center">
            Belum Punya akun?{' '}
            <Link to="/SignUp" className="block text-center mt-4 hover:underline hover:text-cyan-600 transition-all">
              <span className="relative inline-block hover:underline">Buat Akun</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Authentication;