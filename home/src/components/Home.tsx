import "../index.css";

import BioCard from "./BioCard";
import StickyFooter from "./StickyFooter";

import Articles from "./Articles";


export default function Home() {

  return (
    <div>
      <BioCard />

      <div className="bg-color-03-green">
        <Articles />
      </div>

      <StickyFooter />
      {/* <Footer /> */}
    </div>
  );
}
