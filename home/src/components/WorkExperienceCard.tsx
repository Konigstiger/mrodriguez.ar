import "../index.css";
import Button from "@mui/material/Button";
import TopAccentAlert from "./TopAccentAlert";
import WorkExperienceRenderer from "./WorkExperienceRenderer";

import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';



import { useState } from "react";

export default function WorkExperienceCard(props) {
  const [state, setState] = useState("start");

  return (
    <div>
      <p>{props.title}</p>
      <p>
        {props.dateStart} - {props.dateEnd}
      </p>

      {state === "start" && (
        <Button
          variant="outlined"
          onClick={() => {
            setState("expanded");
          }}
        >
          Details
        </Button>
      )}

      {state === "expanded" && (
        <div>
          <WorkExperienceRenderer items={props.details} />

            <IconButton 
                className="float-right"
                aria-label="close"
                onClick={() => {
                    setState("start");
                    }}
              >
                <CloseIcon />
            </IconButton>

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
