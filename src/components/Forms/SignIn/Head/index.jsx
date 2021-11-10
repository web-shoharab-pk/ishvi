import React from 'react'
import { makeStyles } from "@mui/styles";

import { Grid } from '@mui/material';

const Head = () => {
  const classes = useStyles();

    return(
        <Grid sx={{ margin:"auto"}}>
        <div className={classes.Heading}>
          {/*<h2 className={classes.wel}>Welcome Back!</h2>*/}
          <p className={classes.Hcontent}>Sign In to Continue</p>
        </div>
        </Grid>
    )
}
export default Head;


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
      width: "100%",
      textAlign: "center",
      paddingTop: "30px",
      // background:"blue",
      margin: "0%",
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
      marginBottom:"30px"
    },
  }));