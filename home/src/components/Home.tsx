import "../index.css";

import BioCard from "./BioCard";
import StackedCard from "./StackedCard";
import HorizontalCard from "./HorizontalCard";
import StickyFooter from "./StickyFooter";

import Articles from "./Articles";
import Timeline from "./Timeline";

import Banner from "./Banner";

import illustration from "../images/csharp-02.png";

function Home() {
  return (
    <div>
      <BioCard />

      <Articles />

      <StickyFooter />
      {/* <Footer /> */}
    </div>
  );
}

export default Home;
