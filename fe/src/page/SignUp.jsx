/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { writeContract } from "@wagmi/core";
import SignABi from "../assets/Abi/Authentication.json";
import backgroundImage from "../assets/image/wpp1.jpg";

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
        address: "0xA0b9Dc94FDbcE89EBF9B3a99918207c5fB5efa24",
        abi: SignABi,
        functionName: "signUp",
        args: [username, password, email],
      });

      setIsLoading(false);
      setIsAuthenticated(true); // Set authentication state to true
      navigate("/Login");
    } catch (error) {
      console.error("Sign-up failed:", error);
      setSignupError("Akun Sudah Ada");
      setIsLoading(false);
    }
  };

  return (
    <div
      className="min-h-screen bg-gray-800 py-6 flex flex-col justify-center sm:py-12 md:py-16 lg:py-20"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="relative py-3 sm:max-w-xl sm:mx-auto mt-8">
        <div className="text-white backdrop-blur-md scale-100 bg-white/30 rounded-xl sm:p-20">
          <div className="text-center pb-6">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-7">
              Sign Up
            </h1>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="relative">
              <input
                className="peer mt-1 w-full border-b-2 border-gray-300 px-0 py-2 placeholder-transparent focus:border-gray-500 focus:outline-none bg-transparent text-white"
                type="text"
                placeholder="Username"
                name="username"
                onChange={handleInputChange}
              />
              <label
                htmlFor="username"
                className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-white opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-white peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-white"
              >
                Username
              </label>
            </div>
            
            <div className="relative mt-6">
              <input
                className="peer mt-1 w-full border-b-2 border-gray-300 px-0 py-2 placeholder-transparent focus:border-gray-500 focus:outline-none bg-transparent text-white"
                type="password"
                placeholder="Password"
                name="password"
                onChange={handleInputChange}
              />
              <label
                htmlFor="password"
                className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-white opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-white peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-white"
              >
                Password
              </label>
            </div>
            <div className="relative">
              <input
                className="peer mt-1 w-full border-b-2 border-gray-300 px-0 py-2 placeholder-transparent focus:border-gray-500 focus:outline-none bg-transparent text-white"
                type="email"
                placeholder="email"
                name="email"
                onChange={handleInputChange}
              />
              <label
                htmlFor="email"
                className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-white opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-white peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-white"
              >
                email
              </label>
            </div>
            {signupError && <div className="text-red-500">{signupError}</div>}
            <button
              type="submit"
              className="w-full py-2 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg focus:outline-none focus:ring focus:ring-indigo-200"
              disabled={isLoading}
            >
              {isLoading ? "Loading..." : "Sign Up"}
            </button>
          </form>
          <p className="text-gray-300 mt-4 text-center">
            Already have an account?{" "}
            <Link
              to="/Login"
              className="text-cyan-800 hover:underline transition-all"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
