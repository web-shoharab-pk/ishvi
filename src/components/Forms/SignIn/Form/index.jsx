import React, {useState} from "react";
import { Grid, Typography, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useHistory } from 'react-router-dom';
// import axios from "axios";

const SignInForm = () => {
    let [values, handleValues] = useState({});
    let history = useHistory();
    const classes = useStyles();
    const handleSubmit=()=>{
          let data= values
          data["operation"]="signin"
            history.push('/dashboard')
          // axios.post('http://erp.bscglobaledu.com/mapi/JsonApi/',data,{'Access-Control-Allow-Origin': '*'})
      }
      const handleChange = (e) => {
          handleValues(prevState => ({...prevState, [e.target.name]: e.target.value}))
      }
  return (
    <form>
      {/*<Typography*/}
      {/*  sx={{*/}
      {/*    m: 2,*/}
      {/*    color: "#082e40",*/}
      {/*    fontWeight: "600",*/}
      {/*    fontSize: "14px",*/}
      {/*    my: 1,*/}
      {/*  }}*/}
      {/*>*/}
      {/*  USER NAME*/}
      {/*</Typography>*/}
      <Grid container sx={{ justifyContent: "center",marginY:3 }}>
        <Grid
          item
          xs={11}
          sx={{
            display: "flex",
            justifyContent: "center",
            textAlign: "start",
            borderRadius: "100px",
            boxShadow: 5,
            padding: "10px",
          }}
        >
          <img 
            src={`${process.env.PUBLIC_URL}/img/signIcons/Mail.png`}
          alt='Mail'
          style={{ marginTop: "2px" }} />

          <input
            type="email"
            name={'email'}
            onChange={handleChange}
            className={classes.input}
            autoFocus
            placeholder="Email@gmail.com"
          />
        </Grid>
      </Grid>

      {/*<Typography*/}
      {/*  sx={{*/}
      {/*    mx: 2,*/}
      {/*    color: "#082e40",*/}
      {/*    fontWeight: "600",*/}
      {/*    fontSize: "14px",*/}
      {/*    my: 1,*/}
      {/*    mt:3,*/}
      {/*  }}*/}
      {/*>*/}
      {/*  PASSWORD*/}
      {/*</Typography>*/}
    
          <Grid container sx={{ justifyContent: "center" }}>
        <Grid
          item
          xs={11}
          sx={{
            display: "flex",
            justifyContent: "center",
            textAlign: "start",
            borderRadius: "100px",
            boxShadow: 5,
            padding: "10px",
          }}
        >
            <img 
            src={`${process.env.PUBLIC_URL}/img/signIcons/lockIcon.png`}
            alt='lockIcon'
             style={{ marginTop: "2px" }} />


          <input
            onChange={handleChange}
            name={'password'}
            type="Password"
            className={classes.input}
            autoFocus
            placeholder="Password"
          />
        </Grid>
      </Grid>
      <Grid xs={12} >
        <Typography
          sx={{ color: "blue", textAlign: "right", fontSize: "15px", m: 1 }}
        >
          Forget Password?
        </Typography>
      </Grid>
      <Grid xs={11} sx={{ margin: "auto" }}>
        <Button
            onClick={handleSubmit}
          sx={{
            fontSize: "14px",
            fontWaight: "600",
            p: 1,
            color: "#fff",
            backgroundColor: "#1b6cfc",
            my: 2,
            borderRadius: "100px",
            width: "100%",
          }}
        >
          Sign In
        </Button>

        <Typography
          sx={{ fontSize: "14px", color: "#000", textAlign: "center" }}
          onClick={()=>history.push('/SignUp')}
        >
          DON'T HAVE AN ACCOUNT? -
          <strong className={classes.Sign}>Sign Up</strong>
        </Typography>
      </Grid>
    </form>
  );
};
export default SignInForm;

const useStyles = makeStyles(() => ({
  Sign: {
    color: "#1b6cfc",
    fontSize: "14px",
  },
  input: {
    borderColor: "transparent",
    outline: "none",
    marginLeft: "10px",
    fontSize: "16px",
    width: "80%",
    display: "flex",
    opacity: 0.7,
    letterSpacing: 0.7,
  },
  filterIcon: {
    position: "relative",
    top: 10,
    height: "75px",
    width: "75px",
  },
}));
