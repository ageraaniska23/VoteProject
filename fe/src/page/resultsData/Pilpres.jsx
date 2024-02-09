import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { pieChartData } from "../../components/ChartData";
import Nav from '../Navigation/nav'

ChartJS.register(ArcElement, Tooltip, Legend);

const Pilpres = () => (
  <div className="min-h-screen bg-blue-300 flex flex-col">
    <Nav />
    <div className="flex-1 container mx-auto p-4 mt-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex justify-center items-center">
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
        <div className="flex justify-center">
          <div className="w-full md:w-3/4">
            <Pie data={pieChartData} />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Pilpres;
