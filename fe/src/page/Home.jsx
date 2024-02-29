// Home.js
import React from "react";
import background from "../assets/image/aes.jpg";
import ReactApexChart from "react-apexcharts";
import useChartData from "../components/cart";
import Info from "./Info/Info";
import TableT from "./userTable/Index";

const Home = () => {
  const { options, series } = useChartData();

  return (
    <div
      className=" m relative min-h-screen flex flex-col"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <h1 className="text-gray-50 font-serif font-bold text-center text-4xl mt-24 mx-auto relative z-10">
        Selamat Datang Di KuVt
      </h1>
      <Info />
      <div className="flex justify-center items-center mt-24 ">
        <div id="chart">
          <ReactApexChart
            options={{
              ...options,
              plotOptions: {
                pie: {
                  dataLabels: {
                    style: {
                      colors: ["#FFFFFF"],
                    },
                  },
                },
              },
            }}
            series={series}
            type="pie"
            width={500}
          />
        </div>
      </div>
      <div className="justify-center items-center ">
        <h3 
        className="text-4xl text-gray-50 mx-auto relative z-10 text-center mt-24 mb-0 font-semibold">
          Daftar Nama Pemilih
        </h3>
        <TableT />
      </div>
    </div>
  );
};

export default Home;
