import "../index.css";
import Button from "@mui/material/Button";
import TopAccentAlert from "./TopAccentAlert";
import WorkExperienceRenderer from "./WorkExperienceRenderer";

import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import ToggleButton from "@mui/material/ToggleButton";

import ApartmentIcon from '@mui/icons-material/Apartment';
import DateRangeIcon from '@mui/icons-material/DateRange';
import BadgeIcon from '@mui/icons-material/Badge';
import LocalPoliceIcon from '@mui/icons-material/LocalPolice';
import VerifiedIcon from '@mui/icons-material/Verified';

import { useState } from "react";

export default function WorkExperienceCard(props) {

  const [selected, setSelected] = useState(false);

  return (
    <div>
      <div>

        <div className="flex align-middle text-sm"><BadgeIcon />{props.title}</div>
        <div className="flex align-middle text-sm">
          <DateRangeIcon/>{props.dateStart} - {props.dateEnd}
        </div>
      </div>
      <div>
        <ToggleButton
          className="float-right"
        //   className="float-right -top-12"
          size="small"
          value="check"
          selected={selected}
          onChange={() => {
            setSelected(!selected);
          }}
        >
            details

        </ToggleButton>
      </div>

      {/* {selected === false && ( */}
      {/* <ToggleButton
          value="check"
          selected={selected}
          onChange={() => {
            setSelected(!selected);
          }}
        >
          details
        </ToggleButton> */}
      {/* )} */}

      {/* {state === "start" && (
        <Button
          variant="outlined"
          onClick={() => {
            setState("expanded");
          }}
        >
          Details
        </Button>
      )} */}

      {/* {state === "expanded" && ( */}
      {selected === true && (
        <div>
          <WorkExperienceRenderer items={props.details} />

          {/* <IconButton
            className="float-right"
            aria-label="close"
            onClick={() => {
              setState("start");
            }}
          >
            <CloseIcon />
          </IconButton> */}

          {/* <Button
            variant="outlined"
            onClick={() => {
              setState("start");
            }}
          >
            close
          </Button> */}
        </div>
      )}

      {/* {state === "expanded" && (
          <TopAccentAlert 
                title={props.title} 
                message={props.details}
         />
      )} */}
    </div>
  );
}
