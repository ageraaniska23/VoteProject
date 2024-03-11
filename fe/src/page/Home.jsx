import{ useState, useEffect } from "react";
import background from "../assets/image/aes.jpg";
import ReactApexChart from "react-apexcharts";
import useChartData from "../components/cart";
import Info from "./Info/Info";
import TableT from "./userTable/Index";
import InfoWinner from "./userTable/InfoWinner";


const Home = () => {
  const { options, series } = useChartData();
  const [chartWidth, setChartWidth] = useState(500); // Initial width

  useEffect(() => {
    const handleResize = () => {
      // Adjust chart width based on screen size
      const screenWidth = window.innerWidth;
      let newWidth;
    
      if (screenWidth > 700) {
        // For larger screens, set a fixed width
        newWidth = 650;
      } else {
        // For smaller screens, adjust width dynamically
        newWidth = screenWidth - 500;
      }
    
      setChartWidth(newWidth);
    };
    

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Call handleResize initially to set initial width
    handleResize();

    // Cleanup function to remove event listener
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty dependency array ensures useEffect runs only once

  return (
    <div
      className=" m relative min-h-screen flex flex-col"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-70 "></div>
      <h1 className="text-gray-50 font-serif font-bold text-center text-4xl mt-24 mx-auto relative z-10">
        Selamat Datang Di KuVt
      </h1>
      <h3 className="text-gray-50 font-serif font-bold text-center text-3xl mt-2 mx-auto relative z-10">
        Layanan Voting Transparan
      </h3>
      <Info />
      <div className="flex justify-center items-center mt-24">
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
            width={chartWidth}
          />
        </div>
      </div>

      <div className="justify-center items-center ">
      <h3 className="text-3xl text-gray-50 mx-auto relative z-10 text-center mt-24  font-semibold">
          Hasil Sementara
        </h3>
        <InfoWinner />
        <h3 className="text-3xl text-gray-50 mx-auto relative z-10 text-center mt-24 mb-0 font-semibold">
          Daftar dan Status Pemilih
        </h3>
        <TableT />
      </div>
    </div>
  );
};

export default Home;
