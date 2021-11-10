import { Grid } from "@mui/material";
import React from "react"
import { RiSearchLine } from "react-icons/ri"
import "./Head.css"
import Filter from "../../static/img/Mentor/Filter.png"

const HeadMentor = () => {
    return (
        <Grid>
            <Grid sx={{  display: "flex", justifyContent: "space-between", width: "100%", alignItems:"center" }} >
                <main style={{backgroundColor: '#FFF'}} className="input_container">
                    <RiSearchLine style={{ fontSize: '30px' }} />
                    <input autoFocus placeholder='Search mentors...' />
                </main>
                <div className="arrow_icon">
                    <img src={Filter} alt="" />
                </div>
            </Grid>
        </Grid>
    )
}
export default HeadMentor;
