import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-900">
  <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
    <div className="sm:flex sm:items-center sm:justify-between">
      <div className="md:flex md:items-center md:gap-2 ">
        <img src="https://www.svgrepo.com/show/92013/vote.svg" alt="Logo" className="h-8" />
        <span className="text-white font-semibold">KuVt</span>
      </div>

      <p className="mt-8 text-xs text-gray-500 sm:mt-0">
          &copy; 2023. Agera Aniska
        </p>

      <ul className="mt-8 flex justify-center gap-6 sm:mt-0 lg:justify-end">
      <li>
          <a
            href="https://web.facebook.com/Agera.aniska238"
            rel="noreferrer"
            target="_blank"
            className="text-gray-700 transition hover:opacity-75"
          >
            <span className="sr-only">Facebook</span>
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
            <span className="sr-only">Instagram</span>
            <img
              src="https://www.svgrepo.com/show/303154/instagram-2016-logo.svg"
              alt="Instagram Logo"
              className="h-6 w-6"
            />
          </a>
        </li>

        {/* <li>
          <a
            href="/"
            rel="noreferrer"
            target="_blank"
            className="text-gray-700 transition hover:opacity-75"
          >
            <span className="sr-only">Twitter</span>
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
            <span className="sr-only">GitHub</span>
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
            <span className="sr-only">Linkedin</span>
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
  )
}

export default Footer