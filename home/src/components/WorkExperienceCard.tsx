import "../index.css";
import WorkExperienceRenderer from "./WorkExperienceRenderer";

import ToggleButton from "@mui/material/ToggleButton";

import DateRangeIcon from "@mui/icons-material/DateRange";
import BadgeIcon from "@mui/icons-material/Badge";

import { useState } from "react";

export default function WorkExperienceCard(props) {
  const [selected, setSelected] = useState(false);

  return (
    <div>
      <div>
        <div className="text-sm font-bold">
          <BadgeIcon />
          {props.title}
        </div>
        <div className="text-sm pb-4">
          <DateRangeIcon />
          {props.dateStart} - {props.dateEnd}
        </div>
      </div>
      <div>
        <ToggleButton
          className="float-right"
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

      {selected === true && (
        <div>
          <WorkExperienceRenderer items={props.details} />
        </div>
      )}
    </div>
  );
}
