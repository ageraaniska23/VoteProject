import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);

    const fullname = form.current["from_name"].value;
    const email = form.current["user_email"].value;
    const message = form.current["message"].value;

    // Validasi form
    if (!fullname || !email || !message) {
      setIsLoading(false);
      setMessage({ type: "error", text: "Please fill in all fields." });
      return;
    }

    emailjs
      .sendForm(
        "service_tflclda",
        "template_ejlgxfm",
        form.current,
        "FTOktC2Oa8uzAwbTs"
      )
      .then(
        (result) => {
          console.log(result.text);
          setMessage({ type: "success", text: "Message sent successfully." });
        },
        (error) => {
          console.log(error.text);
          setMessage({ type: "error", text: "Error sending message." });
        }
      )
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div className="min-h-screen px-4 sm:py-4 md:py-8 sm:px-6 lg:px-8 lg:py-14 flex flex-col mx-auto bg-gray-950">
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
              Tulis Pesan
            </h2>

            {message && (
              <div
                role="alert"
                className={`alert ${
                  message.type === "success" ? "alert-success" : "alert-error"
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="stroke-current shrink-0 h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  {message.type === "success" ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  )}
                </svg>
                <span>{message.text}</span>
              </div>
            )}

            <form ref={form} onSubmit={sendEmail} className="mt-8">
              <div className="grid gap-6">
                <div>
                  <label htmlFor="fullname" className="sr-only">
                    Fullname
                  </label>
                  <input
                    type="text"
                    name="from_name"
                    id="username"
                    autoComplete="name"
                    className="py-3 px-6 lg:px-64 xl:px-64 w-full border-gray-300 rounded-lg text-lg focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                    placeholder="Name"
                    style={{ paddingLeft: "10px" }}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="sr-only">
                    Email
                  </label>
                  <input
                    type="email"
                    name="user_email"
                    id="email"
                    autoComplete="email"
                    className="py-3 px-6 lg:px-64 xl:px-64 w-full border-gray-300 rounded-lg text-lg focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                    placeholder="Email"
                    style={{ paddingLeft: "10px" }}
                  />
                </div>
                <div>
                  <label htmlFor="message" className="sr-only">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    className="py-4 px-6 lg:px-64 xl:px-64 w-full border-gray-300 rounded-lg text-lg focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                    placeholder="Message"
                    style={{ paddingLeft: "10px" }}
                  ></textarea>
                </div>
              </div>

              <div className="mt-8 lg:mt-12 xl:mt-16">
                <button
                  type="submit"
                  value="Send"
                  className="w-full py-4 px-6 lg:px-8 xl:px-10 inline-flex justify-center items-center  text-lg font-semibold rounded-full  bg-blue-600 text-white hover:text-black hover:font-bold hover:font-serif hover:bg-green-400"
                  disabled={isLoading}
                >
                  {isLoading ? "Sending....." : "Send"}
                </button>
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
                  Informasi
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  Web voting ini disesiakan untuk meemberikan pengalaman
                  berdemokrasi dalam memilih pemimpin secara transparan
                </p>
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
                  Palembang, Sumatera Selatan
                </p>
              </div>
            </div>

            <div className="flex gap-x-7 py-6">
              <img
                className="flex-shrink-0 w-6 h-6 mt-1.5 text-gray-800 dark:text-gray-200"
                src="https://www.svgrepo.com/show/477054/email-download.svg"
                alt="Email Open"
              />
              <div className="grow">
                <h3 className="font-semibold text-gray-800 dark:text-gray-200">
                  Contact
                </h3>
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
