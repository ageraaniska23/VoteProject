// Home.js
import React from "react";

import Nav from "./Navigation/nav";
import background from "../assets/image/as.jpg";
import ReactApexChart from "react-apexcharts";
import useChartData from "../components/cart";
import Info from "./Info/Info";

const Home = () => {
  const { options, series } = useChartData();

  return (
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
      <h1 className="text-white font-serif font-bold text-center text-4xl mt-2 mx-auto relative z-10">
        Selamat Datang Di KuVt
      </h1>
     <Info />
      <div className="flex justify-center items-center mt-24">
        <div id="chart">
          <ReactApexChart
            options={options}
            series={series}
            type="pie"
            width={500}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
