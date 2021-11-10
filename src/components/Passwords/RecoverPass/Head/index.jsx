import React from "react";
import { makeStyles } from "@mui/styles";
import { Grid } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const HeadRecover = () => {
  const classes = useStyles();

  return (
    <Grid xs={11} sx={{ margin: "auto" }}>
      <ArrowBackIcon sx={{ mt: 5 }} />
      <div className={classes.Heading}>
        <h2 className={classes.wel}>Forget Password</h2>
        <p className={classes.Hcontent}>
        Your new Password Must be different from previous used passwords
        </p>
      </div>
    </Grid>
  );
};
export default HeadRecover;

const useStyles = makeStyles(() => ({
  container: {
    // background: "orange",
    margin: "0 5px",
  },
  Sign: {
    color: "#1b6cfc",
    fontSize: "14px",
  },
  Heading: {
    textAlign: "center",
    paddingTop: "50px",
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
