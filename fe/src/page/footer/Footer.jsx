import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center md:flex-row md:items-center md:justify-between">

          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <img src="https://www.svgrepo.com/show/92013/vote.svg" alt="Logo" className="h-8" />
            <span className="text-white font-semibold">KuVt</span>
          </div>

          <p className="text-xs text-gray-500 mb-4">
            &copy; 2023. Agera Aniska
          </p>

          <ul className="flex justify-center gap-6">
            <li>
              <a
                href="https://web.facebook.com/Agera.aniska238"
                rel="noreferrer"
                target="_blank"
                className="text-gray-700 transition hover:opacity-75"
              >
                <img
                  src="https://www.svgrepo.com/show/303114/facebook-3-logo.svg"
                  alt="Facebook Logo"
                  className="h-6 w-6"
                />
              </a>
            </li>

            <li>
              <a
                href="https://www.instagram.com/ara.anka/"
                rel="noreferrer"
                target="_blank"
                className="text-gray-700 transition hover:opacity-75"
              >
                <img
                  src="https://www.svgrepo.com/show/303154/instagram-2016-logo.svg"
                  alt="Instagram Logo"
                  className="h-6 w-6"
                />
              </a>
            </li>

            {/* Add Twitter link if needed */}
            {/* <li>
              <a
                href="/"
                rel="noreferrer"
                target="_blank"
                className="text-gray-700 transition hover:opacity-75"
              >
                <img
                  src="https://www.svgrepo.com/show/303115/twitter-3-logo.svg"
                  alt="Twitter Logo"
                  className="h-6 w-6"
                />
              </a>
            </li> */}

            <li>
              <a
                href="https://github.com/ageraaniska23"
                rel="noreferrer"
                target="_blank"
                className="text-gray-700 transition hover:opacity-75"
              >
                <img
                  src="https://www.svgrepo.com/show/416517/code-github-hosting.svg"
                  alt="GitHub Logo"
                  className="h-6 w-6"
                />
              </a>
            </li>

            <li>
              <a
                href="https://www.linkedin.com/in/agera-aniska-0298a8225/"
                rel="noreferrer"
                target="_blank"
                className="text-gray-700 transition hover:opacity-75"
              >
                <img
                  src="https://www.svgrepo.com/show/303207/linkedin-icon-logo.svg"
                  alt="Linkedin Logo"
                  className="h-6 w-6"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
