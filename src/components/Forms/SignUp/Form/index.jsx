import React from 'react'
import { Grid , Typography ,Button } from '@mui/material'
import { makeStyles } from "@mui/styles";
import {Link} from "react-router-dom";
// import { fontWeight } from '@mui/system';



const SignInForm = () =>{
   const classes = useStyles()
    return(

        <>
        <Grid xs={12}>

         <Typography
          sx={{
            color: "#082E40",
            fontWeight: "bold",
            fontSize: "16px",
           
            margin:"16px 0"

          }}
        >
          YOUR NAME
        </Typography>
        <Grid container sx={{ justifyContent: "center" }}>
        <Grid
          item
          xs={12}
          sx={{
            backgroundColor:"#fff",
            display: "flex",
            justifyContent: "center",
            textAlign: "start",
            borderRadius: "30px",
            border:"1px solid #EBF2FF",
            boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.04), 0px 2px 6px rgba(0, 0, 0, 0.04), 0px 0px 1px rgba(0, 0, 0, 0.04)",
            padding: "10px",
          }}
        >
          <svg width="17" height="22" viewBox="0 0 17 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<ellipse cx="8.57881" cy="6.27803" rx="4.77803" ry="4.77803" stroke="#1A1A1A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M1.00002 17.7014C0.998732 17.3655 1.07385 17.0338 1.2197 16.7312C1.67736 15.8158 2.96798 15.3307 4.03892 15.111C4.81128 14.9462 5.59431 14.8361 6.38217 14.7815C7.84084 14.6534 9.30794 14.6534 10.7666 14.7815C11.5544 14.8367 12.3374 14.9468 13.1099 15.111C14.1808 15.3307 15.4714 15.7701 15.9291 16.7312C16.2224 17.348 16.2224 18.064 15.9291 18.6808C15.4714 19.6419 14.1808 20.0813 13.1099 20.2918C12.3384 20.4635 11.5551 20.5767 10.7666 20.6305C9.57937 20.7311 8.38659 20.7495 7.19681 20.6854C6.92221 20.6854 6.65677 20.6854 6.38217 20.6305C5.59663 20.5773 4.81632 20.4641 4.04807 20.2918C2.96798 20.0813 1.68652 19.6419 1.2197 18.6808C1.0746 18.3747 0.999552 18.0402 1.00002 17.7014Z" stroke="#1A1A1A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

          <input
            type="name"
            className={classes.input}
            autoFocus
            placeholder="Name"
          />
        </Grid>
      </Grid>

        <Typography
          sx={{
            color: "#082E40",
            fontWeight: "bold",
            fontSize: "16px",
            margin:"16px 0"

          }}
        >
          EMAIL
        </Typography>
        <Grid container sx={{ justifyContent: "center" }}>
        <Grid
          item
          xs={12}
          sx={{
            backgroundColor:"#fff",
            display: "flex",
            justifyContent: "center",
            textAlign: "start",
            borderRadius: "30px",
            border:"1px solid #EBF2FF",
            boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.04), 0px 2px 6px rgba(0, 0, 0, 0.04), 0px 0px 1px rgba(0, 0, 0, 0.04)",
            padding: "10px",
          }}
        >
          <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.2686 7.06116L12.0031 10.4954C11.1959 11.1283 10.0644 11.1283 9.25714 10.4954L4.95508 7.06116" stroke="#1A1A1A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.88787 1.5H15.3158C16.6752 1.51525 17.969 2.08993 18.896 3.0902C19.823 4.09048 20.3022 5.42903 20.222 6.79412V13.322C20.3022 14.6871 19.823 16.0256 18.896 17.0259C17.969 18.0262 16.6752 18.6009 15.3158 18.6161H5.88787C2.96796 18.6161 1 16.2407 1 13.322V6.79412C1 3.87545 2.96796 1.5 5.88787 1.5Z" stroke="#1A1A1A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>


          <input
            type="email"
            className={classes.input}
            autoFocus
            placeholder="Email@gmail.com"
          />
        </Grid>
      </Grid>
        <Typography
          sx={{
            color: "#082E40",
            fontWeight: "bold",
            fontSize: "16px",
           
            margin:"16px 0"

          }}
        >
          MOBILE NUMBER
        </Typography>
        <Grid container sx={{ justifyContent: "center" }}>
        <Grid
          item
          xs={12}
          sx={{
            backgroundColor:"#fff",
            display: "flex",
            justifyContent: "center",
            textAlign: "start",
            borderRadius: "30px",
            border:"1px solid #EBF2FF",
            boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.04), 0px 2px 6px rgba(0, 0, 0, 0.04), 0px 0px 1px rgba(0, 0, 0, 0.04)",
            padding: "10px",
          }}
        >
          <img
                src={`${process.env.PUBLIC_URL}/img/SignUp/india 1.png`}
             alt='India'
             style={{ marginTop:"2px" , marginLeft: "10px"}}
              />
                <Typography sx={{ fontSize:"14px" , fontWeight:"600",mt:0.5,ml:0.5 }} >+91</Typography>
                <svg style={{ marginTop:"12px",marginLeft:"4px"}} width="14" height="7" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15 1.5L8 8.5L1 1.5" stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

          <input
            type="number"
            className={classes.input}
            autoFocus
            placeholder="Mobile Number"
          />
        </Grid>
      </Grid>
       
        <Grid xs={12} sx={{ display:"flex" , margin:"20px 0",}}>
        <input type="checkbox"
//   {...label}
//   defaultChecked
  sx={{ height:"28px", background:"orange",border:" 1px solid #DCE8FF" } }
/>
          <Typography
            sx={{ color:"#666666", textAlign: "left", fontSize: "16px", lineHeight:"20px" }}
          >
            By creating your account you agree with to our <span className={classes.Terms}>Terms</span> and <span className={classes.Terms}>Conditions</span> 
          </Typography>
        </Grid>
        <Grid xs={12} sx={{ margin: "auto",textAlign:"center" }}>
          <Button
          variant="contained"
            sx={{
              fontSize: "14px",
              fontWaight: "600",
              padding:" 8px  0",
              color: "#fff",
              backgroundColor: "#1B6CFC",
              borderRadius: "100px",
              width: "60%",
            }}
          >
            Sign UP
          </Button>

          <Typography
            sx={{ fontSize:"16",lineHeight:"20px", color: "#000", textAlign: "center", mb:5, marginTop:2 }}
          >
            ALREADY HAVE AN ACCOUNT? -
              <Link to={'/'}><strong className={classes.Sign}>SIGN IN</strong></Link>
          </Typography>
        </Grid>
        </Grid>
        </>

    )
}
export default SignInForm

const useStyles = makeStyles(() => ({

    Sign: {
      color: "#1b6cfc",
      fontSize: "14px",
    },
    Terms:{
        color:"#1b6cfc",
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
      //  boxShadow : '2px 2px 10px #DCDCDC','
    },
}))