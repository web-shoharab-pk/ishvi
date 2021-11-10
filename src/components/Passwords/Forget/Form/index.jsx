import React from "react";
import { Grid , Typography , Button   } from "@mui/material";
import { makeStyles } from "@mui/styles";

// import SearchIcon from '@mui/icons-material/Search';

const ForgetForm = () =>{
     const classes = useStyles()
    return(
        <>
        <Typography
          sx={{
            m:2 ,
            
            color: "#082e40",
            fontWeight: "600",
            fontSize: "14px",
            my: 1,
          }}
        >
          Email
        </Typography>
        <Grid container sx={{ justifyContent: "center" }}>
          <Grid
            item
            xs={11}
            sx={{ margin :"auto" }}
          >
           
            <div>
      <main className={classes.inputContainer}>
      <img
                src={`${process.env.PUBLIC_URL}/img/signIcons/Mail.png`}
                style={{ marginTop:"7px"}}
                alt="mail"
              />
           
            <input type="email" className={classes.input} autoFocus  placeholder='Email@gmail.com'/> 
            </main>
      </div>
     
            
          </Grid>
          <Grid xs={11} sx={{margin:"auto", mt:2}}>
          <Button
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
           Send Code
          </Button>
          </Grid>
        </Grid>
        
        </>
    )
}
export default ForgetForm


const useStyles = makeStyles(() => ({
  inputContainer : {
     display : 'flex',
     padding : '12px',
     width : '90%',
     height : "20%",
     margin : "auto",
     border : '1px solid transparent',
     borderRadius : '25px',
     boxShadow : '2px 2px 10px #DCDCDC',
  },
  input : {
     borderColor : 'transparent',
     outline : 'none',
     marginLeft : '10px',
     fontSize : '16px',
     opacity : 0.7,
     letterSpacing : 0.7
  },
  filterIcon : {
      position : 'relative',
      top : 10,
      height : '75px',
      width : '75px',
     //  boxShadow : '2px 2px 10px #DCDCDC','
  }
 }))
