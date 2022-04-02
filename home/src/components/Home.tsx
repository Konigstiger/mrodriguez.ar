import "../index.css";

import StickyFooter from "./StickyFooter";

import Articles from "./Articles";

import { useEffect } from "react";
import { applyTheme } from "../themes/utils";
import baseTheme from "../themes/base";
import darkTheme from "../themes/dark";

import BioCard from "./BioCard";
import SkewedCard from "./SkewedCard";

export default function Home() {
  useEffect(() => {
    applyTheme(baseTheme);
  }, []);

  return (
    <div>
      <BioCard />

      <div className="bg-primary-light py-10">
        <Articles />
      </div>

      <StickyFooter />

    </div>
  );
}
