import React from "react"
import { Grid, Button , Typography,  } from "@mui/material"
import { Facebook , Twitter , Instagram , Google } from "@mui/icons-material"

const Buttons =()=>{
    return(
        <Grid xs={11} sx={{ margin:"auto" }}>
<Typography
            sx={{ fontSize: "14px", color: "#000", textAlign: "center" }}
          >
            Or
          </Typography>
          <Button
            sx={{
              fontSize: "13px",
              fontWaight: "600",
              p: 1,
              color: "#fff",
              backgroundColor: "#003ab5",
              my: 2,
                mx:2,
              borderRadius: "50%",
              width: "50px",
              height: "50px",
                minHeight:"auto",
                minWidth:"auto",
              textTransform: "none",
            }}
          >
            <Facebook sx={{ mx: 2 }} />
          </Button>
          <Button
            sx={{
                 fontSize: "13px",
              fontWaight: "600",
              p: 1,
              color: "#fff",
              backgroundColor: "#141526",
              my: 2,
                mx:2,
              borderRadius: "50%",
              width: "50px",
              height: "50px",
                minHeight:"auto",
                minWidth:"auto",
            }}
          >
            <Google sx={{ mx: 2 }} />
          </Button>
          <Button
            sx={{
                fontSize: "13px",
              fontWaight: "600",
              p: 1,
              color: "#fff",
              backgroundColor: "#47acdf",
              my: 2,
                mx:2,
              borderRadius: "50%",
              width: "50px",
              height: "50px",
                minHeight:"auto",
                minWidth:"auto",
            }}
          >
            <Twitter sx={{ mx: 2 }} />
          </Button>
          <Button
            sx={{
                fontSize: "13px",
              fontWaight: "600",
              p: 1,
              color: "#fff",
              background: "linear-gradient( to right, #de04f4, #f7029c)",
              my: 2,
                mx:2,
              borderRadius: "50%",
              width: "50px",
              height: "50px",
                minHeight:"auto",
                minWidth:"auto",
            }}
          >
            <Instagram sx={{ mx: 2 }} />
          </Button>
        </Grid>
    )
}
export default Buttons