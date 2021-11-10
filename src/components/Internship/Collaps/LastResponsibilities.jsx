import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { IconButton } from "@mui/material";
import Collapse from "@mui/material/Collapse";
import { styled } from "@mui/material/styles";
import React, { useState } from "react";
import "./commonType.css";
import AddIcon from '@mui/icons-material/Add';

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

const LastResponsibilities = () => {
    const [expanded, setExpanded] = useState(true);

    const handleExpandClick = () => {
        setExpanded(!expanded);
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
              
                <div className="content_res">
                    <h3>Question 1</h3>
                    <p>Why should you be hired for this role?</p>
                </div>
                <div className="content_res">
                    <h3>Question 2</h3>
                    <p>
                        Are you available for 2 weeks, starting immediately, for a full-time internship?If not, what is the time period you are available for and the earliest date you can start this internship on?</p>
                </div>
                <div className="d-flex add_option">
                    <AddIcon /> <p>Add another question</p>
                </div>

                <div>
                    <button className="common_btn1">Save draft</button>
                    <button className="common_btn2">Post internship</button>
                </div>


            </Collapse >
        </div >
    );
};

export default LastResponsibilities;
