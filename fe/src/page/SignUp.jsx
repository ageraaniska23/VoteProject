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
      setIsAuthenticated(true);
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
      <div className="relative max-w-md mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-white backdrop-blur-md bg-white/10 rounded-xl py-10 px-10 sm:px-10 md:px-12 lg:px-16">
          <div className="text-center pb-6">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-7 font-bold">
              Sign Up
            </h1>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="relative">
              <input
                className="w-full py-3 px-4 bg-transparent border-b border-gray-300 text-absolute focus:outline-none focus:border-gray-500"
                type="text"
                name="username"
                onChange={handleInputChange}
              />
              <label className="absolute top-0 left-0 origin-left -translate-y-1/2">
                Ussername
              </label>
            </div>
            <div className="relative">
              <input
                className="w-full py-3 px-4 bg-transparent border-b border-gray-300 text-absolute focus:outline-none focus:border-gray-500"
                type="password"
                name="password"
                onChange={handleInputChange}
              />
              <label className="absolute top-0 left-0 origin-left -translate-y-1/2">
                Password
              </label>
            </div>
            <div className="relative">
              <input
                className="w-full py-3 px-4 bg-transparent border-b border-gray-300 text-absolute focus:outline-none focus:border-gray-500"
                type="email"
                name="email"
                onChange={handleInputChange}
              />
              <label className="absolute top-0 left-0 origin-left -translate-y-1/2">
                Email
              </label>
            </div>
            {signupError && <div className="text-red-500">{signupError}</div>}
            <button
              type="submit"
              className="w-full py-3 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg focus:outline-none focus:ring focus:ring-indigo-200"
              disabled={isLoading}
            >
              {isLoading ? "Loading..." : "Sign Up"}
            </button>
          </form>
          <p className="text-gray-300 mt-4 text-center">
            Already have an account?{" "}
            <Link
              to="/Login"
              className="text-blue-500 hover:underline transition-all"
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
