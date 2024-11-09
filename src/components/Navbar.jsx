import { useState } from "react";
import { FaBars, FaTimes, FaLinkedin, FaGithub, FaViber } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import AnchorLink from "react-anchor-link-smooth-scroll";

export default function Navbar() {
  const [activeLink, setActiveLink] = useState("active");
  const [menuOpen, setMenuOpen] = useState(false); 

  return (
    <nav>
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={menuOpen ? "true" : "false"}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`${menuOpen ? "hidden" : "block"} h-6 w-6`}
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
              <svg
                className={`${menuOpen ? "block" : "hidden"} h-6 w-6`}
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            {/* <div className="flex shrink-0 items-center">
              <p className="text-white text-3xl">MMP</p>
            </div> */}

            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                <AnchorLink
                  href="#hero"
                  className={`rounded-md px-3 py-2 text-base font-medium ${
                    activeLink === "active" ? "bg-gray-900 text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white"
                  }`}
                  onClick={() => setActiveLink("active")}
                >
                  Home
                </AnchorLink>
                <AnchorLink
                  href="#about"
                  className={`rounded-md px-3 py-2 text-base font-medium ${
                    activeLink === "about" ? "bg-gray-900 text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white"
                  }`}
                  onClick={() => setActiveLink("about")}
                >
                  About
                </AnchorLink>
                <AnchorLink
                  href="#technologies"
                  className={`rounded-md px-3 py-2 text-base font-medium ${
                    activeLink === "technologies" ? "bg-gray-900 text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white"
                  }`}
                  onClick={() => setActiveLink("technologies")}
                >
                  Technologies
                </AnchorLink>
                <AnchorLink
                  href="#experiences"
                  className={`rounded-md px-3 py-2 text-base font-medium ${
                    activeLink === "experiences" ? "bg-gray-900 text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white"
                  }`}
                  onClick={() => setActiveLink("experiences")}
                >
                  Experiences
                </AnchorLink>
                <AnchorLink
                  href="#projects"
                  className={`rounded-md px-3 py-2 text-base font-medium ${
                    activeLink === "projects" ? "bg-gray-900 text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white"
                  }`}
                  onClick={() => setActiveLink("projects")}
                >
                  Projects
                </AnchorLink>
                <AnchorLink
                  href="#contact"
                  className={`rounded-md px-3 py-2 text-base font-medium ${
                    activeLink === "contact" ? "bg-gray-900 text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white"
                  }`}
                  onClick={() => setActiveLink("contact")}
                >
                  Contact
                </AnchorLink>
              </div>
            </div>
          </div>

          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <a href="https://www.linkedin.com/in/may-myo-pwint-84b654303" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
              <FaLinkedin className="h-6 w-6" />
            </a>
            <a href="https://github.com/khucho" target="_blank" rel="noopener noreferrer" className="ml-4 text-gray-300 hover:text-white">
              <FaGithub className="h-6 w-6" />
            </a>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=maymyopwint825@gmail.com" target="_blank" rel="noopener noreferrer" className="ml-4 text-gray-300 hover:text-white">
              <SiGmail className="h-6 w-6" />
            </a>
            <a href="viber://chat?number=09251900929" target="_blank" rel="noopener noreferrer" className="ml-4 text-gray-300 hover:text-white">
              <FaViber className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>

      {menuOpen && (
        <div className="sm:hidden" id="mobile-menu">
          <div className="space-y-1 px-2 pb-3 pt-2">
            <AnchorLink
              href="#hero"
              className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white"
              onClick={() => setActiveLink("active")}
            >
              Home
            </AnchorLink>
            <AnchorLink
              href="#about"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
              onClick={() => setActiveLink("about")}
            >
              About
            </AnchorLink>
            <AnchorLink
              href="#technologies"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
              onClick={() => setActiveLink("technologies")}
            >
              Technologies
            </AnchorLink>
            <AnchorLink
              href="#experiences"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
              onClick={() => setActiveLink("experiences")}
            >
              Experiences
            </AnchorLink>
            <AnchorLink
              href="#projects"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
              onClick={() => setActiveLink("projects")}
            >
              Projects
            </AnchorLink>
            <AnchorLink
              href="#contact"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
              onClick={() => setActiveLink("contact")}
            >
              Contact
            </AnchorLink>
          </div>
        </div>
      )}
    </nav>
  );
}
