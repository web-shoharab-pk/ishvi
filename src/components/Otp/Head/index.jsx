import React from "react";
import { makeStyles } from "@mui/styles";

import { Grid } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
const OtpHead = () => {
  const classes = useStyles();

  return (
    <Grid xs={11} sx={{ margin: "auto" }}>
      <ArrowBackIcon sx={{ mt: 5 }} />
      <div className={classes.Heading}>
        <h2 className={classes.wel}>Verify Account!</h2>
        <p className={classes.Hcontent}>
          Enter 4-digit code we have send to at
          <br />
          <strong className={classes.email}><u>Email@gmail.com</u></strong>
        </p>
      </div>
    </Grid>
  );
};
export default OtpHead;

const useStyles = makeStyles(() => ({
  email: {
    fontSize:"14px",
    color:"#1b6cfc",
  },
  Sign: {
    color: "#1b6cfc",
    fontSize: "14px",
  },
  Heading: {
    textAlign: "center",
    paddingTop: "80px",
    margin: "auto",
    padding: "0%",
  },
  wel: {
    fontSize: "20px",
    fontFamily: "font-family: 'Montserrat', sans-serif;",
    fontWeight: 700,
  },
  Hcontent: {
    fontSize: "14px",
    color: "gray",
    textAlign: "center",
    marginBottom: "30px",
  },
}));
