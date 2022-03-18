
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import Timeline from "./Timeline";
import Pill from "./Pill";


export default function Articles() {
  return (
    <div>
      <div className="flex flex-col lg:grid lg:gap-4 2xl:gap-6 lg:grid-cols-4 2xl:row-span-2 2xl:pb-8 ml-0 pt-2 px-1">
        <div className="bg-secondary-dark lg:order-1 lg:row-span-1 2xl:row-span-1 lg:col-span-2 rounded-lg shadow-xl mb-5 lg:mb-0 py-2 px-2">
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              sx={{
                // backgroundColor: "gray"
                backgroundColor: '#CCCCCC'
                //backgroundColor: 'secondary.light'
                // backgroundColor:
                // palette.mode === 'dark'
                //   ? 'rgba(255, 255, 255, .05)'
                //   : 'rgba(0, 0, 0, .03)',

              }}
            >
              {/* bg-primary text-text-on-primary */}
              {/* <Typography className="bg-color-01-purple-dark text-color-06-white font-bold px-2 py-2"> */}

              <Typography className="bg-primary-dark text-text-on-primary font-bold px-2 py-2">
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
              <Typography className="bg-primary-dark text-text-on-primary font-bold px-2 py-2">
                Interests
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              {/* chips start */}
              <div className="container mx-auto my-1 p-0 bg-white flex flex-wrap">
                <Pill text="UI/UX Design" />
                <Pill text="Software Architecture" />
                <Pill text="Good Practices" />
                <Pill text="Mentoring" />
                <Pill text="Videogames" />
              </div>
              {/* chips end */}

            </AccordionDetails>
          </Accordion>
        </div>

      </div>
    </div>
  );
}
