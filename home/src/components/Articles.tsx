// import '../index.css';

import BioCard from "./BioCard";
import StackedCard from "./StackedCard";
import HorizontalCard from "./HorizontalCard";

// import Footer from '../components/Footer';
import illustration from "../images/csharp-02.png";
import illustration2 from "../images/react.png";

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

// importing option 1
// import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
// import ThreeDRotation from '@mui/icons-material/ThreeDRotation';

// importing option 2
// import { AccessAlarm, ThreeDRotation } from '@mui/icons-material';

import Timeline from "./Timeline";

export default function Articles() {
    return (
        <div>
            <div>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography>Work Experience</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Timeline />
                        {/* <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                        </Typography> */}
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <Typography>Interests</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        {/* <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                        </Typography> */}
                        <StackedCard bgColor="bg-grey-100" img={illustration} title="Awesome stuff" text="This will probably look awesome, I know." />
                    </AccordionDetails>
                </Accordion>
                <Accordion disabled>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel3a-content"
                        id="panel3a-header"
                    >
                        <Typography>Extra</Typography>
                    </AccordionSummary>
                </Accordion>
            </div>

            <div className="flex flex-col lg:grid lg:gap-4 2xl:gap-6 lg:grid-cols-4 2xl:row-span-2 2xl:pb-8 ml-2 pt-4 px-6">
                {/* <!-- Beginning of the component about Daniel Clifford --> */}
                <div className="bg-indigo-600 lg:order-1 lg:row-span-1 2xl:row-span-1 lg:col-span-2 rounded-lg shadow-xl mb-5 lg:mb-0">
                    <HorizontalCard title="netcore applications" tag="Programming" img={illustration} />
                    {/* <div className="mx-6 my-8 2xl:mx-10">
            <img alt="alt" className="w-8 md:w-9 lg:w-10 2xl:w-20 h-8 md:h-9 lg:h-10 2xl:h-20 rounded-full border-2 ml-1 lg:ml-3 2xl:ml-0 md:-mt-1 2xl:-mt-4" src="https://images.pexels.com/photos/3775534/pexels-photo-3775534.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
            <h1 className="text-white text-xs md:text-base 2xl:text-2xl pl-12 lg:pl-16 2xl:pl-20 -mt-8 md:-mt-10 lg:-mt-11 2xl:-mt-20 2xl:mx-8">Daniel Clifford</h1>
            <h2 className="text-white text-opacity-50 text-xs md:text-base 2xl:text-2xl pl-12 lg:pl-16 2xl:pl-20 2xl:my-2 2xl:mx-8">Verified Graduate</h2>
          </div>
          <div className="-mt-6 relative">
            <p className="text-white text-xl 2xl:text-4xl font-bold px-7 lg:px-9 2xl:pt-6 2xl:mx-2">I received a job offer mid-course, and the subjects I learned were current, if not more so, in the company I joined. I honestly feel I got every penny’s worth.</p>
            <br />
            <p className="text-white text-opacity-50 font-medium md:text-sm 2xl:text-3xl px-7 lg:px-9 mb-3 2xl:pb-8 2xl:mx-2">“ I was an EMT for many years before I joined the bootcamp. I’ve been looking to make a transition and have heard some people who had an amazing experience here. I signed up for the free intro course and found it incredibly fun! I enrolled shortly thereafter. The next 12 weeks was the best - and most grueling - time of my life. Since completing the course, I’ve successfully switched careers, working as a Software Engineer at a VR startup. ”</p>
          </div> */}
                </div>
                {/* <!-- Ending of the component about Daniel Clifford --> */}

                {/* <!-- Beginning of the component about Jonathan Walters --> */}
                <div className="bg-white lg:order-2 lg:row-span-1 2xl:row-span-1 lg:col-span-1 rounded-lg shadow-xl pb-4 mb-5 lg:mb-0">
                    <StackedCard bgColor="bg-blue-200" img={illustration} title="netcore apps" text="Currently I'm working on projects using Microsoft technologies." />
                    {/* <HorizontalCard title="netcore applications" tag="Programming" img={illustration} /> */}

                    {/* <div className="mx-8 2xl:mx-10 my-10">
            <img alt="alt" className="w-8 md:w-9 2xl:w-20 h-8 md:h-9 2xl:h-20 rounded-full border-2 -ml-1 -mt-2 lg:-mt-4" src="https://images.pexels.com/photos/634021/pexels-photo-634021.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
            <h1 className="text-white text-xs md:text-base 2xl:text-2xl pl-11 md:pl-12 2xl:pl-24 -mt-8 md:-mt-10 2xl:-mt-16">Jonathan Walters</h1>
            <h2 className="text-white text-xs md:text-base 2xl:text-2xl text-opacity-50 pl-11 md:pl-12 2xl:pl-24">Verified Graduate</h2>
          </div>
          <div className="-mt-8 mx-1 lg:mx-2">
            <p className="text-white text-lg lg:text-xl 2xl:text-4xl font-semibold pt-1 px-6 2xl:px-8 lg:pl-5 lg:pr-8">The team was very supportive and kept me motivated</p>
            <br />
            <p className="text-white text-opacity-50 font-medium md:text-sm 2xl:text-3xl pl-6 lg:pl-5 pr-4 -mt-1 lg:mt-6 2xl:mt-2 2xl:px-8">“ I started as a total newbie with virtually no coding skills. I now work as a mobile engineer for a big company. This was one of the best investments I’ve made in myself. ”</p>
          </div> */}
                </div>
                {/* <!-- Ending of the component about Jonathan Walters --> */}

                {/* <!-- Beginning of the component about Jeanette Harmon --> */}
                <div className="bg-primary-color-white lg:order-3 lg:row-span-2 2xl:row-span-1 lg:col-span-1 rounded-lg shadow-xl mb-5 lg:mb-0 2xl:mb-8">
                    <HorizontalCard title="Can coffee make you a better person?" tag="Philosophy" img={illustration2} />
                    {/* <div className="mx-8 my-10 lg:my-8">
            <img alt="alt" className="w-8 md:w-9 lg:w-11 2xl:w-20 h-8 md:h-9 lg:h-11 2xl:h-20 rounded-full border-2 -mt-3 -ml-1 lg:-ml-0" src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
            <h1 className="primary-color-blackish-blue text-xs md:text-base 2xl:text-2xl pl-11 md:pl-12 lg:pl-14 2xl:pl-24 -mt-8 md:-mt-10 lg:-mt-11 2xl:-mt-16">Jeanette Harmon</h1>
            <h2 className="primary-color-blackish-blue-opacity text-xs md:text-base 2xl:text-2xl pl-11 md:pl-12 lg:pl-14 2xl:pl-24">Verified Graduate</h2>
          </div>
          <div className="-mt-4 ml-5 mr-11">
            <p className="primary-color-blackish-blue text-xl 2xl:text-4xl font-bold px-2 lg:px-3 -mt-6 lg:-mt-5 2xl:mt-12 2xl:pb-6">An overall wonderful and rewarding experience</p>
            <br />
            <p className="primary-color-blackish-blue-opacity font-medium md:text-sm 2xl:text-3xl pl-2 lg:pl-3 lg:pr-4 mb-6 2xl:pt-2 -mt-3">“ Thank you for the wonderful experience! I now have a job I really enjoy, and make a good living while doing something I love. ”</p>
          </div> */}
                </div>
                {/* <!-- Ending of the component about Jeanette Harmon --> */}


                {/* <!-- Beginning of the component about Patrick Abrams --> */}
                <div className="bg-purple-800 lg:order-4 lg:row-span-2 2xl:row-span-1 col-span-2 rounded-lg shadow-xl mb-5 lg:mb-0 2xl:mb-8 lg:pb-14 2xl:pb-20">
                    <HorizontalCard title="Can coffee make you a better person?" tag="Philosophy" img={illustration2} />
                    {/* <div className="mx-8 my-8">
            <img alt="alt" className="w-8 md:w-9 lg:w-10 2xl:w-20 h-8 md:h-9 lg:h-10 2xl:h-20 rounded-full border-2 lg:-mt-3" src="https://images.pexels.com/photos/3778603/pexels-photo-3778603.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
            <h1 className="text-white text-xs md:text-base 2xl:text-2xl pl-12 md:pl-14 2xl:pl-24 -mt-8 md:-mt-10 lg:-mt-11 2xl:-mt-16">Patrick Abrams</h1>
            <h2 className="text-white text-xs md:text-base 2xl:text-2xl text-opacity-50 pl-12 md:pl-14 2xl:pl-24">Verified Graduate</h2>
          </div>
          <div className="px-3 -mt-3 mb-5 lg:mb-0">
            <p className="text-white text-lg 2xl:text-4xl font-semibold px-4 -mt-3 lg:-mt-6 2xl:mt-8">Awesome teaching support from TAs who did the bootcamp themselves. Getting guidance from them and learning from their experiences was easy.</p>
            <br />
            <p className="text-white text-opacity-50 font-medium md:text-sm 2xl:text-3xl px-4 mt-1 lg:-mt-3 2xl:mt-6">“ The staff seem genuinely concerned about my progress which I find really refreshing. The program gave me the confidence necessary to be able to go out in the world and present myself as a capable junior developer. The standard is above the rest. You will get the personal attention you need from an incredible community of lgart and amazing people. ”</p>
          </div> */}
                </div>
                {/* <!-- Ending of the component about Patrick Abrams --> */}

                {/* <!-- Beginning of the component about Kira Whittle --> */}
                <div className="bg-primary-color-white lg:order-2 lg:row-span-4 lg:col-span-1 rounded-lg shadow-xl mb-5 lg:pb-4 2xl:h-screen">
                    <StackedCard bgColor="bg-blue-200" img={illustration} title="netcore apps" text="Currently I'm working on projects using Microsoft technologies." />

                    {/* <div className="mx-8 my-8 lg:pl-1">
            <img alt="alt" className="w-8 md:w-9 lg:w-12 2xl:w-20 h-8 md:h-9 lg:h-12 2xl:h-20 rounded-full border-2 lg:-mt-4 -ml-1 lg:-ml-4" src="https://images.pexels.com/photos/3762804/pexels-photo-3762804.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
            <h1 className="primary-color-blackish-blue text-xs md:text-base 2xl:text-2xl pl-10 md:pl-12 2xl:pl-24 -mt-8 md:-mt-10 lg:-mt-12 2xl:-mt-16">Kira Whittle</h1>
            <h2 className="primary-color-blackish-blue-opacity text-xs md:text-base 2xl:text-2xl pl-10 md:pl-12 2xl:pl-24">Verified Graduate</h2>
          </div>
          <div className="px-3 lg:px-5 lg:-mt-4 mb-5 lg:mb-0">
            <p className="primary-color-blackish-blue text-xl 2xl:text-4xl font-semibold px-4 lg:px-0 -mt-2 lg:-mt-0">Such a life-changing experience. Highly recommended!</p>
            <br />
            <p className="primary-color-blackish-blue-opacity font-medium md:text-sm 2xl:text-3xl px-4 lg:px-0 2xl:px-4 lg:pr-3 mt-2 lg:-mt-1 2xl:mt-2 2xl:pb-64">“ Before joining the bootcamp, I’ve never written a line of code. I needed some structure from professionals who can help me learn programming step by step. I was encouraged to enroll by a former student of theirs who can only say wonderful things about the program. The entire curriculum and staff did not disappoint. They were very hands-on and I never had to wait long for assistance. The agile team project, in particular, was outstanding. It took my learning to the next level in a way that no tutorial could ever have. In fact, I’ve often referred to it during interviews as an example of my developent experience. It certainly helped me land a job as a full-stack developer after receiving multiple offers. 100% recommend! ”</p>
          </div> */}
                </div>
                {/* <!-- Ending of the component about Kira Whittle --> */}
            </div>

        </div>
    );
}





