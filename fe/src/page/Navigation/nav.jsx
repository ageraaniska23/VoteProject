import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  const [activeButton, setActiveButton] = useState(
    localStorage.getItem("activeButton") || "Home"
  );

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
    localStorage.setItem("activeButton", buttonName);
  };

  return (
    <div className="mt-20">
      <div className="flex bmx-auto relative z-10 ">
        <Link
          to="/Home"
          className={`flex items-center h-10 px-2 py-2 -mb-px text-center ${
            activeButton === "Home"
              ? "border-b-2 border-blue-700"
              : "border-b-2 border-transparent"
          } text-black bg-transparent sm:px-4 -px-1 dark:text-white whitespace-nowrap focus:outline-none hover:border-blue-700`}
          onClick={() => handleButtonClick("Home")}
        >
          <span className="mx-1 text-sm sm:text-base"> Home </span>
        </Link>

        <Link
          to="/Pilpres"
          className={`flex items-center h-10 px-2 py-2 -mb-px text-center ${
            activeButton === "Pilpres"
              ? "border-b-2 border-blue-700"
              : "border-b-2 border-transparent"
          } text-black bg-transparent sm:px-4 -px-1 dark:text-white whitespace-nowrap cursor-base focus:outline-none hover:border-blue-700`}
          onClick={() => handleButtonClick("Pilpres")}
        >
          <span className="mx-1 text-sm sm:text-base"> Pilpres </span>
        </Link>

        <Link
          to="/Pilkada"
          className={`flex items-center h-10 px-2 py-2 -mb-px text-center ${
            activeButton === "Pilkada"
              ? "border-b-2 border-blue-700"
              : "border-b-2 border-transparent"
          } text-gray-700 bg-transparent sm:px-4 -px-1 dark:text-white whitespace-nowrap cursor-base focus:outline-none  hover:border-blue-700`}
          onClick={() => handleButtonClick("Pilkada")}
        >
          <span className="mx-1 text-sm sm:text-base"> Pilkada </span>
        </Link>

        <Link
          to="/DprRi"
          className={`flex items-center h-10 px-2 py-2 -mb-px text-center ${
            activeButton === "DPR"
              ? "border-b-2 border-blue-700"
              : "border-b-2 border-transparent"
          } text-gray-700 bg-transparent sm:px-4 -px-1 dark:text-white whitespace-nowrap cursor-base focus:outline-none hover:border-blue-700`}
          onClick={() => handleButtonClick("DPR")}
        >
          <span className="mx-1 text-sm sm:text-base"> DPR </span>
        </Link>

        <Link
          to="/DPD"
          className={`flex items-center h-10 px-2 py-2 -mb-px text-center ${
            activeButton === "DPD"
              ? "border-b-2 border-blue-700"
              : "border-b-2 border-transparent"
          } text-gray-700 bg-transparent sm:px-4 -px-1 dark:text-white whitespace-nowrap cursor-base focus:outline-none  hover:border-blue-700`}
          onClick={() => handleButtonClick("DPD")}
        >
          <span className="mx-1 text-sm sm:text-base"> DPD </span>
        </Link>
      </div>
    </div>
  );
};

export default Nav;
