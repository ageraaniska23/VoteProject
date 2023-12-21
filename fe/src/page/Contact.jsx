import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen px-4 sm:py-4 md:py-8 sm:px-6 lg:px-8 lg:py-14 mx-auto bg-gray-950">
      <div className="max-w-2xl lg:max-w-5xl mx-auto">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800 sm:text-4xl dark:text-white mt-14">
            Contact us
          </h1>
          <p className="mt-1 text-gray-600 dark:text-gray-400">
            Kami akan menerima dan meninjau pesanmu
          </p>
        </div>

        <div className="mt-12 grid items-center lg:grid-cols-2 gap-6 lg:gap-16">
          <div className="flex flex-col border rounded-xl p-4 sm:p-6 lg:p-8 dark:border-white w-full">
            <h2 className="mb-8 text-xl font-semibold text-gray-800 dark:text-gray-200 text-center">
              Isi Formulir
            </h2>

            <form>
              <div className="grid gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="hs-firstname-contacts-1"
                      className="sr-only"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      name="hs-firstname-contacts-1"
                      id="hs-firstname-contacts-1"
                      className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                      placeholder="First Name"
                    />
                  </div>

                  <div>
                    <label htmlFor="hs-lastname-contacts-1" className="sr-only">
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="hs-lastname-contacts-1"
                      id="hs-lastname-contacts-1"
                      className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                      placeholder="Last Name"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="hs-email-contacts-1" className="sr-only">
                    Email
                  </label>
                  <input
                    type="email"
                    name="hs-email-contacts-1"
                    id="hs-email-contacts-1"
                    autoComplete="email"
                    className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                    placeholder="Email"
                  />
                </div>

                <div>
                  <label htmlFor="hs-phone-number-1" className="sr-only">
                    Nomor HP
                  </label>
                  <input
                    type="text"
                    name="hs-phone-number-1"
                    id="hs-phone-number-1"
                    className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                    placeholder="No Hp"
                  />
                </div>

                <div>
                  <label htmlFor="hs-about-contacts-1" className="sr-only">
                    Pesan
                  </label>
                  <textarea
                    id="hs-about-contacts-1"
                    name="hs-about-contacts-1"
                    rows="4"
                    className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                    placeholder="Pesan"
                  ></textarea>
                </div>
              </div>

              <div className="mt-4 grid">
                <button
                  type="submit"
                  className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                >
                  Kirim
                </button>
              </div>

              <div className="mt-3 text-center">
                <p className="text-sm text-gray-500">
                  Kami akan Meninjau Pesan 1-2 hari kerja
                </p>
              </div>
            </form>
          </div>

          <div className="divide-y divide-gray-200 dark:divide-gray-800 w-full">

            <div className="flex gap-x-7 py-6">
              <img
                className="flex-shrink-0 w-6 h-6 mt-1.5 text-gray-800 dark:text-gray-200"
                src="https://www.svgrepo.com/show/331718/enterprise.svg"
                alt="Email Open"
              />
              <div className="grow">
                <h3 className="font-semibold text-gray-800 dark:text-gray-200">
                  Informasi Perusahaan
                </h3>
                <p className="mt-1 text-sm text-gray-500">Kami adalah</p>
              </div>
            </div>

            <div className="flex gap-x-7 py-6">
              <img
                className="flex-shrink-0 w-6 h-6 mt-1.5 text-gray-800 dark:text-gray-200"
                src="https://www.svgrepo.com/show/530236/location.svg"
                alt="Email Open"
              />
              <div className="grow">
                <h3 className="font-semibold text-gray-800 dark:text-gray-200">
                  Alamat
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  Masih keluyuran 
                </p>
              </div>
            </div>


            <div className="flex gap-x-7 py-6">
              <img
                className="flex-shrink-0 w-6 h-6 mt-1.5 text-gray-800 dark:text-gray-200"
                src="https://www.svgrepo.com/show/477054/email-download.svg"
                alt="Email Open"
              />

              {/* <div className="grow">
                <h3 className="font-semibold text-gray-800 dark:text-gray-200">
                  Hubungi dengan Email
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  Jika Anda ingin mengirim email kepada kami, silakan Hubungi
                </p>
                <a
                  className="mt-2 inline-flex items-center gap-x-2 text-sm font-medium text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                  href="#"
                >
                  agraaniska@gmail.com
                </a>
              </div> */}
              <div className="grow">
                <h3 className="font-semibold text-gray-800 dark:text-gray-200">
                  Hubungi dengan Email
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  Jika Anda ingin mengirim email kepada kami, silakan Hubungi
                </p>
                <a
                  className="mt-2 inline-flex items-center gap-x-2 text-sm font-medium text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                  href="mailto:agraaniska@gmail.com?subject=Subject%20of%20the%20email&body=Hello%20Agra%20Aniska,%0A%0A"
                >
                  agraaniska@gmail.com
                </a>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
