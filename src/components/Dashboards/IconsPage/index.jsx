import React from "react";
import { Grid, Typography, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";


const IconsPage = () => {
  // eslint-disable-next-line
  const classes = useStyles();

  return (
    <>
      <Grid
        sx={{
          display: "flex",
          justifyContent: "space-around",
          textAlign: "center",
          // height: "100%",
          mt: 3,
        }}
      >
        <Grid
          sx={{
            boxShadow: 3,
            display: "flex",
            justifyContent: "space-around",
            padding: "25px",
            borderRadius: "100px",
          }}
        >
          <button>
            <img src={`${process.env.PUBLIC_URL}/img/DashBoard/University.png`} alt="web search" width="80%" style={{ color:"blue"}} />
          </button>
          <Button variant="text" disableElevation sx={{ backgroundColor:"#fff",
              position: "absolute",
              marginTop: "75px",
              padding:"6px 16px",
              fontWeight:"600",
              color:"#1b6cfc",
              border:" 1px solid #DCE8FF",
              boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.04), 0px 2px 6px rgba(0, 0, 0, 0.04), 0px 0px 1px rgba(0, 0, 0, 0.04)",
              borderRadius: "30px"
               }}>More</Button>

        </Grid>

        <Grid
          sx={{
            boxShadow: 3,
            display: "flex",
            justifyContent: "space-around",
            padding: "25px",
            borderRadius: "100px",
          }}
        >
          <button>
            <img src={`${process.env.PUBLIC_URL}/img/DashBoard/scholarship.png`} alt="web search" width="80%" />
          </button>
          <Button variant="text" disableElevation sx={{ backgroundColor:"#fff",
              position: "absolute",
              marginTop: "75px",
              padding:"6px 16px",
              fontWeight:"600",
              color:"#1b6cfc",
              border:" 1px solid #DCE8FF",
              boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.04), 0px 2px 6px rgba(0, 0, 0, 0.04), 0px 0px 1px rgba(0, 0, 0, 0.04)",
              borderRadius: "30px"
               }}>More</Button>
        </Grid>
      </Grid>
      <Grid
        sx={{
          fontSize: "16px",
          display: "flex",
          textAlign: "center",
          marginTop: "40px",
          justifyContent: "space-around",
        }}
      >
        <Typography sx={{ fontSize: "14px" }}> Search Program </Typography>
        <Typography sx={{ fontSize: "14px" }}> Search Scholarship </Typography>
      </Grid>
      <Grid
        sx={{
          display: "flex",
          justifyContent: "space-around",
          textAlign: "center",
          // height: "100%",
          mt: 4,
        }}
      >
        <Grid
          sx={{
            boxShadow: 3,
            display: "flex",
            justifyContent: "space-around",
            padding: "25px",
            borderRadius: "100px",
          }}
        >

          <button>
            <img src={`${process.env.PUBLIC_URL}/img/DashBoard/sop.png`} alt="web search" width="80%" />
          </button>
          <Button variant="text" disableElevation sx={{ backgroundColor:"#fff",
              position: "absolute",
              marginTop: "75px",
              padding:"6px 16px",
              fontWeight:"600",
              color:"#1b6cfc",
              border:" 1px solid #DCE8FF",
              boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.04), 0px 2px 6px rgba(0, 0, 0, 0.04), 0px 0px 1px rgba(0, 0, 0, 0.04)",
              borderRadius: "30px"
               }}>More</Button>

        </Grid>
        <Grid
          sx={{
            boxShadow: 3,
            display: "flex",
            justifyContent: "space-around",
            padding: "25px",
            borderRadius: "100px",
          }}
        >

          <button>
            <img src={`${process.env.PUBLIC_URL}/img/DashBoard/web.png`} alt="web search" width="80%" />
          </button>
          <Button variant="text" disableElevation sx={{ backgroundColor:"#fff",
              position: "absolute",
              marginTop: "75px",
              padding:"6px 16px",
              fontWeight:"600",
              color:"#1b6cfc",
              border:" 1px solid #DCE8FF",
              boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.04), 0px 2px 6px rgba(0, 0, 0, 0.04), 0px 0px 1px rgba(0, 0, 0, 0.04)",
              borderRadius: "30px"
               }}>More</Button>

        </Grid>
      </Grid>
      <Grid
        sx={{
          fontSize: "16px",
          display: "flex",
          textAlign: "center",
          marginTop: "40px",
          justifyContent: "space-around",
        }}
      >
        <Typography sx={{ fontSize: "14px" }}> Search Programer </Typography>
        <Typography sx={{ fontSize: "14px" }}> Search SOP </Typography>
      </Grid>
    </>
  );
};

export default IconsPage;



const useStyles = makeStyles(() => ({
 
  Morebtn:{
    borderRadius: "20px",
    boxShadow: "2px 2px 5px gray",
    backgroundColor: "#fff",
    position: "absolute",
    marginTop: "75px",
    padding:"10px 20px",
    border:"none",
    fontWeight:"600",
    color:"#1b6cfc"
  }
}));