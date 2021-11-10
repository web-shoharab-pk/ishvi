import { Grid, Typography } from "@mui/material";
import React from "react";
import RoomOutlinedIcon from "@mui/icons-material/RoomOutlined";

const University = () => {
  return (
      <Grid
        xs={12}
        sx={{ justifyContent: "space-between", mt: 3, display: "flex" }}
      >
        <Grid xs={3} sx={{ boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.04), 0px 2px 6px rgba(0, 0, 0, 0.04), 0px 0px 1px rgba(0, 0, 0, 0.04);",
              borderRadius: "15px"}}>
          <img
          src={`${process.env.PUBLIC_URL}/img/DashBoard/Trinity.png`}
            alt="trinity"
            style={{
              
              backgroundColor: "#fff",
              padding: "7px",
              height: "80px",
            }}
          />
        </Grid>
        <Grid xs={6} sx={{ paddingLeft: "4%" }}>
          <Typography sx={{ fontWeight: "bold", fontSize: "14px", mt: 1 }}>
            Trinity Collage Dublin
          </Typography>
          <Typography sx={{ fontSize: "14px", mt: 1 }}>
            <RoomOutlinedIcon sx={{ fontSize: "20px" }} /> Dublin City Ireland
          </Typography>
          <Typography sx={{ fontSize: "14px", mt: 1 }}>
          <img src={`${process.env.PUBLIC_URL}/img/Mentor/start.png`} alt='star' /> 50 Reviews
          </Typography>
        </Grid>
        <Grid xs={3} sx={{boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.04), 0px 2px 6px rgba(0, 0, 0, 0.04), 0px 0px 1px rgba(0, 0, 0, 0.04);",
              borderRadius: "15px", }}>
          <img
            src={`${process.env.PUBLIC_URL}/img/DashBoard/Clark.png`}
            alt="trinity"
            style={{
              
              backgroundColor: "#fff",
              padding: "7px",
              height: "80px",
            }}
          />
        </Grid>
      </Grid>
  );
};
export default University;
