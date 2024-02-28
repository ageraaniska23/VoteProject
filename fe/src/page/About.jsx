import React from "react";
import ProfileImage from "../assets/image/pro.jpg";

const AboutUs = () => {
  return (
    <div className="min-h-screen flex items-center justify-center text-center text-gray-500 dark:text-gray-400 bg-gray-900 dark:bg-gray-950">
      <div>
        <h2 className="mb-4 mt-24 text-3xl sm:text-5xl tracking-tight font-extrabold text-gray-900 dark:text-white">
          About Me
        </h2>
        <img
          className="mx-auto mb-4 w-48 h-48 object-cover rounded-full"
          src={ProfileImage}
          alt="profile"
          style={{ marginTop: "10px", objectPosition: "center top" }}
        />

        <h3 className="mb-1 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
          <a>Agera Aniska</a>
        </h3>
        <p className="text-lg">Web Dev & Solidity Developer</p>
        <p className="text-lg">Mahasiswa Sistem Komputer Universitas Sriwijaya</p>
        <ul className="flex justify-center mt-4 space-x-4">
          <li>
            <a
              href="#"
              className="text-[#39569c] hover:text-gray-900 dark:hover:text-white"
            >
              <img
                className="w-8 h-8"
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
                className="w-8 h-8"
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
                className="w-8 h-8"
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
                className="w-8 h-8"
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
                className="w-8 h-8"
                src="https://www.svgrepo.com/show/452051/linkedin.svg"
                alt="Linkedin"
              />
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-[#ea4c89] hover:text-gray-900 dark:hover:text-white"
            >
              <img
                className="w-8 h-8"
                src="https://www.svgrepo.com/show/354560/whatsapp.svg"
                alt="WhatsApp"
              />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AboutUs;
