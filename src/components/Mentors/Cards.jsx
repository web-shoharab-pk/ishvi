import { Typography, Grid } from '@mui/material'
import React from 'react'
import SecondCard from './ScondCard'
import { FcGenericSortingDesc } from "react-icons/fc"
import "./card.css"


const MentorCard = () => {
    // const classes = useStyles()
    return (
        <>
            <Grid xs={11} sx={{ margin: "auto" }}>
                <Grid sx={{ display: "flex", mt: 2 }}>
                    <Typography
                        sx={{
                            m: 2,
                            color: "#000",
                            fontWeight: "600",
                            fontSize: "14px",
                            my: 1,
                            textAlign: "left",
                            width: "100%",
                        }}
                    >
                        Top Mentors for you
                    </Typography>
                    <div className="shorting_section">
                        <p><FcGenericSortingDesc /></p>
                        <p style={{marginLeft:"10px"}}>Short</p>
                    </div>
                </Grid>
                <SecondCard />
            </Grid>
        </>
    )
}
export default MentorCard

