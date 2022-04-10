import "../index.css";

import StickyFooter from "./StickyFooter";

import Articles from "./Articles";

import { useEffect } from "react";
import { applyTheme } from "../themes/utils";
import baseTheme from "../themes/base";

import BioCard from "./BioCard";

import MisteryProgress from "./MisteryProgress";

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

      <div className="bg-white pb-1">
        <div className="mx-6 border p-2 max-w-xs">
          <MisteryProgress percentage={20} title="html" />
          <MisteryProgress percentage={40} title="css" />
          <MisteryProgress percentage={60} title="js" />
          <MisteryProgress percentage={80} title="sql" />
          <MisteryProgress percentage={100} title=".net" />
        </div>
      </div>

      <StickyFooter />
    </div>
  );
}
