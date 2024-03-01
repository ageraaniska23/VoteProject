import React, { useState } from "react";
import ProfileImage from "../assets/image/pro.jpg";
import Modal from "./Modals/VoteModal";

const AboutUs = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="min-h-screen flex items-center justify-center text-center text-gray-500 dark:text-gray-400 bg-gray-900 dark:bg-gray-950">
      <div>
        <h2 className="mb-4 mt-24 text-3xl sm:text-5xl tracking-tight font-extrabold text-gray-900 dark:text-white">
          About Me
        </h2>
        <img
          className="mx-auto mb-4 w-48 h-48 object-cover rounded-full"
          src={ProfileImage}
          alt="profile"
          style={{ marginTop: "10px", objectPosition: "center top" }}
        />

        <h3 className="mb-1 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
          <a>Agera Aniska</a>
        </h3>
        <p className="text-lg">Web Dev & Solidity Developer</p>
        <p className="text-lg">
          Mahasiswa Sistem Komputer Universitas Sriwijaya
        </p>
        <ul className="flex justify-center mt-4 space-x-4">
          {/* Social media links */}
        </ul>
      </div>
      <button
        onClick={toggleModal}
        className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
      >
        Toggle modal
      </button>

      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={toggleModal} />
    </div>
  );
};

export default AboutUs;
