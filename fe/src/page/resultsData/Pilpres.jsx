import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { pieChartData } from "../../components/ChartData";
import Nav from "../Navigation/nav";
import Info from "../Info/Info";
import background from "../../assets/image/as.jpg";

ChartJS.register(ArcElement, Tooltip, Legend);

const Pilpres = () => (
  <div
    className="bg-white m relative min-h-screen flex flex-col"
    style={{
      backgroundImage: `url(${background})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  >
    <div className="absolute inset-0 bg-black opacity-40"></div>
    <Nav />
    <h1 className="text-white font-serif font-bold text-center text-4xl mt-3 mx-auto relative z-10">
      Hasil Suara Pemilihan Presiden
    </h1>
    <Info />
    <div className=" flex justify-center items-center mt-24">
      <div className="w-full md:w-2/4">
        <Pie data={pieChartData} />
      </div>
    </div>
    
  </div>
);

export default Pilpres;
