// import '../index.css';

import StackedCard from "./StackedCard";

// import Footer from '../components/Footer';
import illustration from "../images/csharp-02.png";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

// importing option 1
// import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
// import ThreeDRotation from '@mui/icons-material/ThreeDRotation';

// importing option 2
// import { AccessAlarm, ThreeDRotation } from '@mui/icons-material';

import Timeline from "./Timeline";
import Timeline2 from "./Timeline2";

import Banner from "./Banner";

export default function Articles() {
  return (
    <div>

      <div className="flex flex-col lg:grid lg:gap-4 2xl:gap-6 lg:grid-cols-4 2xl:row-span-2 2xl:pb-8 ml-2 pt-4 px-6">
        <div className="bg-gray-300 lg:order-1 lg:row-span-1 2xl:row-span-1 lg:col-span-2 rounded-lg shadow-xl mb-5 lg:mb-0 py-4 px-4">
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Work Experience</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Timeline2 />
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
              {/* <Typography>...</Typography> */}
              <Banner
                title="About me"
                message="Do you want to know more about me? Why are you obsessed with me?"
                action="Learn more "
              />
            </AccordionDetails>
          </Accordion>
        </div>
        {/* <!-- Ending of the component about Daniel Clifford --> */}

        <div className="bg-white lg:order-2 lg:row-span-1 2xl:row-span-1 lg:col-span-1 rounded-lg shadow-xl p-4 mb-5 lg:mb-0">
          <StackedCard
            bgColor="bg-blue-200"
            img={illustration}
            title="netcore apps"
            text="Currently I'm working on projects using Microsoft technologies."
          />
        </div>

      </div>
    </div>
  );
}
