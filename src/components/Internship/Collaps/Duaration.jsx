import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { IconButton } from "@mui/material";
import Collapse from "@mui/material/Collapse";
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

const Duaration = () => {
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
                    <p className="mt-3">Internship duration</p>
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
                <div className="">
                    <p>Shorter the duration, more the applications</p>
                </div>

                <div className="collapse_check_item d-flex justify-content-center align-items-center">
                    <p className="mt-3">Choose duration</p>
                    <ExpandMore
                        expand={expanded2}
                        onClick={handleExpandClick2}
                        aria-expanded={expanded2}
                        aria-label="show more"
                    >
                        <ExpandMoreIcon style={{ color: "#000" }} />
                    </ExpandMore>
                    <Collapse className="" in={expanded2} timeout="auto" unmountOnExit>
                    </Collapse>
                </div>
                
                <div className="collapse_check_item d-flex justify-content-center align-items-center mt-3">
                    <p className="mt-3">Choose months</p>
                    <ExpandMore
                        expand={expanded2}
                        onClick={handleExpandClick2}
                        aria-expanded={expanded2}
                        aria-label="show more"
                    >
                        <ExpandMoreIcon style={{ color: "#000" }} />
                    </ExpandMore>
                    <Collapse className="" in={expanded2} timeout="auto" unmountOnExit>
                    </Collapse>
                </div>



                {/* 
                <ExpandMore
                    expand={expanded2}
                    onClick={handleExpandClick2}
                    aria-expanded={expanded2}
                    aria-label="show more"
                >
                    <ExpandMoreIcon style={{ color: "#fff" }} />
                </ExpandMore> */}

            </Collapse>
        </div>
    );
};

export default Duaration;
