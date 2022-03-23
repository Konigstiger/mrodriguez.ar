
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import Timeline from "./Timeline";
import Pill from "./Pill";
import SectionHeader from "./SectionHeader";


export default function Articles() {
  return (
    <div>
      <div className="flex flex-col lg:grid lg:gap-4 2xl:gap-6 lg:grid-cols-4 2xl:row-span-2 2xl:pb-8 ml-0 pt-2 px-1">
        <div className="bg-primary-dark lg:order-1 lg:row-span-1 2xl:row-span-1 lg:col-span-2 rounded-lg shadow-xl mb-5 lg:mb-0 py-2 px-2">

          {/* <Typography className="text-accent-primary font-bold px-2 py-2">
            Work Experience
          </Typography> */}
          <SectionHeader title="Work Experience" />

          <Timeline />

          {/* <Typography className="bg-primary-dark text-text-on-primary font-bold px-2 py-1">
            Interests
          </Typography> */}

          <SectionHeader title="Interests" />

          {/* chips start */}
          <div className="container mx-auto my-0 bg-primary flex flex-wrap">
            <Pill text="UI/UX Design" />
            <Pill text="Software Architecture" />
            <Pill text="Good Practices" />
            <Pill text="Mentoring" />
            <Pill text="Videogames" />
          </div>
          {/* chips end */}

        </div>
      </div>
    </div>
  );
}
