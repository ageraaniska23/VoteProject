import React from "react";

import Nav from "./Navigation/nav";

const Home = () => (
  <div className="min-h-screen bg-blue-300 flex flex-col">
    <Nav />
    <div className="flex justify-end mr-12 mt-3 items-center">
      <div className="stats bg-primary text-primary-content">
        <div className="stat">
          <div className="stat-title text-white">Jumlah Pemilih</div>
          <div className="stat-value">0000</div>
        </div>
        <div className="stat">
          <div className="stat-title text-white">sudah memilih</div>
          <div className="stat-value">0000</div>
        </div>
      </div>
    </div>
  </div>
);

export default Home;
