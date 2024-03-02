/* eslint-disable react/prop-types */
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { writeContract } from "@wagmi/core";
import LoginAbi from "../assets/Abi/Authentication.json";

import backgroundImage from "../assets/image/wpp1.jpg";

const Authentication = ({ setIsAuthenticated }) => {
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
        address: "0xA0b9Dc94FDbcE89EBF9B3a99918207c5fB5efa24",
        abi: LoginAbi,
        functionName: "login",
        args: [username, password],
      });

      setIsLoading(false);
      setIsAuthenticated(true);
      navigate("/Vote");
    } catch (error) {
      console.error("Login failed:", error);
      setLoginError("Invalid username or password");
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
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative max-w-md mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-white backdrop-blur-md bg-white/10 rounded-3xl py-10 px-10 sm:px-10 md:px-12 lg:px-24">
          <div className="text-center pb-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-7">
              Login
            </h1>
          </div>
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="relative">
              <input
                className="w-full py-3 px-4 bg-transparent border-b-2 border-gray-300 text-absolute focus:outline-none focus:border-gray-500"
                type="text"
                name="username"
                onChange={handleInputChange}
              />
              <label className="absolute top-0 left-0 origin-left -translate-y-1/2">
                Ussername/Email
              </label>
            </div>
            <div className="relative">
              <input
                className="w-full py-3 px-4 bg-transparent border-b-2 border-gray-300 text-absolute focus:outline-none focus:border-gray-500"
                type="password"
                name="password"
                onChange={handleInputChange}
              />
              <label className="absolute top-0 left-0 origin-left -translate-y-1/2">
                Password
              </label>
            </div>

            {loginError && <div className="text-red-500">{loginError}</div>}
            <button
              type="submit"
              className="w-full py-3 px-4 bg-blue-600 hover:bg-indigo-700 text-gray-50 font-semibold rounded-badge hover:text-black focus:outline-none focus:ring focus:ring-indigo-200"
              disabled={isLoading}
            >
              {isLoading ? "Loading..." : "Login"}
            </button>
          </form>
          <p className="text-gray-300 mt-4 text-center">
            Don't have an account yet?{" "}
            <Link
              to="/SignUp"
              className="text-blue-500 hover:underline transition-all"
            >
              Sign Up.
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Authentication;
