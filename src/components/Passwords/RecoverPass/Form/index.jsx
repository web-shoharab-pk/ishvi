import React from "react";
import { Grid, Typography, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";

const FormRecover = () => {
  const classes = useStyles();
  return (
    <>
    <Grid xs={11} sx={{ margin: "auto", }}>
      <Typography
        sx={{
          m: 2,

          color: "#082e40",
          fontWeight: "600",
          fontSize: "14px",
          my: 1,
        }}
      >
        New Password
      </Typography>
        <Grid item xs={12} sx={{ margin: "auto" }}>
          <div>
            <main className={classes.inputContainer}>
              <input
                type="password"
                className={classes.input}
                autoFocus
                value="Email@gmail.com"
              />
            </main>
          </div>
        </Grid>
        <Typography
        sx={{
          m: 2,

          color: "#082e40",
          fontWeight: "600",
          fontSize: "14px",
          my: 1,
        }}
      >
        New Password
      </Typography>
        <Grid item xs={12} sx={{ margin: "auto" }}>
          <div>
            <main className={classes.inputContainer}>
              <input
                type="password"
                className={classes.input}
                autoFocus
                value="Email@gmail.com"
              />
            </main>
          </div>
        </Grid>
        <Grid xs={11} sx={{ margin : "auto" , mb:5}} > 
                     <Button
            sx={{
              fontSize: "14px",
              p: 1,
              color: "#fff",
              backgroundColor: "#1b6cfc",
              my: 5,
              borderRadius: "100px",
              textTransform:"none",
              width: "100%",
            }}
          >
            Change Password
          </Button>
          </Grid>

      </Grid>
    </>
  );
};
export default FormRecover;

const useStyles = makeStyles(() => ({
  inputContainer: {
   display:"flex",
    padding: "5px",
    width: "90%",
    height: "20%",
    margin: "auto",
    border: "1px solid transparent",
    borderRadius: "25px",
    boxShadow: "2px 2px 10px #DCDCDC",
  },
  input: {
    borderColor: "transparent",
    outline: "none",
    marginLeft: "10px",
    fontSize: "20px",
    opacity: 0.7,
    color: "#000",
    letterSpacing: 0.7,
  },
  filterIcon: {
    position: "relative",
    top: 10,
    height: "75px",
    width: "75px",
    //  boxShadow : '2px 2px 10px #DCDCDC','
  },
}));
