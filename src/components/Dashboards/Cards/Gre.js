import React from "react";
import { Grid, Typography,Button } from "@mui/material";
import { makeStyles } from "@mui/styles";


const Gre = () => {
  const classes = useStyles()
  return (
    /* university.jfif issue */
    <Grid
      sx={{
        width: "90%",
        mt: 2,
        justifyContent: "space-around",
        marginBottom: "100px",
        backgroundImage: `url(${process.env.PUBLIC_URL}/img/DashBoard/university.jfif)`,
        backgroundPosition:"center",
        backgroundSize:"cover",
        borderRadius: "15px",
        
      }}
    >

      <div className={classes.CardDesign}>
      
        <Typography sx={{ fontWeight:"700", fontSize:"16px", color:"#fff"}}>GRE Waiver</Typography>
        <Typography sx={{mt:1, color:"white" , fontSize:"14px", width:"230px"}}>Lorem lpsumlpsum is simply dummy text of the printing and industry.</Typography>
        <Button variant="text" disableElevation sx={{ backgroundColor:"#fff",
              mt:2,
              padding:"8px 18px",
              fontWeight:"600",
              color:"#1b6cfc",
              border:" 1px solid #DCE8FF",
              boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.04), 0px 2px 6px rgba(0, 0, 0, 0.04), 0px 0px 1px rgba(0, 0, 0, 0.04)",
              borderRadius: "30px"
               }}>More</Button>
        </div>
    </Grid>
  );
};
export default Gre;

const useStyles = makeStyles(() => ({
  CardDesign:{
    // background: linear-gradient("269.38deg, rgba(255, 255, 255, 0) 29.03%, rgba(43, 43, 43, 0.65) 69.97%"),
    background:"linear-gradient(269.38deg, rgba(255, 255, 255, 0) 29.03%, rgba(43, 43, 43, 0.65) 69.97%)",
    borderRadius:"15px",
    padding:"20px"
  }
}))