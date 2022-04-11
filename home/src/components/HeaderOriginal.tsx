import { useEffect } from "react";
import { applyTheme } from "../themes/utils";
import baseTheme from "../themes/base";
import darkTheme from "../themes/dark";

// custom styled Button, careful
import Button from "./Button";
import LightModeIcon from "@mui/icons-material/LightMode";
import NightlightIcon from "@mui/icons-material/Nightlight";

export default function HeaderOriginal() {
  useEffect(() => {
    applyTheme(baseTheme);
  }, []);

  return (
    <header>
      <nav className="bg-gray-800 p-1 mt-0 fixed w-full z-10 top-0">
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
      </nav>
    </header>
  );
}
