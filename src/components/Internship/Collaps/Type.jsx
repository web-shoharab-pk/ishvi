import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { IconButton } from "@mui/material";
// import downArrow from './../../../icons/downArrow.svg'
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

const Type = () => {
  const [expanded, setExpanded] = useState(true);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="internship_details_card2">
      <div className="d-flex justify-content-center align-items-center">
        <div className="d-flex justify-content-between align-items-center internship_details_header">
          <p className="mt-3">Internship Type</p>
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
          <FormControl component="fieldset" className="radio_font">
            <FormLabel component="legend">Profile</FormLabel>
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
                  Regular (In-office/On-field)
                </label>
              </div>
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
                  Work from home (Recommended due to COVID-19 situation)
                </label>
              </div>
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
                  I am open to interviewing candidates online and allowing them
                  to work from home or defer the joining date till current
                  COVID-19 situation improves
                </label>
              </div>
            </RadioGroup>
          </FormControl>
        </div>
      </Collapse>
    </div>
  );
};

export default Type;
