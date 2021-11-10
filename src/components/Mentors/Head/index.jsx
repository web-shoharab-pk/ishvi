import { Grid } from "@mui/material";
import React from "react"
import { RiSearchLine } from "react-icons/ri"
import "./Head.css"

const HeadMentor = () => {
    return (
        <Grid>
            <Grid sx={{  display: "flex", justifyContent: "space-between", width: "100%", alignItems:"center" }} >
                <main className="input_container">
                    <RiSearchLine style={{ fontSize: '30px' }} />
                    <input autoFocus placeholder='Search mentors...' />
                </main>
                <div className="arrow_icon">
                    <img src={`${process.env.PUBLIC_URL}/img/Mentor/Filter.png`} alt="" />
                </div>
            </Grid>
        </Grid>
    )
}
export default HeadMentor;
