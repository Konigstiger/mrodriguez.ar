import "../index.css";

import StickyFooter from "./StickyFooter";

import Articles from "./Articles";

import { useEffect } from "react";
import { applyTheme } from "../themes/utils";
import baseTheme from "../themes/base";

import BioCard from "./BioCard";


export default function Home() {
  useEffect(() => {
    applyTheme(baseTheme);
  }, []);

  return (
    <div
      id="mainContainer"
      className="flex items-center justify-center h-screen bg-fixed bg-center custom-img"
    >
      <BioCard />

      <div className="bg-primary-light backgroundPattern">
        <Articles />
      </div>


      <StickyFooter />
    </div>
  );
}
