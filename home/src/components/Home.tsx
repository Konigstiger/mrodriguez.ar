import "../index.css";

import StickyFooter from "./StickyFooter";

import Articles from "./Articles";

import { useEffect } from "react";
import { applyTheme } from "../themes/utils";
import baseTheme from "../themes/base";

import BioCard from "./BioCard";

import ProgressCard from "./ProgressCard";

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
          <ProgressCard n={3} title="Communications" />
          <ProgressCard n={4} title="Teamwork" />
          <ProgressCard n={3} title="Adaptability" />
          <ProgressCard n={4} title="Problem solving" />
          <ProgressCard n={4} title="Creativity" />
        </div>
        
        <div className="mx-6 border p-2 max-w-xs">
          <ProgressCard n={4} title=".NET" />
          <ProgressCard n={4} title="HTML" />
          <ProgressCard n={3} title="CSS" />
          <ProgressCard n={4} title="C#" />
          <ProgressCard n={3} title="JS" />

          <ProgressCard n={3} title="React" />
          <ProgressCard n={2} title="Python" />
          <ProgressCard n={4} title="SQL" />

          <ProgressCard n={2} title="Non Relational Databases" />
          <ProgressCard n={2} title="J2EE" />
          <ProgressCard n={3} title="Azure" />
          <ProgressCard n={1} title="AWS" />
          <ProgressCard n={5} title="WinForms" />
          <ProgressCard n={5} title="Visual Basic 6" />
          <ProgressCard n={3} title="Graphic Design" />
          <ProgressCard n={2} title="3D Modeling" />
          <ProgressCard n={3} title="UI/UX Prototyping" />
        </div>

      </div>

      <StickyFooter />
    </div>
  );
}
