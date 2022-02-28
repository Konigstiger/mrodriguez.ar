import '../index.css';

import BioCard from "./BioCard";
import StackedCard from "./StackedCard";
import HorizontalCard from "./HorizontalCard";
import StickyFooter from "./StickyFooter";

import Articles from "./Articles";
import Timeline from "./Timeline";

// import Footer from '../components/Footer';
import illustration from "../images/csharp-02.png";
import illustration2 from "../images/react.png";

function Home() {
    return (
       
        <div>
            <BioCard />

            {/* <StackedCard bgColor="bg-blue-200" img={illustration} title="netcore apps" text="Currently I'm working on projects using Microsoft technologies."/>
            <HorizontalCard title="netcore applications" tag="Programming" img={illustration} />
            <HorizontalCard title="Can coffee make you a better person?" tag="Philosophy" img={illustration2}/> */}
            
            <Articles />
            <StickyFooter />
            {/* <Footer /> */}
        </div>
    );
}

export default Home;


