import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { writeContract } from '@wagmi/core';
import SignABi from '../assets/Abi/Authentication.json';

// eslint-disable-next-line react/prop-types
const SignUp = ({ setIsAuthenticated }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [signupError, setSignupError] = useState(null);
    const navigate = useNavigate();
  
    const handleInputChange = () => {
      if (signupError) {
        setSignupError(null);
      }
    };
  
    const handleSubmit = async (event) => {
      event.preventDefault();
  
      setIsLoading(true);
  
      try {
        const username = event.target.username.value;
        const password = event.target.password.value;
        const email = event.target.email.value;
  
        await writeContract({
          address: '0xFe056e3c4273323DAbCAc6B62eaaCff6e9D64995', 
          abi: SignABi,
          functionName: 'signUp',
          args: [username, password, email],
        });
  
        setIsLoading(false);
        setIsAuthenticated(true); // Set authentication state to true
        // Handle success, e.g., navigate to the login page
        navigate('/Login');
      } catch (error) {
        console.error('Sign-up failed:', error);
        setSignupError('account is Already');
        setIsLoading(false);
      }
    };
  

  return (
    <div className="min-h-screen bg-gray-800 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-700 to-purple-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="text-white relative px-4 py-10 bg-indigo-400 shadow-lg sm:rounded-3xl sm:p-20">
          <div className="text-center pb-6">
            <h1 className="text-3xl">Buat Akun!</h1>
            <p className="text-gray-300 mt-3">Masukkan Data diri</p>
          </div>
          <form onSubmit={handleSubmit}>
            <input
              className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Username"
              name="username"
              onChange={handleInputChange}
            />
            <input
              className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleInputChange}
            />
            <input
              className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="email"
              placeholder="Email"
              name="email"
              onChange={handleInputChange}
            />
            {signupError && (
              <div className="flex items-center p-4 mb-4 text-sm text-red-800 rounded-full bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                <svg className="flex-shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
                </svg>
                <span className="sr-only">Info</span>
                <div>
                  <span className="font-medium">{signupError}</span>
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
                    'Daftar '
                    )}
                </button>
            </div>
          </form>
          <p className="text-gray-300 mt-4 text-center">
            Sudah Punya akun? 
            <Link to="/Login" className="block text-center mt-4 hover:underline hover:text-cyan-600 transition-all">
              <span className="relative inline-block hover:underline">Masuk</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
