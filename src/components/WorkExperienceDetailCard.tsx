import WorkExperienceRenderer from "./WorkExperienceRenderer";

import DateRangeIcon from "@mui/icons-material/DateRange";
import BadgeIcon from "@mui/icons-material/Badge";

import { useState } from "react";

import CloseIcon from '@mui/icons-material/Close';
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
          className="p-1 m-1 border-primary-dark float-right outline-none"
          onClick={() => {
            setSelected(!selected);
          }}
        >
          {/* details */}
          {(selected === true) ?
            <div className="text-secondary-light"><CloseIcon /></div> :
            <div className="px-2 bg-secondary hover:bg-accent-secondary cutBtn"><ReadMoreIcon /><span> Details</span></div>}
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
