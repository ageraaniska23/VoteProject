/* eslint-disable react/no-unescaped-entities */
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import image1 from "../assets/image/k.jpg";
import image2 from "../assets/image/wpp1.jpg";
import imaage3 from "../assets/image/indo.jpg";
import image4 from "../assets/image/indo1.jpg";
import image5 from "../assets/image/indo2.jpg";
const images = [image2, imaage3, image4, image5];

import transparent from "../assets/image/card/transparent.jpg";
import decentral from "../assets/image/card/desentral.jpg";
import funtion from "../assets/image/card/function.jpg";
import aman from "../assets/image/card/aman.jpg";

import background from "../assets/image/pemandangan.jpg";
// import logo from "../assets/image/a.png";

const Hero = () => {
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleHomeButtonClick = () => {
    navigate("/Home");
  };

  const handleLoginButtonClick = () => {
    navigate("/vote");
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  useEffect(() => {
    const slideshowInterval = setInterval(() => {
      handleNextImage();
    }, 3000);

    // Cleanup interval on component unmount
    return () => clearInterval(slideshowInterval);
  }, []);

  return (
    <div className="">
      <div
        className="px-6 sm:py-20 py-10 font-[sans-serif] transition-all duration-500"
        style={{
          backgroundImage: `url(${images[currentImageIndex]})`,
          minHeight: "40vh",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-screen-xl mx-auto text-center text-white mt-24">
          <h1 className="text-5xl max-sm:text-3xl font-extrabold leading-tight mb-4">
            Selamat Datang di KuVt
          </h1>
          <p className="text-lg mb-8">
            Ayo Sukseskan Demokrasi Dengan Aman, Damai, Transparan dan Jujur.
          </p>
          <div className="flex flex-col  space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <button
              onClick={handleHomeButtonClick}
              className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center bg-blue-500 hover:bg-cyan-400 rounded-md text-white"
            >
              Explore
            </button>
            <button
              onClick={handleLoginButtonClick}
              className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center bg-blue-500 hover:bg-cyan-400 rounded-md text-white"
            >
              Start Voting
            </button>
          </div>
        </div>
      </div>

      <div
        className="bg-white mt-0 relative"
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-70"></div>
        <div className="flex flex-col items-center px-5 py-8 mx-auto relative z-10 text-white shadow-lg">
          <div className="flex flex-col w-full prose text-left max-w-max lg:max-w-2xl mt-24">
            <div className="w-full mx-auto">
              <h1 className="mb-3">Apa itu KuVt Project?.</h1>

              <p>
                KuVt adalah sebuah platform penyedia layanan voting yang dapat
                digunakan oleh masyarakat dengan fitur utama yaitu transparan
                dan aman. Tujuan utama platform ini dibuat adalah untuk mencegah
                adanya kecurangan dalam pemilihan umum dan memberikan
                kepercayaan masyarakat terhadap demokrasi yang adil.
              </p>
            </div>
          </div>
        </div>
        <div className="items-center w-full px-5 text-white">
          <div className="flex flex-wrap w-full mx-auto prose max-w-max lg:max-w-3xl">
            <div className="relative lg:px-4">
              <div className="p-8">
                <h1 className="font-bold">
                  Fitur-fitur pada platform ini dapat memilh:
                </h1>
                <ul>
                  <li>1. Proses pemilihan yang dapat dipantau secara real-time dan transparan</li>
                  <li>
                    2. Mencegah adanaya kecurangan
                  </li>
                  <li>
                    3. Hanya pemilih yang terdaftar yang dapat memilih
                  </li>
                  <li>
                    4. Wallet address hanya dapat dipakai sekali dan tidak dapat mendaftar ulang
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full p-4 text-center mt-24 flex flex-col items-center px-5 py-8 mx-auto relative z-10 text-white">
          <h5 className="mb-9 text-3xl font-bold dark:black">
            Kunggulan KuVt :
          </h5>
          <div className="max-w-screen-lg mx-auto grid grid-cols-2 gap-8 justify-center sm:grid-cols-4 rtl:space-x-reverse mb-12">
            <div className="flex flex-col items-center">
              <figure className="px-10 pt-10">
                <img
                  src={transparent}
                  alt="Transparan"
                  className="rounded-xl"
                />
              </figure>
              <div className="card-body  text-center">
                <h2 className="card-title font-bold">Transparan</h2>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <figure className="px-10 pt-10">
                <img src={aman} alt="Transparan" className="rounded-xl" />
              </figure>
              <div className="card-body  text-center">
                <h2 className="card-title font-bold">Aman</h2>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <figure className="px-10 pt-10">
                <img src={decentral} alt="Transparan" className="rounded-xl" />
              </figure>
              <div className="card-body  text-center">
                <h2 className="card-title font-bold">Terdesantralisasi</h2>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <figure className="px-10 pt-10">
                <img src={funtion} alt="Transparan" className="rounded-xl" />
              </figure>
              <div className="card-body  text-center">
                <h2 className="card-title font-bold">Fungsi Luas</h2>
              </div>
            </div>
          </div>
        </div>
        {/* 
        <div className="w-full p-4 text-center mt-24  relative z-10 text-white shadow-sm ">
          <h1 className="mb-20 text-3xl font-bold">
            Partai Poiitik yang Berpartisipasi
          </h1>
          <div className="grid grid-cols-4 gap-4 items-center justify-center sm:grid-cols-5 rtl:space-x-reverse mb-24"> */}
        {/* Sample data for political parties */}
        {/* {[...Array(15)].map((_, index) => (
              <div
                className="flex flex-col items-center bg-transparent p-4"
                key={index}
              >
                <img src={logo} alt="ring" className="w-16 h-16 mb-2" />
                <p className="text-lg font-semibold">Partai {index + 1}</p>
              </div>
            ))} */}
        {/* </div> */}
        {/* </div> */}
      </div>
    </div>
  );
};

export default Hero;
