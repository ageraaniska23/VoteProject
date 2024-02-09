import React from "react";
import ProfileImage from "../assets/image/pro.jpg";

const AboutUs = () => {
  return (
    <div className="min-h-screen px-4 sm:py-4 md:py-8 sm:px-6 lg:px-8 lg:py-14 flex flex-col mx-auto bg-gray-950">
      <section>
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-40">
          <div>
            <h2 className="mb-4 mt-3 text-2xl sm:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white text-center">
              About Us
            </h2>
            <p className="animate-fade-up font-light text-gray-500 lg:mb-8 sm:text-lg dark:text-gray-400 text-center mb-14">
              Platform ini didesain untuk meningkatkan tingkat keamanan,
              kejujuran, dan transparansi dalam proses pemilihan suara atau
              voting. Pendekatan ini diterapkan melalui penggunaan kontrak
              pintar (smart contract) Solidity yang berjalan di Ethereum Virtual
              Machine (EVM). Jaringan yang diadopsi dalam proyek ini adalah
              Binance Smart Chain (BSC) testnet. Dengan memanfaatkan teknologi
              blockchain, kami berkomitmen untuk menyediakan lingkungan yang
              aman dan terdesentralisasi untuk memastikan integritas dan
              keabsahan setiap suara dalam pemilihan.
            </p>
          </div>
          <div className="text-center text-gray-500 dark:text-gray-400">
          <h2 className="mb-4 mt-24 text-2xl sm:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white text-center">
              About Me
            </h2>
            <img
              className="mx-auto mb-4 w-36 h-36 object-cover rounded-full"
              src={ProfileImage}
              alt="profile"
              style={{ marginTop: "10px", objectPosition: "center top" }}
            />

            <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              <a>Agera Aniska</a>
            </h3>
            <p>CEO, Web Dev & Solidity Developer</p>
            <p>Mahasiswa Sistem Komputer Universitas Sriwijaya</p>
            <ul className="flex justify-center mt-4 space-x-4">
              <li>
                <a
                  href="#"
                  className="text-[#39569c] hover:text-gray-900 dark:hover:text-white"
                >
                  <img
                    className="w-6 h-6"
                    src="https://www.svgrepo.com/show/465458/link-alt-2.svg"
                    alt="Link"
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://web.facebook.com/Agera.aniska238"
                  className="text-[#00acee] hover:text-gray-900 dark:hover:text-white"
                >
                  <img
                    className="w-6 h-6"
                    src="https://www.svgrepo.com/show/448224/facebook.svg"
                    alt="Facebook"
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/ageraaniska23"
                  className="text-gray-900 hover:text-gray-900 dark:hover:text-white dark:text-gray-300"
                >
                  <img
                    className="w-6 h-6"
                    src="https://www.svgrepo.com/show/312259/github.svg"
                    alt="Github"
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/ara.anka/"
                  className="text-[#ea4c89] hover:text-gray-900 dark:hover:text-white"
                >
                  <img
                    className="w-6 h-6"
                    src="https://www.svgrepo.com/show/452231/instagram.svg"
                    alt="Instagram"
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/agera-aniska-0298a8225/"
                  className="text-[#ea4c89] hover:text-gray-900 dark:hover:text-white"
                >
                  <img
                    className="w-6 h-6"
                    src="https://www.svgrepo.com/show/452051/linkedin.svg"
                    alt="Linkedin"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
