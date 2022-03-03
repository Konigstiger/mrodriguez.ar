
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import Timeline from "./Timeline";

// import Banner from "./Banner";


export default function Articles() {
  return (
    <div>

      <div className="flex flex-col lg:grid lg:gap-4 2xl:gap-6 lg:grid-cols-4 2xl:row-span-2 2xl:pb-8 ml-0 pt-2 px-1">
        <div className="bg-gray-300 lg:order-1 lg:row-span-1 2xl:row-span-1 lg:col-span-2 rounded-lg shadow-xl mb-5 lg:mb-0 py-2 px-2">
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className="bg-color-01-purple-dark text-color-06-white font-bold px-2 py-2">
                Work Experience
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Timeline />
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography className="bg-color-01-purple-dark text-color-06-white font-bold px-2 py-2">
                Interests
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              {/* <Banner
                title="Interests"
                message="Do you want to know more about me? Why are you obsessed with me?"
                action="Learn more "
              /> */}

          {/* chips start */}
          <div className="container mx-auto my-1 p-0 bg-white flex flex-wrap">
            <div className="flex justify-center items-center m-1 px-2 py-2 border border-gray-300 rounded-full bg-gray-200 text-base text-gray-700 font-medium">
              <div className="flex-initial max-w-full leading-none text-xs font-normal">
              UI/UX Design
              </div>
            </div>
            <div className="flex justify-center items-center m-1 px-2 py-2 border border-gray-300 rounded-full bg-gray-200 text-base text-gray-700 font-medium">
              <div className="flex-initial max-w-full leading-none text-xs font-normal">
                Software Architecture
              </div>
            </div>
            <div className="flex justify-center items-center m-1 px-2 py-2 border border-gray-300 rounded-full bg-gray-200 text-base text-gray-700 font-medium">
              <div className="flex-initial max-w-full leading-none text-xs font-normal">
              Good Practices
              </div>
            </div>
            <div className="flex justify-center items-center m-1 px-2 py-2 border border-gray-300 rounded-full bg-gray-200 text-base text-gray-700 font-medium">
              <div className="flex-initial max-w-full leading-none text-xs font-normal">
              Mentoring
              </div>
            </div>
            <div className="flex justify-center items-center m-1 px-2 py-2 border border-gray-300 rounded-full bg-gray-200 text-base text-gray-700 font-medium">
              <div className="flex-initial max-w-full leading-none text-xs font-normal">
              Videogames
              </div>
            </div>
          </div>
          {/* chips end */}

            </AccordionDetails>
          </Accordion>
        </div>


        {/* <div className="bg-white lg:order-2 lg:row-span-1 2xl:row-span-1 lg:col-span-1 rounded-lg shadow-xl p-4 mb-5 lg:mb-0">
          <StackedCard
            bgColor="bg-blue-200"
            img={illustration}
            title="netcore apps"
            text="Currently I'm working on projects using Microsoft technologies."
          />
        </div>
        <div className="bg-white lg:order-2 lg:row-span-1 2xl:row-span-1 lg:col-span-1 rounded-lg shadow-xl p-4 mb-5 lg:mb-0">
          <StackedCard
            bgColor="bg-blue-200"
            img={illustration}
            title="netcore apps"
            text="Currently I'm working on projects using Microsoft technologies."
          />
        </div>
        <div className="bg-white lg:order-2 lg:row-span-1 2xl:row-span-1 lg:col-span-1 rounded-lg shadow-xl p-4 mb-5 lg:mb-0">
          <StackedCard
            bgColor="bg-blue-200"
            img={illustration}
            title="netcore apps"
            text="Currently I'm working on projects using Microsoft technologies."
          />
        </div> */}

      </div>
    </div>
  );
}
