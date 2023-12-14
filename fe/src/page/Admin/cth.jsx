import React, { useState } from 'react';

const Admin = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handlePrint = () => {
    window.print(); // This will trigger the print dialog
    setIsMenuOpen(false); // Close the menu after triggering print
  };

  return (
    <div className="fixed bottom-6 right-24 group">
      <div
        id="speed-dial-menu-dropdown"
        className={`${
          isMenuOpen ? 'flex' : 'hidden'
        } flex-col justify-end py-1 mb-4 space-y-2 bg-white border border-gray-100 rounded-lg shadow-sm dark:border-gray-600 dark:bg-gray-700`}
      >
        <ul className="text-sm text-gray-500 dark:text-gray-300">
            <li>
                <a href="#" className="flex items-center px-5 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 hover:text-gray-900 dark:hover:text-white">
                    <svg className="w-3.5 h-3.5 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
                        <path d="M14.419 10.581a3.564 3.564 0 0 0-2.574 1.1l-4.756-2.49a3.54 3.54 0 0 0 .072-.71 3.55 3.55 0 0 0-.043-.428L11.67 6.1a3.56 3.56 0 1 0-.831-2.265c.006.143.02.286.043.428L6.33 6.218a3.573 3.573 0 1 0-.175 4.743l4.756 2.491a3.58 3.58 0 1 0 3.508-2.871Z"/>
                    </svg>
                    <span className="text-sm font-medium">Share</span>
                </a>
            </li>
            <li>
                <a
                href="#"
                className="flex items-center px-5 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 hover:text-gray-900 dark:hover:text-white"
                onClick={handlePrint}
                >
                    <svg
                    className="w-3.5 h-3.5 me-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    >
                        <path
                            fillRule="evenodd"
                            d="M0 2.5C0 1.119 1.119 0 2.5 0S5 1.119 5 2.5 3.881 5 2.5 5 0 3.881 0 2.5zM1 2.5C1 1.673 1.673 1 2.5 1S4 1.673 4 2.5 3.327 4 2.5 4 1 3.327 1 2.5zm11 0C12 1.673 12.673 1 13.5 1 14.327 1 15 1.673 15 2.5S14.327 4 13.5 4 12 3.327 12 2.5zM4 5v3h12V5H4zm1 1h10v1H5V6zM5 8h10v1H5V8zm0 2h10v1H5v-1zM5 12h10v1H5v-1zM5 14h10v1H5v-1z"
                        />
                    </svg>
                    <span className="text-sm font-medium">Print</span>
                </a>
            </li>
            <li>
                <a href="#" className="flex items-center px-5 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 hover:text-gray-900 dark:hover:text-white">
                    <svg className="w-3.5 h-3.5 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M14.707 7.793a1 1 0 0 0-1.414 0L11 10.086V1.5a1 1 0 0 0-2 0v8.586L6.707 7.793a1 1 0 1 0-1.414 1.414l4 4a1 1 0 0 0 1.416 0l4-4a1 1 0 0 0-.002-1.414Z"/>
                        <path d="M18 12h-2.55l-2.975 2.975a3.5 3.5 0 0 1-4.95 0L4.55 12H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2Zm-3 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"/>
                    </svg>
                    <span className="text-sm font-medium">Save</span>
                </a>
            </li>  
        </ul>
      </div>
      <button
        type="button"
        onClick={toggleMenu}
        className="flex items-center justify-center ml-auto text-white bg-blue-700 rounded-full w-14 h-14 hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:focus:ring-blue-800"
      >
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 16 3"
        >
          <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
        </svg>
        <span className="sr-only">Open actions menu</span>
      </button>
    </div>
  );
};

export default Admin;
