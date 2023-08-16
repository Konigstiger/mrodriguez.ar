import { useEffect } from "react";
import { applyTheme } from "../themes/utils";
import baseTheme from "../themes/base";
import darkTheme from "../themes/dark";

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
