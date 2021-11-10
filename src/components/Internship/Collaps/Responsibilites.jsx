import SwitchUnstyled, {
  switchUnstyledClasses,
} from "@mui/core/SwitchUnstyled";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { IconButton } from "@mui/material";
import Collapse from "@mui/material/Collapse";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import RadioGroup from "@mui/material/RadioGroup";
import { styled } from "@mui/material/styles";
import React, { useState } from "react";
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

const Responsibilites = () => {
  const [expanded, setExpanded] = useState(true);
  const [expanded2, setExpanded2] = useState(true);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const handleExpandClick2 = () => {
    setExpanded2(!expanded2);
  };

  return (
    <div className="internship_details_card2">
      <div className="d-flex justify-content-center align-items-center">
        <div className="d-flex justify-content-between align-items-center internship_details_header">
          <p className="mt-3">Intern’s responsibilities</p>
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
          <p>Selected intern's day-to-day responsibilities include: </p>
          <p>1.</p>
          <p>2.</p>
          <p>3.</p>
        </div>
        <p>Stipend & perks</p>
        <div className="content">
          <p>Stipend</p>
          <div className="d-flex">
            <FormControl component="fieldset" className="radio_font">
              <RadioGroup
                aria-label="gender"
                defaultValue="female"
                name="radio-buttons-group"
              >
                <div className="d-flex justify-content-start align-items-center">
                  <input
                    className="radio_style"
                    type="radio"
                    name="selector"
                    id=""
                  />
                  <label className="details_tag_size" htmlFor="">
                    Fixed
                  </label>
                </div>
                <div className="d-flex justify-content-start align-items-center">
                  <input
                    className="radio_style"
                    type="radio"
                    name="selector"
                    id=""
                  />
                  <label className="details_tag_size" htmlFor="">
                    Performance based
                  </label>
                </div>
              </RadioGroup>
            </FormControl>
            <FormControl component="fieldset" className="radio_font">
              <RadioGroup
                aria-label="gender"
                defaultValue="female"
                name="radio-buttons-group"
              >
                <div className="d-flex justify-content-start align-items-center">
                  <input
                    className="radio_style"
                    type="radio"
                    name="selector"
                    id=""
                  />
                  <label className="details_tag_size" htmlFor="">
                    Negotiable
                  </label>
                </div>
                <div className="d-flex justify-content-start align-items-center">
                  <input
                    className="radio_style"
                    type="radio"
                    name="selector"
                    id=""
                  />
                  <label className="details_tag_size" htmlFor="">
                    Unpaid
                  </label>
                </div>
              </RadioGroup>
            </FormControl>
          </div>
        </div>

        <div className="payment d-flex align-items-center mt-5">
          <div className="box_1 d-flex align-items-center justify-content-between">
            <p className="d-flex align-items-center justify-content-between">
              USD
              <ExpandMoreIcon style={{ color: "#000" }} />
            </p>
          </div>
          <div className="box_2 d-flex align-items-center">
            <p>e.g 1000</p>
          </div>
        </div>

        <div className="collapse_check_item d-flex justify-content-center align-items-center mt-3">
          <p className="mt-3">/months</p>
          <ExpandMore
            expand={expanded2}
            onClick={handleExpandClick2}
            aria-expanded={expanded2}
            aria-label="show more"
          >
            <ExpandMoreIcon style={{ color: "#000" }} />
          </ExpandMore>
          <Collapse
            className=""
            in={expanded2}
            timeout="auto"
            unmountOnExit
          ></Collapse>
        </div>

        <div className="mt-4">
          <FormControl component="fieldset" className="radio_font">
            <FormLabel component="legend">Perks (Optional)</FormLabel>

            <RadioGroup
              aria-label="gender"
              defaultValue="female"
              name="radio-buttons-group"
            >
              <div className="d-flex justify-content-start align-items-center">
                <input
                  className="radio_style"
                  type="radio"
                  name="selector"
                  id=""
                />
                <label className="details_tag_size" htmlFor="">
                  Certificate
                </label>
              </div>
              <div className="d-flex justify-content-start align-items-center">
                <input
                  className="radio_style"
                  type="radio"
                  name="selector"
                  id=""
                />
                <label className="details_tag_size" htmlFor="">
                  Letter of recommendation
                </label>
              </div>
              <div className="d-flex justify-content-start align-items-center">
                <input
                  className="radio_style"
                  type="radio"
                  name="selector"
                  id=""
                />
                <label className="details_tag_size" htmlFor="">
                  Flexible work hours
                </label>
              </div>
              <div className="d-flex justify-content-start align-items-center">
                <input
                  className="radio_style"
                  type="radio"
                  name="selector"
                  id=""
                />
                <label className="details_tag_size" htmlFor="">
                  5 days a week
                </label>
              </div>
              <div className="d-flex justify-content-start align-items-center">
                <input
                  className="radio_style"
                  type="radio"
                  name="selector"
                  id=""
                />
                <label className="details_tag_size" htmlFor="">
                  Informal dress code
                </label>
              </div>
              <div className="d-flex justify-content-start align-items-center">
                <input
                  className="radio_style"
                  type="radio"
                  name="selector"
                  id=""
                />
                <label className="details_tag_size" htmlFor="">
                  Free snacks & beverages
                </label>
              </div>
            </RadioGroup>
          </FormControl>
        </div>
        <div className="d-flex justify-content-between align-items-center mt-4">
          <p>
            Does this internship come with
            <br />a pre-placement offer (PPO)? (Optional)
          </p>
          <SwitchUnstyled component={Root} defaultChecked />
        </div>
      </Collapse>
    </div>
  );
};

export default Responsibilites;
