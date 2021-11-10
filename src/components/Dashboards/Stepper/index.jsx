import * as React from "react";
import Box from "@mui/material/Box";
import { Grid, Typography, Button } from "@mui/material";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
// import Collage_img from "${process.env.PUBLIC_URL}/img/college_details.png";
// import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import { makeStyles } from "@mui/styles";
// import { borderRadius, fontSize, height, width } from "@mui/system";
// import CustomizedSteppers from './newOne';

const steps = ["Filling", "Application Reveiws", "Tusion Fee", "Viza"];

export default function TopStepper() {
  const classes = useStyles();

  return (
      <Box
        sx={{
          boxShadow: 3,
          backgroundColor: "#fff",
          padding: "10px 0px",
          borderRadius: "10px",
          width: "100%",
          mt: 3,
        }}
      >
        <Box sx={{ width: "85%", margin: "auto", lebalColor: "orange", mb: 2 , }}>
          <Stepper activeStep={2} alternativeLabel>
            {steps.map((label) => (
              <Step key={label}>
                
                <StepLabel>{label}</StepLabel>
                 
              </Step>
            ))}
          </Stepper>
        </Box>
        <Grid sx={12} container>
          <Grid item xs={2}>
          <img src={`${process.env.PUBLIC_URL}/img/college.png`} alt='College' />
          </Grid>
          <Grid item xs={10} sx={{ pl: 1, position: "relative" }}>
            <Typography
              sx={{ ml: 1, fontWeight: "bold", fontSize: "16px", mt: 1 }}
            >
              The Collage of saint Rose
            </Typography>
            <Typography sx={{ ml: 1, fontSize: "14px" }}>
              Computer Information System
            </Typography>
            
            {/* <hr  color: '#dbedfa',  backgroundColor:"#fff" }} /> */}
            {/* <Divider style={{ maxWidth: "70%", marginRight: "25%", ml: 1 }} /> */}
            <Grid xs={12} sx={{ borderTop:'1px solid #EBF2FF', width:"80%"}}>
              <Typography sx={{ mt: 1, fontSize: "16px", fontWeight: "500" }}>
                May
              </Typography>
            </Grid>
            <Grid xs={12} sx={{ display: "flex" ,mt:0.5}}>
            <Button variant="contained" sx={{ padding: "0px", borderRadius: 3, fontWeight: "100", fontSize: "10px",pl:1,pr:1,height:"20px", textTransform: "none",backgroundColor:"#ff8407" }}> Yet To Conform</Button>

              <div className={classes.containerPer}>
                <div className={classes.percentage} width="50%">
                  75%
                </div>
              </div>
              <Typography
                sx={{
                  color: "#000",
                  fontWeight: "800",
                  fontSize: "16px",
                  ml: 2,
                  display:"flex"
                }}
              >
                $2500<Box sx={{ mt:0.3, ml:1 }}> <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.99328 10.5308V7.58478" stroke="#1B6CFC" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7.99327 5.46956H7.99994" stroke="#1B6CFC" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.8897 1.8335H5.11041C3.09641 1.8335 1.83374 3.2595 1.83374 5.2775V10.7228C1.83374 12.7408 3.09041 14.1668 5.11041 14.1668H10.8891C12.9097 14.1668 14.1671 12.7408 14.1671 10.7228V5.2775C14.1671 3.2595 12.9097 1.8335 10.8897 1.8335Z" stroke="#1B6CFC" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg></Box>

              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Box>
  );
}

const useStyles = makeStyles(() => ({
  percentage: {
    width: "55%",
    backgroundColor: "#fc5602",
    borderRadius: "20px",
    paddingLeft: "20px",
    color: "#fff",
    height: "18px",
    fontSize: "14px",
    paddingTop: "2px",
  },
  containerPer: {
    backgroundColor: "#d1e9f9",
    borderRadius: "20px",
    width: "30%",
    height: "20px",
    marginLeft: "10px",
  },
  conforBtn:{
    textTransform: "none",
    backgroundColor: "#1b6cfc",
    color: "#fff",
    borderRadius: "20px",
    fontSize: "12px",
    fontWeight: "100",
    border:"none",
    float: "right",
    padding:"0px 5px",
    height:"20px",
  }
}));
