import React from 'react';
import { useNavigate } from 'react-router-dom';
import backgroundImage from '../assets/alam.jpg'; // Import the background image

const Hero = () => {
  const navigate = useNavigate();

  const handleLoginButtonClick = () => {
    navigate('/login');
  };

  return (
    <div className="h-screen">
      <section
        className="bg-white dark:bg-gray-900 w-full h-full "
        style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6 h-full">
          <img
            className="w-full hidden dark:block mt-14"
            src="https://www.svgrepo.com/show/70986/vote.svg"
            alt="dashboard image"
          />
          <div className="mt-4 text-lgh-full">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Ayo ciptakan pemilihan yang jujur dan transparan di platform ini.
            </h2>
            <p className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">
              Platform ini membantu Anda dalam memilih pempimpin yang diadakan secara votong atau Pemilu dengan memanfaatkan teknologi Blockchain supaya lebih transparat dan mengurangi resiko kecurangan, jaringan yang digunakan adalah BSC testnet
            </p>
            <button
              onClick={handleLoginButtonClick}
              className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800"
            >
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Get Started
              </span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
