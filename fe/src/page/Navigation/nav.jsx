import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="mt-20">
      <div className="flex border-b border-gray-200 dark:border-gray-700">
        <Link to="/Home" className="flex items-center h-10 px-2 py-2 -mb-px text-center text-black bg-transparent border-b-2 sm:px-4 -px-1 border-transparent dark:text-white whitespace-nowrap focus:outline-none hover:border-blue-700">
          <span className="mx-1 text-sm sm:text-base"> Home </span>
        </Link>

        <Link to="/Pilpres" className="flex items-center h-10 px-2 py-2 -mb-px text-center text-black bg-transparent border-b-2 border-transparent sm:px-4 -px-1 dark:text-white whitespace-nowrap cursor-base focus:outline-none hover:border-blue-700">
          <span className="mx-1 text-sm sm:text-base"> Pilpres </span>
        </Link>

        <Link to="#" className="flex items-center h-10 px-2 py-2 -mb-px text-center text-gray-700 bg-transparent border-b-2 border-transparent sm:px-4 -px-1 dark:text-white whitespace-nowrap cursor-base focus:outline-none hover:border-blue-700">
          <span className="mx-1 text-sm sm:text-base"> Pilkada </span>
        </Link>

        <Link to="/DprRi" className="flex items-center h-10 px-2 py-2 -mb-px text-center text-gray-700 bg-transparent border-b-2 border-transparent sm:px-4 -px-1 dark:text-white whitespace-nowrap cursor-base focus:outline-none hover:border-blue-700">
          <span className="mx-1 text-sm sm:text-base"> DPR </span>
        </Link>
      </div>
    </div>
  );
};

export default Nav;
