import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ConnectButton } from '@rainbow-me/rainbowkit';

// eslint-disable-next-line react/prop-types
function NavBar({ setIsAuthenticated, isAuthenticated }) {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [navbarBackground, setNavbarBackground] = useState('bg-transparent');

  const handleLogout = () => {
    setIsModalOpen(true);
  };

  const handleConfirmLogout = () => {
    setIsModalOpen(false);
    setIsAuthenticated(false);
    navigate('/');
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 0) {
        // setNavbarBackground('bg-black dark:bg-gray-900');
        setNavbarBackground('backdrop-blur-md scale-100 bg-gray-950/700');
      } else {
        setNavbarBackground('backdrop-blur-md scale-100 bg-black/50');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <>
      <nav  className={`fixed w-full z-20 top-0 ${navbarBackground}`}>
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
          <a className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="https://www.svgrepo.com/show/92013/vote.svg" className="h-8 " alt="Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">KuVt</span>
          </a>
          <div className="flex md:order-2 space-x-3 md:space-x-8 rtl:space-x-reverse items-center">
            <ConnectButton chainStatus="icon" accountStatus="none" />
            {isAuthenticated && (
              <button 
              onClick={handleLogout} 
              className="flex items-center rounded-badge bg-blue-600 border border-white p-1 transition duration-300 ease-in-out hover:bg-red-800 font-semibold text-gray-100 dark:text-white hover:text-black">
              <span className="relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
                <img
                  src="https://www.svgrepo.com/show/216725/exit-logout.svg"
                  alt="Keluar"
                  className="w-6 h-6 max-w-xs transition duration-300 ease-in-out hover:scale-110"
                />
              </span>
              <span className="ml-1">Exit</span>
            </button>
            
              
            )}
            
            <button
              onClick={toggleMobileMenu}
              className="inline-flex items-center text-start  p-2 w-10 h-10 justify-center  text-gray-500 rounded-full md:hidden hover:bg-gray-100  focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-500 dark:focus:ring-blue-500"
              aria-controls="navbar-sticky"
              aria-expanded={isMobileMenuOpen ? 'true' : 'false'}
            >
              <span className="sr-only">Open main menu</span>
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
              </svg>
            </button>
          </div>
          <div
            className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${isMobileMenuOpen ? 'block' : 'hidden'}`}
            id="navbar-sticky"
          >
            <ul className="flex items-center gap-6 text-sm">
              <li>
                <a
                  className="block py-2 px-3  font-bold font-serif text-gray-900 md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  href="/Home"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  className="block py-2 px-3 font-bold font-serif text-gray-900 md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  href="/Vote"
                >
                  Vote
                </a>
              </li>
              <li>
                <a
                  className="block py-2 px-3 font-bold font-serif text-gray-900 md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  href="/Contact"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  className="block py-2 px-3 font-bold font-serif text-gray-900 md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  href="/About"
                >
                  About
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Confirmation Modal */}
      {isModalOpen && (
        <div
          id="popup-modal"
          tabIndex="-1"
          className="fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full bg-black bg-opacity-50"
        >
          <div className="relative p-4 w-full max-w-md max-h-full">
            <div className="relative bg-gray-700 rounded-lg shadow dark:bg-gray-700">
              <button
                type="button"
                onClick={handleCloseModal}
                className="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-hide="popup-modal"
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
              <div className="p-4 md:p-5 text-center">
                <svg
                  className="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
                <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                  Apakah Anda Ingin Keluar?
                </h3>
                <button
                  onClick={handleConfirmLogout}
                  type="button"
                  className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center me-2"
                >
                  Keluar
                </button>
                <button
                  onClick={handleCloseModal}
                  type="button"
                  className="text-white bg-gray-100 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                >
                  Batal
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default NavBar;
