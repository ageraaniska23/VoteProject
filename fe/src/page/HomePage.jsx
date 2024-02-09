/* eslint-disable react/no-unescaped-entities */
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import image1 from "../assets/image/k.jpg";
import image2 from "../assets/image/wpp1.jpg";
import imaage3 from "../assets/image/indo.jpg";
import image4 from "../assets/image/indo1.jpg";
import image5 from "../assets/image/indo2.jpg";
const images = [image2, imaage3, image4, image5];

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
    }, 2000);

    // Cleanup interval on component unmount
    return () => clearInterval(slideshowInterval);
  }, []);

  return (
    <div className="bg-gray-800">
      <div
        className="px-6 sm:py-20 py-10 font-[sans-serif]"
        style={{
          backgroundImage: `url(${images[currentImageIndex]})`,
          minHeight: "35vh",
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
              Mulai
            </button>
            <button
              onClick={handleLoginButtonClick}
              className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center bg-blue-500 hover:bg-cyan-400 rounded-md text-white"
            >
              Voting
            </button>
          </div>
        </div>
      </div>

      <section>
        <div className="flex flex-col items-center px-5 py-8 mx-auto mt-24">
          <div className="flex flex-col w-full mb-8 prose text-left max-w-max lg:max-w-2xl">
            <div className="w-full mx-auto">
              <h1>Apa itu KuVt Project?.</h1>

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
        <div className="items-center w-full px-5">
          <div className="flex flex-wrap justify-center w-full mx-auto prose max-w-max lg:max-w-3xl">
            <div className="relative justify-center lg:px-4">
              <div className="lg:grid lg:grid-cols-2">
                <div className="p-8">
                  <h1 className="">Short length headline.</h1>
                  <p>
                    You're about to launch soon and must be 100% focused on your
                    product. Don't loose precious days designing, coding the
                    landing page and testing .
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center mt-4 font-semibold text-blue-600 lg:mb-0 hover:text-neutral-600"
                    title="read more"
                  >
                    {" "}
                    Read More »{" "}
                  </a>
                </div>
                <div className="p-8">
                  <h1 className="">Short length headline.</h1>
                  <p>
                    You're about to launch soon and must be 100% focused on your
                    product. Don't loose precious days designing, coding the
                    landing page and testing .
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center mt-4 font-semibold text-blue-600 lg:mb-0 hover:text-neutral-600"
                    title="read more"
                  >
                    {" "}
                    Read More »{" "}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="w-full p-4 text-center mt-24">
        <h5 className="mb-9 text-3xl font-bold  dark:black">
          Diikuti oleh Banyak Partai Politik
        </h5>
        {/* <p className="mb-9 text-base text-gray-500 sm:text-lg dark:text-gray-400">
          Cek semua partai.
        </p> */}
        <div className="grid grid-cols-4 gap-4 items-center justify-center sm:grid-cols-5 rtl:space-x-reverse mb-12">
          <div className="flex flex-col items-center">
            <img
              src="https://www.svgrepo.com/show/433732/ring-so.svg"
              alt="ring"
              className="w-16 h-16 mb-2"
            />
            <p className="text-lg font-semibold text-gray-900 dark:text-gray-300">
              Partai 1
            </p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="https://www.svgrepo.com/show/433732/ring-so.svg"
              alt="ring"
              className="w-16 h-16 mb-2"
            />
            <p className="text-lg font-semibold text-gray-900 dark:text-gray-300">
              Partai 2
            </p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="https://www.svgrepo.com/show/433732/ring-so.svg"
              alt="ring"
              className="w-16 h-16 mb-2"
            />
            <p className="text-lg font-semibold text-gray-900 dark:text-gray-300">
              Partai 3
            </p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="https://www.svgrepo.com/show/433732/ring-so.svg"
              alt="ring"
              className="w-16 h-16 mb-2"
            />
            <p className="text-lg font-semibold text-gray-900 dark:text-gray-300">
              Partai 4
            </p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="https://www.svgrepo.com/show/433732/ring-so.svg"
              alt="ring"
              className="w-16 h-16 mb-2"
            />
            <p className="text-lg font-semibold text-gray-900 dark:text-gray-300">
              Partai 5
            </p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="https://www.svgrepo.com/show/433732/ring-so.svg"
              alt="ring"
              className="w-16 h-16 mb-2"
            />
            <p className="text-lg font-semibold text-gray-900 dark:text-gray-300">
              Partai 6
            </p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="https://www.svgrepo.com/show/433732/ring-so.svg"
              alt="ring"
              className="w-16 h-16 mb-2"
            />
            <p className="text-lg font-semibold text-gray-900 dark:text-gray-300">
              Partai 7
            </p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="https://www.svgrepo.com/show/433732/ring-so.svg"
              alt="ring"
              className="w-16 h-16 mb-2"
            />
            <p className="text-lg font-semibold text-gray-900 dark:text-gray-300">
              Partai 8
            </p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="https://www.svgrepo.com/show/433732/ring-so.svg"
              alt="ring"
              className="w-16 h-16 mb-2"
            />
            <p className="text-lg font-semibold text-gray-900 dark:text-gray-300">
              Partai 9
            </p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="https://www.svgrepo.com/show/433732/ring-so.svg"
              alt="ring"
              className="w-16 h-16 mb-2"
            />
            <p className="text-lg font-semibold text-gray-900 dark:text-gray-300">
              Partai 10
            </p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="https://www.svgrepo.com/show/433732/ring-so.svg"
              alt="ring"
              className="w-16 h-16 mb-2"
            />
            <p className="text-lg font-semibold text-gray-900 dark:text-gray-300">
              Partai 11
            </p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="https://www.svgrepo.com/show/433732/ring-so.svg"
              alt="ring"
              className="w-16 h-16 mb-2"
            />
            <p className="text-lg font-semibold text-gray-900 dark:text-gray-300">
              Partai 12
            </p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="https://www.svgrepo.com/show/433732/ring-so.svg"
              alt="ring"
              className="w-16 h-16 mb-2"
            />
            <p className="text-lg font-semibold text-gray-900 dark:text-gray-300">
              Partai 13
            </p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="https://www.svgrepo.com/show/433732/ring-so.svg"
              alt="ring"
              className="w-16 h-16 mb-2"
            />
            <p className="text-lg font-semibold text-gray-900 dark:text-gray-300">
              Partai 14
            </p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="https://www.svgrepo.com/show/433732/ring-so.svg"
              alt="ring"
              className="w-16 h-16 mb-2"
            />
            <p className="text-lg font-semibold text-gray-900 dark:text-gray-300">
              Partai 15
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
