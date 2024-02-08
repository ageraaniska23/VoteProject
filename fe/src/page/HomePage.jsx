/* eslint-disable react/no-unescaped-entities */
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import image1 from "../assets/image/k.jpg";
import image2 from "../assets/image/wpp1.jpg";
import imaage3 from "../assets/image/indo.jpg";

const images = [image1, image2, imaage3];

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

  // const handlePrevImage = () => {
  //   setCurrentImageIndex(
  //     (prevIndex) => (prevIndex - 1 + images.length) % images.length
  //   );
  // };

  useEffect(() => {
    const slideshowInterval = setInterval(() => {
      handleNextImage();
    }, 2000);

    // Cleanup interval on component unmount
    return () => clearInterval(slideshowInterval);
  }, []);

  return (
    <div className="bg-white">
      <div
      className="px-6 sm:py-20 py-10 font-[sans-serif]"
      style={{
        backgroundImage: `url(${images[currentImageIndex]})`,
        minHeight: "35vh", 
        backgroundSize: "contain", // Tambahkan ini untuk memastikan gambar tidak di-crop
        backgroundPosition: "center", // Tambahkan ini untuk memastikan gambar ditengah
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
        <div className="flex flex-col items-center px-5 py-8 mx-auto">
          <div className="flex flex-col w-full mb-8 prose text-left max-w-max lg:max-w-2xl">
            <div className="w-full mx-auto">
              <h1>A small headline to switch your visitors into users.</h1>

              <p>
                Right. Say that again. No, no, George, look, it's just an act,
                right? Okay, so 9:00 you're strolling through the parking lot,
                you see us struggling in the car, you walk up, you open the door
                and you say, your line, George. Stop it. We're gonna take a
                little break but we'll be back in a while so, don't nobody go no
                where.
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
    </div>
  );
};

export default Hero;
