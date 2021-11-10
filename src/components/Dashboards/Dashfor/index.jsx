import React from "react";
import { makeStyles } from "@mui/styles";
import { Grid, Typography } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const Dashfor = () => {
  const classes = useStyles();

  return (
      <Grid
        xs={12}
        sx={{
          p: 3,
          paddingBottom: "80px",
          backgroundColor: "#fff",
          mt: 3,
          pb:2,
          borderRadius: "10px",
          boxShadow: 3,
        }}
      >
        <Typography > Looking for </Typography>
        <FormControl fullWidth sx={{ mt:2}}>
          <InputLabel>Degree</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value=""
            label="Degree"
            onChange="handleChange"
          >
            <MenuItem value={10}>BS</MenuItem>
            <MenuItem value={20}>MS</MenuItem>
            <MenuItem value={30}>Bs</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth sx={{ mt:1.5}}>
          <InputLabel>Country</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value=""
            label="Country"
            onChange="handleChange"
          >
            <MenuItem value={10}>Pakistan</MenuItem>
            <MenuItem value={20}>India</MenuItem>
            <MenuItem value={30}>Uk</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth sx={{ mt:1.5}}>
          <InputLabel>Program</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value=""
            label="Program"
            onChange="handleChange"
          >
            <MenuItem value={10}>Education</MenuItem>
            <MenuItem value={20}>Education</MenuItem>
            <MenuItem value={30}>Education</MenuItem>
          </Select>
        </FormControl>
        <Grid sx={{ display:"flex", justifyContent:"space-between"}}> 
        <Grid xs={5.8}>
        <FormControl fullWidth sx={{ mt:1.5}}>
          <InputLabel>Semester</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value=""
            label="Semester"
            onChange="handleChange"
          >
            <MenuItem value={10}>1st</MenuItem>
            <MenuItem value={20}>2nd</MenuItem>
            <MenuItem value={30}>3rd</MenuItem>
          </Select>
        </FormControl>
        </Grid>
        <Grid xs={5.8}>
        <FormControl fullWidth sx={{ mt:1.5}}>
          <InputLabel>Year</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value=""
            label="Year"
            onChange="handleChange"
          >
            <MenuItem value={10}>2020</MenuItem>
            <MenuItem value={20}>2021</MenuItem>
            <MenuItem value={30}>2022</MenuItem>
          </Select>
        </FormControl>
        <button className={classes.BtnNext}>Next</button>
        </Grid>
        </Grid>
      </Grid>
  );
};
export default Dashfor;

const useStyles = makeStyles(() => ({
 
  BtnNext: {
    backgroundColor: "#1b6cfc",
    fontSize: "16px",
    color: "white",
    padding: "20px 60px",
    borderRadius: "50px",
    marginTop: "10px",
    border: "none",
    float: "right",
    overflow: "auto",
  },
}));
