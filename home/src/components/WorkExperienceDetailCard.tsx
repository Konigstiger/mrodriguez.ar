import "../index.css";
import WorkExperienceRenderer from "./WorkExperienceRenderer";

import ToggleButton from "@mui/material/ToggleButton";
import Button from "@mui/material/Button";

import DateRangeIcon from "@mui/icons-material/DateRange";
import BadgeIcon from "@mui/icons-material/Badge";

import { useState } from "react";
import { Typography } from "@mui/material";

import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import InfoIcon from '@mui/icons-material/Info';
import ReadMoreIcon from '@mui/icons-material/ReadMore';

export default function WorkExperienceDetailCard(props) {
  const [selected, setSelected] = useState(false);

  // colors: icons
  const iconColors = "text-accent-primary";

  return (
    <div>
      <div>
        <div className="text-sm font-bold ">
          <BadgeIcon className={iconColors} />
          <span className="pl-1 text-text-on-primary">{props.title}</span>
        </div>
        <div className="text-sm pb-4">
          <DateRangeIcon className={iconColors} />
          <span className="pl-1 text-text-on-secondary">{props.dateStart} - {props.dateEnd}</span>
        </div>
      </div>
      <div>
        <button
          className="m-1 p-1 border-primary-dark float-right"
          onClick={() => {
            setSelected(!selected);
          }}
        >
          {/* details */}
          {(selected === true) ?
            <div className="text-secondary-light"><CloseIcon /></div> :
            <div className="border rounded-full px-2 hover:bg-accent-secondary"><ReadMoreIcon /> Details</div>}
        </button>
      </div>

      {selected === true && (
        <div>
          <WorkExperienceRenderer items={props.details} />
        </div>
      )}
    </div>
  );
}
