import React from 'react';

const AboutUs = () => {
  return (
    <div className='min-h-screen'>
      <section className="bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-40">
          <div className="">
            <h2 className="mb-4 mt-14 text-2xl sm:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white text-center">About Us</h2>
            <p className="font-light text-gray-500 lg:mb-8 sm:text-lg dark:text-gray-400 text-center">
              Platform ini didesain untuk meningkatkan tingkat keamanan, kejujuran, dan transparansi dalam proses pemilihan suara atau voting. 
              Pendekatan ini diterapkan melalui penggunaan kontrak pintar (smart contract) Solidity yang berjalan di Ethereum Virtual Machine (EVM). 
              Jaringan yang diadopsi dalam proyek ini adalah Binance Smart Chain (BSC) testnet. Dengan memanfaatkan teknologi blockchain, 
              kami berkomitmen untuk menyediakan lingkungan yang aman dan terdesentralisasi untuk memastikan integritas dan keabsahan setiap suara dalam pemilihan.   
            </p>
          </div>
          <div className="justify-center">
            <div className="items-center bg-gray-50 rounded-xl shadow sm:flex dark:bg-gray-800 dark:border-gray-700 ">
              <a>
                <img className="w-full h-auto rounded-xl sm:rounded-xl" src="https://media.licdn.com/dms/image/C5603AQFBpUyU0jPUyA/profile-displayphoto-shrink_400_400/0/1651417649116?e=1707955200&v=beta&t=dpE3v1Uh6x4PZg-0hDcSTO-qGGF1MRfIILxUAHWsXt0" alt="Bonnie Avatar" />
              </a>
              <div className="p-6 sm:p-10">
                <h3 className="text-xl sm:text-6xl font-bold tracking-tight text-gray-900 dark:text-white mb-2 sm:mb-7">
                  <a>Agera Aniska</a>
                </h3>
                <span className="text-gray-500 dark:text-gray-400">CEO, Web Dev & Solidity Dev</span>
                <p className="mt-2 mb-7 font-light text-gray-500 dark:text-gray-400">Mahasiswa Jurusan Sistem Komputer Universitas Sriwijaya</p>
                <ul className="flex space-x-4 sm:mt-4">
                  <li>
                    <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                      <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <image href="https://www.svgrepo.com/show/465458/link-alt-2.svg" width="20" height="20" />
                      </svg>
                    </a>
                  </li>

                  <li>
                    <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                      <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <image href="https://www.svgrepo.com/show/448224/facebook.svg" width="20" height="20" />
                      </svg>
                    </a>
                  </li>

                  <li>
                    <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                      <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <image href="https://www.svgrepo.com/show/312259/github.svg" width="20" height="20" />
                      </svg>
                    </a>
                  </li>
                    
                  <li>
                    <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                      <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <image href="https://www.svgrepo.com/show/452231/instagram.svg" width="20" height="20" />
                      </svg>
                    </a>
                  </li>

                  <li>
                    <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                      <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <image href="https://www.svgrepo.com/show/452051/linkedin.svg" width="20" height="20" />
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
