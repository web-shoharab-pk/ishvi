import SwitchUnstyled, {
  switchUnstyledClasses,
} from "@mui/core/SwitchUnstyled";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { IconButton } from "@mui/material";
import Collapse from "@mui/material/Collapse";
import FormControl from "@mui/material/FormControl";
import RadioGroup from "@mui/material/RadioGroup";
import { styled } from "@mui/material/styles";
import React, { useState } from "react";
import "./city.css";
import "./commonType.css";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const Root = styled("span")`
  font-size: 0;
  position: relative;
  display: inline-block;
  width: 32px;
  height: 20px;
  margin: 10px;
  cursor: pointer;

  & .${switchUnstyledClasses.track} {
    background: #b3c3d3;
    border-radius: 10px;
    display: block;
    height: 100%;
    width: 100%;
    position: absolute;
  }

  & .${switchUnstyledClasses.thumb} {
    display: block;
    width: 14px;
    height: 14px;
    top: 3px;
    left: 3px;
    border-radius: 16px;
    background-color: #fff;
    position: relative;
    transition: all 200ms ease;
  }

  &.${switchUnstyledClasses.focusVisible} .${switchUnstyledClasses.thumb} {
    background-color: rgba(255, 255, 255, 1);
    box-shadow: 0 0 1px 8px rgba(0, 0, 0, 0.25);
  }

  &.${switchUnstyledClasses.checked} {
    .${switchUnstyledClasses.thumb} {
      left: 14px;
      top: 3px;
      background-color: #fff;
    }

    .${switchUnstyledClasses.track} {
      background: #007fff;
    }
  }

  & .${switchUnstyledClasses.input} {
    cursor: inherit;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    opacity: 0;
    z-index: 1;
    margin: 0;
  }
`;

const City = () => {
  const [expanded, setExpanded] = useState(true);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const label = { componentsProps: { input: { "aria-label": "Demo switch" } } };

  return (
    <div className="internship_details_card2">
      <div className="d-flex justify-content-center align-items-center">
        <div className="d-flex justify-content-between align-items-center internship_details_header">
          <p className="mt-3">City/Cities</p>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon style={{ color: "#fff" }} />
          </ExpandMore>
        </div>
      </div>

      <Collapse className="p-3" in={expanded} timeout="auto" unmountOnExit>
        <div className="collapse_check_item">
          <input type="text" placeholder="e.g.mumbai" className="input_tag" />
          <FormControl component="fieldset" className="radio_font">
            <RadioGroup
              aria-label="gender"
              defaultValue="female"
              name="radio-buttons-group"
            >
              <div className="d-flex justify-content-start align-items-center">
                <div>
                  <input
                    className="radio_style"
                    type="radio"
                    name="selector"
                    id=""
                  />
                </div>
                <label className="details_tag_size" htmlFor="">
                  Allow applications only from the above or neighboring cities
                </label>
              </div>
            </RadioGroup>
          </FormControl>
          <div className="d-flex justify-content-between align-items-center mt-4">
            <p>Is part-time allowed?</p>
            <SwitchUnstyled component={Root} {...label} defaultChecked />
          </div>
        </div>
      </Collapse>
    </div>
  );
};

export default City;
