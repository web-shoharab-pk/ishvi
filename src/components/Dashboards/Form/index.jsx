import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button, Grid, Typography } from "@mui/material";
import { blue } from "@mui/material/colors";
import { height, width } from "@mui/system";

export default function Form() {
  return (
      <Grid sx={{ p: 2, borderRadius: 3, borderRadius: "20px" }}>
        <Typography sx={{ color: "#000" }}>Looking for</Typography>
        <TextField
          id="outlined-textarea"
          label="Degree"
          placeholder="Degree"
          multiline
          sx={{ width: "100%", mt: 2 }}
        />
        <TextField
          id="outlined-textarea"
          label="Country"
          placeholder="Country"
          multiline
          sx={{ width: "100%", mt: 2 }}
        />
        <TextField
          id="outlined-textarea"
          label="Program"
          placeholder="Program"
          multiline
          sx={{ width: "100%", mt: 2 }}
        />
        <Grid sx={{ display: "flex" }}>
          <TextField
            id="outlined-textarea"
            label="Semesterr"
            placeholder="Semester"
            multiline
            sx={{ width: "48%", mt: 2, borderRadius: 3 }}
          />
          <TextField
            id="outlined-textarea"
            label="Year"
            placeholder="Year"
            multiline
            sx={{ width: "48%", mt: 2, marginLeft: "4%", borderRadius: 3 }}
          />
        </Grid>
        <Button
          variant="contained"
          sx={{
            textTransform: "none",
            padding: "15px 50px",
            color: "#fff",
            backgroundColor: "blue",
            borderRadius: 10,
            float: "right",
            mt: 3,
          }}
        >
          Next
        </Button>
      </Grid>
  );
}
