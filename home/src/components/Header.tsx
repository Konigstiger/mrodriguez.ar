import { useEffect } from "react";
import { applyTheme } from "../themes/utils";
import baseTheme from "../themes/base";
import darkTheme from "../themes/dark";

// custom styled Button, careful
import Button from "./Button";
import LightModeIcon from "@mui/icons-material/LightMode";
import NightlightIcon from "@mui/icons-material/Nightlight";
import Avatar from "@mui/material/Avatar";

import portrait from "../images/mrodriguez-portrait-small.jpg";

export default function Header() {
  useEffect(() => {
    applyTheme(baseTheme);
  }, []);

  return (
    <header>
      <div className="flex flex-wrap fixed w-full z-10 top-0 bg-primary-dark border border-primary">
        <div className="w-full px-4">
          <nav className="relative flex flex-wrap items-center justify-between py-0 bg-violet-500 rounded">
            <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
              <div className="w-full relative flex lg:w-auto px-4 lg:static lg:block lg:justify-start">
                <a
                  className="text-sm font-bold leading-relaxed mr-4 py-2 whitespace-nowrap uppercase text-white"
                  href="https://mrodriguez.ar/"
                >
                  <span>Mariano Rodriguez</span>
                </a>
              </div>
              <div
                className="flex flex-grow items-center"
                id="example-navbar-info"
              >
                <ul className="flex flex-col lg:flex-row list-none ml-auto">
                  <li className="nav-item">
                    <a
                      className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                      href="https://blog.mrodriguez.ar/"
                    >
                      Blog
                    </a>
                  </li>
                  <li className="nav-item">
                    <Button
                      color="secondary"
                      onClick={() => applyTheme(baseTheme)}
                    >
                      <LightModeIcon fontSize="small" />
                    </Button>
                  </li>
                  <li className="nav-item">
                    <Button
                      color="secondary"
                      onClick={() => applyTheme(darkTheme)}
                    >
                      <NightlightIcon fontSize="small" />
                    </Button>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>

      {/* <nav className="bg-gray-800 p-1 mt-0 fixed w-full z-10 top-0">
        <div className="container mx-auto flex flex-wrap items-center">
          <div className="flex w-full content-center justify-between md:w-1/2 md:justify-end">
            <div className="flex gap-2 justify-between">
              <Button color="secondary" onClick={() => applyTheme(baseTheme)}>
                <LightModeIcon fontSize="small" />
              </Button>
              <Button color="secondary" onClick={() => applyTheme(darkTheme)}>
                <NightlightIcon fontSize="small" />
              </Button>
            </div>
            <ul className="list-reset flex justify-between flex-1 md:flex-none items-center">
              <li className="mx-2">
                <a
                  className="inline-block py-2 px-4 text-white no-underline p-12"
                  href="https://blog.mrodriguez.ar/"
                >
                  Blog
                </a>
              </li>
              <li className="mx-2">
                <a
                  className="inline-block text-white no-underline hover:text-gray-200 hover:text-underline py-2 px-4"
                  href="https://blog.mrodriguez.ar/contact"
                >
                  Contact
                </a>
              </li>
              <li className="mx-2">
                <a
                  className="inline-block text-white no-underline hover:text-gray-200 hover:text-underline py-2 px-4"
                  href="https://blog.mrodriguez.ar/resume"
                >
                  Resume
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav> */}
    </header>
  );
}
