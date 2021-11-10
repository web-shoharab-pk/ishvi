import React from "react";
import { Grid, Typography } from "@mui/material";
import "./Card.css";

const CardsOne = () => {
  return (
    <Grid
      sx={{
        borderRadius: 3,
        boxShadow: 3,
        width: "80%",
        margin: "auto",
        mt: 3,
      }}
    >
      <img src={`${process.env.PUBLIC_URL}/img/DashBoard/Trinitylarg.png`} alt='Trinity' width="100%" style={{ borderRadius: "20px" }} />
      <Grid sx={{ ml: 3, pb: 2 }}>
        <Typography
          sx={{ color: "#000", fontSize: "16px", fontWeight: "700", mt: 3 }}
        >
          Trinity Collage Dublin
        </Typography>
        <p className="Reviews"> Reviews 50</p>
      </Grid>
    </Grid>
  );
};
export default CardsOne;
