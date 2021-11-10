import React from "react";
import { Grid, Typography } from "@mui/material";
import RoomRoundedIcon from "@mui/icons-material/RoomRounded";
import { makeStyles } from "@mui/styles";

const Birthday = () => {
  const classes = useStyles();
  return (
    <Grid
      sx={{
        borderRadius: 4,
        boxShadow: 3,
        width: "90%",
        margin: "auto",
        mt: 3,
        p: 2,
      }}
    >
      <img src={`${process.env.PUBLIC_URL}/img/DashBoard/birthday.png`} alt='BurthdayImage' width="100%" style={{ borderRadius: "20px" }} />
      <Grid xs={12} sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography
          sx={{
            color: "#000",
            fontSize: "16px",
            fontWeight: "700",
            marginTop: "20px",
          }}
        >
          Birthday Celebration
        </Typography>
        <button variant="contained" className={classes.CeleBtn}>Sep 10</button>
      </Grid>
      <Grid sx={{ display: "flex", justifyContent: "space-between", mt: 1 }}>
        <Grid xs={12} sx={{ display: "flex" }}>
          <RoomRoundedIcon sx={{ color: "gray" }} />
          <Typography
            sx={{ color: "gray", fontSize: "14px", ml: 0.5, mt: 0.3 }}
          >
            1901 Thornridge Cir.Shiloh
          </Typography>
        </Grid>
        <Typography sx={{ color: "gray", fontSize: "14px", mt: 0.3 }}>
          2km
        </Typography>
      </Grid>
      <Grid xs={12} sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography
          sx={{
            color: "#000",
            fontSize: "16px",
            fontWeight: "700",
            marginTop: "20px",
          }}
        >
          28 Joined
        </Typography>
       <Grid xs={3 } >
          <img src={`${process.env.PUBLIC_URL}/img/DashBoard/Celebrations/Ellipse 3.png`}  alt='' className={classes.Favator} />
          <img src={`${process.env.PUBLIC_URL}/img/DashBoard/Celebrations/Ellipse 4.png`} alt='' className={classes.Savator} />
          <img src={`${process.env.PUBLIC_URL}/img/DashBoard/Celebrations/Ellipse 5.png`} alt='' className={classes.Tavator} />
          <img src={`${process.env.PUBLIC_URL}/img/DashBoard/Celebrations/Group 12.png`}  alt=''  className={classes.Gavator} />
       </Grid>
      </Grid>
    </Grid>
  );
};
export default Birthday;

const useStyles = makeStyles(() => ({
  texts: {
    color: "gray",
    right: "10px",
    display: "flex",
  },
  CeleBtn:{
    textTransform: "none",
    backgroundColor: "#c5d8fa",
    color: "#1b6cfc",
    padding: "0px 10px",
    borderRadius: "20px",
    border:"none",
    fontSize: "16px",
    fontWeight: "100",
    height: "auto",
    marginTop: "20px",
    float: "right",
  },
  Favator:{
    position:"absolute",
    right:"113px",
    // marginTop:"10px"
  },
  Savator:{
    position:"absolute",
    right:"100px",
    marginTop:"7px"

  },
  Tavator:{
    position:"absolute",
    right:"75px",
    marginTop:"7px"

    },
  Gavator:{
    position:"absolute",
    right:"50px",
    marginTop:"7px"

  },
}));
