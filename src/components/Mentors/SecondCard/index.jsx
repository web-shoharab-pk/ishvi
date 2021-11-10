import { Grid, Typography } from '@mui/material'
import React from 'react'
import { makeStyles } from "@mui/styles"
import "../Cards/card.css"
import Icons from '../MentorDetails/Icons'

function ScondCard() {
    const classes = useStyles()
    return (
        <div className="mentors_card_section">
            <div className="card_1">
                <Grid xs={12} sx={{ width: "100%", display: "flex", mt: 3 }}>
                    <Grid xs={4.5} sx={{ width: "100%", display: "flex", backgroundAttachment: "fixed" }}>
                        <img src={`${process.env.PUBLIC_URL}/img/Mentor/person.png`} alt='person' className={classes.PreImg} />

                    </Grid>
                    <Grid xs={7.5} sx={{ ml: 1, width: "100%", }}>
                        <img src={`${process.env.PUBLIC_URL}/img/Mentor/heart.png`} alt='heart' className={classes.hearts} />

                        <Typography
                            sx={{

                                color: "#000",
                                fontWeight: "600",
                                fontSize: "16px",
                                textAlign: "left",
                                width: "100%",
                            }}
                        >
                            Noor
                        </Typography>

                        <img src={`${process.env.PUBLIC_URL}/img/Mentor/start.png`} alt='stars' className={classes.star} />
                        <Typography
                            sx={{
                                color: "#000",
                                fontSize: "14px",
                                ml: 1
                            }}
                        >
                            10 Reviews
                        </Typography>
                        <Grid xs={12} sx={{ width: "100%", display: "flex", }}>
                            <Grid xs={6} sx={{ mr: 0.5, borderRight: "1px solid gray" }}>

                                <Typography
                                    sx={{

                                        color: "gray",
                                        fontSize: "14px",
                                    }}
                                >
                                    EXperience
                                </Typography>
                                <Typography
                                    sx={{

                                        color: "#000",
                                        fontSize: "16px",
                                    }}
                                >
                                    5 Years
                                </Typography>
                                <Typography
                                    sx={{
                                        marginTop: "8%",
                                        color: "gray",
                                        fontSize: "14px",
                                    }}
                                >
                                    Countires
                                </Typography>
                                <Typography
                                    sx={{

                                        color: "#000",
                                        fontSize: "16px",
                                    }}
                                >
                                    Germany
                                </Typography>
                            </Grid>

                            <Grid xs={6} >
                                <Typography
                                    sx={{

                                        color: "gray",
                                        fontSize: "14px",
                                    }}
                                >
                                    Student
                                </Typography>
                                <Typography
                                    sx={{

                                        color: "#000",
                                        fontSize: "16px",
                                    }}
                                >
                                    2
                                </Typography>
                                <Typography
                                    sx={{

                                        marginTop: "8%",
                                        color: "gray",
                                        fontSize: "14px",
                                    }}
                                >
                                    Location
                                </Typography>
                                <Typography
                                    sx={{

                                        color: "#000",
                                        fontSize: "16px",
                                    }}
                                >
                                    Bangalore
                                </Typography>
                            </Grid>
                        </Grid>

                        <Icons />
                    </Grid>
                </Grid>

            </div>


            <div className="card_2 mt-5 mb-5">

                <Grid xs={12} sx={{ width: "100%", display: "flex", mt: 3 }}>
                    <Grid xs={4.5} sx={{ width: "100%", display: "flex", backgroundAttachment: "fixed" }}>
                        <img src={`${process.env.PUBLIC_URL}/img/Mentor/person.png`} alt='person' className={classes.PreImg} />
                    </Grid>
                    <Grid xs={7.5} sx={{ ml: 1, width: "100%", }}>
                        <img src={`${process.env.PUBLIC_URL}/img/Mentor/heart.png`} alt='heart' className={classes.hearts} />

                        <Typography
                            sx={{

                                color: "#000",
                                fontWeight: "600",
                                fontSize: "16px",
                                textAlign: "left",
                                width: "100%",
                            }}
                        >
                            Sandeep
                        </Typography>

                        <img src={`${process.env.PUBLIC_URL}/img/Mentor/start.png`} alt='stars' className={classes.star} />
                        <Typography
                            sx={{
                                color: "#000",
                                fontSize: "14px",
                                ml: 1
                            }}
                        >
                            10 Reviews
                        </Typography>
                        <Grid xs={12} sx={{ width: "100%", display: "flex", }}>
                            <Grid xs={6} sx={{ mr: 0.5, borderRight: "1px solid gray" }}>

                                <Typography
                                    sx={{

                                        color: "gray",
                                        fontSize: "14px",
                                    }}
                                >
                                    EXperience
                                </Typography>
                                <Typography
                                    sx={{

                                        color: "#000",
                                        fontSize: "16px",
                                    }}
                                >
                                    5 Years
                                </Typography>
                                <Typography
                                    sx={{
                                        marginTop: "8%",
                                        color: "gray",
                                        fontSize: "14px",
                                    }}
                                >
                                    Countires
                                </Typography>
                                <Typography
                                    sx={{

                                        color: "#000",
                                        fontSize: "16px",
                                    }}
                                >
                                    Germany
                                </Typography>
                            </Grid>

                            <Grid xs={6} >
                                <Typography
                                    sx={{

                                        color: "gray",
                                        fontSize: "14px",
                                    }}
                                >
                                    Student
                                </Typography>
                                <Typography
                                    sx={{

                                        color: "#000",
                                        fontSize: "16px",
                                    }}
                                >
                                    2
                                </Typography>
                                <Typography
                                    sx={{

                                        marginTop: "8%",
                                        color: "gray",
                                        fontSize: "14px",
                                    }}
                                >
                                    Location
                                </Typography>
                                <Typography
                                    sx={{

                                        color: "#000",
                                        fontSize: "16px",
                                    }}
                                >
                                    Bangalore
                                </Typography>
                            </Grid>
                        </Grid>
                        <Icons />
                    </Grid>
                </Grid>
            </div>






        </div>
    )
}

export default ScondCard


const useStyles = makeStyles(() => ({
    PreImg: {
        display: "flex",
        width: "100%"
    },
    star: {
        height: "15px",
        marginTop: "2px",
        width: "15px",
        float: "left",
    },
    Icons: {
        padding: "5px",
        color: "#1b6cfc",
        borderRadius: "100px",
        boxShadow: '2px 2px 10px #DCDCDC',
        justifyContent: "space-around",
    },
    hearts: {
        float: "right",
        marginRight: "10px",
        marginBottom: "40px"
    },
    Divs: {
        display: "flex"
    }

}))