import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import Button from "./Button";
import LightModeIcon from "@mui/icons-material/LightMode";
import NightlightIcon from "@mui/icons-material/Nightlight";

import { applyTheme } from "../themes/utils";
import baseTheme from "../themes/base";
import darkTheme from "../themes/dark";

//import logo from "../images/rubber-duck.png";
import NavTitleHeader from "../components/NavTitleHeader";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [useDarkTheme, setUseDarkTheme] = useState(false);

  const applyThemeBase = () => {
    setUseDarkTheme(false);
    applyTheme(baseTheme);
  };

  const applyThemeDark = () => {
    setUseDarkTheme(true);
    applyTheme(darkTheme);
  };


  return (
    <div>
      <nav
        className="bg-gray-800 fixed w-full z-10 top-0 
      backdrop-filter backdrop-blur-lg
      bg-opacity-30
      border-b border-gray-200
      firefox:bg-opacity-90"
      >
        <div className="max-w-7xl mx-auto px-2 ">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                {/* <img
                  className="h-8 w-8"
                  src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                  alt="Workflow"
                /> */}

                <div className="pr-2">
                {useDarkTheme && (
                    <div>
                      <Button color="secondary" onClick={applyThemeBase}>
                        <LightModeIcon fontSize="small" />
                      </Button>
                    </div>
                  )}

                  {!useDarkTheme && (
                    <div>
                      <Button color="secondary" onClick={applyThemeDark}>
                        <NightlightIcon fontSize="small" />
                      </Button>
                    </div>
                  )}
                </div>

                {/* <img
                  className="h-8 w-8"
                  src={logo}
                  alt="Workflow"
                /> */}
              </div>
              <NavTitleHeader
                title="MARIANO RODRIGUEZ"
                subtitle={"Senior Software Developer"}
              />
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <a
                    href="#SkillsSection"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                  >
                    Skills
                  </a>
                  <a
                    href="#WorkExperienceSection"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                  >
                    Work Experience
                  </a>

                  <a
                    href="#InterestsSection"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                  >
                    Interests
                  </a>

                  <a
                    className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                    href="https://mrodriguez.ar/blog/"
                  >
                    Blog
                  </a>

                </div>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <a
                  href="#SkillsSection"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Skills
                </a>
                <a
                  href="#WorkExperienceSection"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Work Experience
                </a>

                <a
                  href="#InterestsSection"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Interests
                </a>

                <a
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                  href="https://mrodriguez.ar/blog/"
                >
                  Blog
                </a>


              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
}

export default Nav;
