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

import Nav from "./Nav";


export default function Header() {
  useEffect(() => {
    applyTheme(baseTheme);
  }, []);

  return (
    <header>
      <Nav />
    </header>
  );
}
