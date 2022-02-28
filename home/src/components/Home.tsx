import "../index.css";

import BioCard from "./BioCard";
import StickyFooter from "./StickyFooter";

import Articles from "./Articles";

export default function Home() {
  return (
    <div>
      {/* <div className="bg-gray-700"> */}
        <BioCard />
      {/* </div> */}
      <div className="bg-gray-600">
        <Articles />
      </div>

      <StickyFooter />
      {/* <Footer /> */}
    </div>
  );
}
