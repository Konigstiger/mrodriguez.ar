import "../index.css";

import StickyFooter from "./StickyFooter";

import Articles from "./Articles";

import { useEffect } from "react";
import { applyTheme } from "../themes/utils";
import baseTheme from "../themes/base";
import darkTheme from "../themes/dark";

//import portrait from "../images/mrodriguez-portrait-small.jpg";
//import portraitDark from "../images/csharp.png";

import BioCard from "./BioCard";
import SkewedCard from "./SkewedCard";

import Skeletor from "./skeletons/Skeletor";


export default function Home() {
  useEffect(() => {
    applyTheme(baseTheme);
  }, []);

  return (
    <div>

      <div>
        <BioCard />
      </div>

      <Skeletor />
      <div className="bg-primary-light py-10">
        <Articles />
      </div>

      <SkewedCard text="Woah. What do you think about this?" />



      <StickyFooter />
      {/* <Footer /> */}
    </div>
  );
}
