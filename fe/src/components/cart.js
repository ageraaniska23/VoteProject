// chartData.js
import { useState } from "react";

const useChartData = () => {
  const [options] = useState({
    chart: {
      width: 500,
      type: "pie",
    },
    labels: ["Paslon 01", "Paslon 02", "Paslon 03"],
    legend: {
      position: "bottom",
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
    // Menambahkan style untuk label
    style: {
      colors: ["#FFFFFF"], // Set warna putih untuk teks label
    },
  });

  const [series] = useState([94, 90, 13]);

  return { options, series };
};

export default useChartData;
