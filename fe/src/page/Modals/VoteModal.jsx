import React from "react";

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      id="popup-modal"
      tabIndex="-1"
      className="fixed top-0 right-0 left-0 z-50 flex items-center justify-center w-full h-screen bg-black bg-opacity-50"
    >
      <div className="relative p-4 w-full max-w-md">
        <div className="relative bg-gray-800 rounded-3xl py-8 shadow dark:bg-gray-700">
          {/* Modal header */}
          <button
            onClick={onClose}
            type="button"
            className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
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

          {/* Modal content */}
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
              APAKAH ANDA YAKIN MEMILIH PASANGAN INI?
            </h3>
            <div className="flex justify-center space-x-3">
              <button
                onClick={onClose}
                type="button"
                className="text-gray-50 hover:text-gray-950 bg-red-600 hover:bg-cyan-600 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-badge text-sm inline-flex items-center px-5 py-2.5 text-center"
              >
                Ya, VOTE SEKARANG
              </button>
              <button
                onClick={onClose}
                type="button"
                className="py-2.5 px-5 text-gray-50 hover:text-gray-950 bg-blue-600 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-badge text-sm inline-flex items-center text-center"
              >
                Tidak, BATAL
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
