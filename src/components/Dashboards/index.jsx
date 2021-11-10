import React from "react";
import BottomNav from "../Common/BottomNav";
import TopStepper from "./Stepper";
import {Grid, Typography, Button} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import University from "./University";
import {makeStyles} from "@mui/styles";
import Dashform from "./Dashfor";
import IconsPage from "./IconsPage";
import CardsOne from "./Cards/Cards";
import CountryCard from "./Cards/CuntrysCard";
import Birthday from "./Cards/Birthday";
import GreCard from "./Cards/Gre";
import Step from "./Sliders/Slider1";

const DashBoard = () => {
    const classes = useStyles();

    return (
        <Grid
            xs={12}
            sx={{
            margin: "0px",
            padding: "0px",
                backgroundColor: "#FAFAFA"
        }}>
          
            <Step />
            <Grid
                xs={12}
                sx={{
                display: "flex",
                justifyContent: "space-between"
            }}>
                <Typography
                    sx={{
                    color: "#000",
                    fontSize: "18px",
                    fontWeight: "700",
                    marginTop: "20px"
                }}>
                    Application Status
                    <span style={{
                        color: "#1b6cfc"
                    }}>
                        1</span>{" "}
                </Typography>
                {/* <Button variant="contained" sx={{padding:"4px 12px", itemAlign:"center"}}>Yet To Conform <ExpandMoreIcon /></Button> */}
                <Button
                    variant="contained"
                    sx={{
                    padding: "0px",
                    borderRadius: 3,
                    mt: 2.5,
                    fontWeight: "100",
                    fontSize: "14px",
                    pl: 1,
                    pr: 1,
                    textTransform: "none"
                }}>
                    Yet To Conform
                    <ExpandMoreIcon/></Button>
            </Grid>
            <Grid xs={12}>
                <TopStepper/>
                <TopStepper/>
                <TopStepper/>
            </Grid>
            <Grid
                xs={12}
                sx={{
                display: "flex",
                justifyContent: "space-between"
            }}>
                <Typography
                    sx={{
                    color: "#000",
                    fontSize: "18px",
                    fontWeight: "700",
                    marginTop: "20px"
                }}>
                    Matching Universities
                    <span style={{
                        color: "#1b6cfc"
                    }}>
                        6</span>{" "}
                </Typography>
                <button>
                    <Typography
                        sx={{
                        color: "#000",
                        fontSize: "16px",
                        fontWeight: "600",
                        marginTop: "20px"
                    }}>
                        See all
                    </Typography>
                </button>
            </Grid>
            <University/>
            <University/>
            <Grid
                xs={12}
                sx={{
                display: "flex",
                justifyContent: "space-between"
            }}>
                <Typography
                    sx={{
                    color: "#000",
                    fontSize: "18px",
                    fontWeight: "700",
                    marginTop: "20px"
                }}>
                    Favourite Universities
                    <span style={{
                        color: "#1b6cfc"
                    }}>
                        9</span>{" "}
                </Typography>
                <button>
                    <Typography
                        sx={{
                        color: "#000",
                        fontSize: "16px",
                        fontWeight: "450",
                        marginTop: "20px"
                    }}>
                        See all
                    </Typography>
                </button>
            </Grid>
            <University/>
            <University/>
            <Typography
                sx={{
                color: "#000",
                fontSize: "18px",
                fontWeight: "700",
                mt: 3
            }}>
                Evaluate Profile
            </Typography>
            <Typography
                sx={{
                fontSize: "16px",
                fontWeight: "500",
                marginTop: "20px",
                color: "#000"
            }}>
                Question 1/3
            </Typography>
            <div className={classes.containerPer}>
                <div className={classes.percentage} width="100%"></div>
            </div>
            <Dashform/>
            <Typography
                sx={{
                color: "#000",
                fontSize: "18px",
                fontWeight: "700",
                mt: 3,
                ml: 1
            }}>
                All Search's
            </Typography>
            <IconsPage/>
            <Grid
                xs={12}
                sx={{
                display: "flex",
                justifyContent: "space-between",
                mt: 1
            }}>
                <Typography
                    sx={{
                    color: "#000",
                    fontSize: "18px",
                    fontWeight: "700",
                    marginTop: "20px"
                }}>
                    Favourite Universities
                </Typography>
                <button>
                    <Typography
                        sx={{
                        color: "#000",
                        fontSize: "16px",
                        fontWeight: "450",
                        marginTop: "20px"
                    }}>
                        See all
                    </Typography>
                </button>
            </Grid>
            <CardsOne/>
            <Grid
                xs={12}
                sx={{
                display: "flex",
                justifyContent: "space-between",
                mt: 1
            }}>
                <Typography
                    sx={{
                    color: "#000",
                    fontSize: "18px",
                    fontWeight: "700",
                    marginTop: "20px"
                }}>
                    Related Programs
                </Typography>
                <a href="#!">
                    <Typography
                        sx={{
                        color: "#000",
                        fontSize: "16px",
                        fontWeight: "450",
                        marginTop: "20px"
                    }}>
                        See all
                    </Typography>
                </a>
            </Grid>
            <CountryCard/>
            <Grid
                xs={12}
                sx={{
                display: "flex",
                justifyContent: "space-between",
                mt: 1
            }}>
                <Typography
                    sx={{
                    color: "#000",
                    fontSize: "18px",
                    fontWeight: "700",
                    marginTop: "20px"
                }}>
                    Papuler Events
                </Typography>
                <a href="#!">
                    <Typography
                        sx={{
                        color: "#000",
                        fontSize: "16px",
                        fontWeight: "450",
                        marginTop: "20px"
                    }}>
                        See all
                    </Typography>
                </a>
            </Grid>
            <Birthday/>
            <Typography
                sx={{
                color: "#000",
                fontSize: "18px",
                fontWeight: "700",
                mt: 4,
                ml: 1
            }}>
                Search Universities
            </Typography>
            <GreCard/>
            <BottomNav/>

        </Grid>
    );
};

export default DashBoard;

const useStyles = makeStyles(() => ({
    percentage: {
        width: "35%",
        backgroundColor: "#1b6cfc",
        borderRadius: "20px",
        paddingLeft: "20px",
        color: "#fff",
        height: "18px",
        fontSize: "14px",
        paddingTop: "2px"
    },
    containerPer: {
        backgroundColor: "#d1e9f9",
        borderRadius: "20px",
        width: "95%",
        height: "20px",
        marginLeft: "10px",
        marginTop: "10px"
    },
    conforBtn: {
        textTransform: "none",
        backgroundColor: "#1b6cfc",
        color: "#fff",
        padding: "0px 10px",
        borderRadius: "20px",
        fontSize: "12px",
        fontWeight: "100",
        height: "auto",
        border: "none",
        marginTop: "20px",
        float: "right"
    }
}));
