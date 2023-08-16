import "../index.css";

import StickyFooter from "./StickyFooter";

import Articles from "./Articles";

import { useEffect } from "react";
import { applyTheme } from "../themes/utils";
import baseTheme from "../themes/base";

import BioCard from "./BioCard";
import SkillCard from "./SkillCard";


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

      <div className="bg-primary-light backgroundPattern ">
        <div
          className="
              flex flex-col pt-4 xl:px-48
              sm:grid sm:gap-4 sm:grid-cols-2 sm:row-span-2"
        >
          <SkillCard />
          <Articles />
        </div>
      </div>

      <StickyFooter />
    </div>
  );
}
