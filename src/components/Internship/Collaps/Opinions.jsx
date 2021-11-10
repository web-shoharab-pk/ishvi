import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { IconButton } from "@mui/material";
import Collapse from "@mui/material/Collapse";
import { styled } from "@mui/material/styles";
import React, { useState } from "react";
import "./commonType.css";
import "./city.css"

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


const Opinions = () => {
    const [expanded, setExpanded] = useState(true);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

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
                    <input type="text" placeholder="e.g 4" className="input_tag" />
                </div>
            </Collapse>
        </div>
    );
};

export default Opinions;
