import React from "react";
import { Grid, Typography,Button } from "@mui/material";
import { makeStyles } from "@mui/styles";

import "./Card.css";

const CountryCard = () => {
  const classes = useStyles();

  return (
    <Grid
      sx={{
        borderRadius: 3,
        boxShadow: 3,
        width: "90%",
        margin: "auto",
        mt: 5,
        p: 3,
        position: "relative",
      }}
    >
      <Typography sx={{ fontWeight: "700", mb: 2 }}>
        Mecanical Engineering - <span className={classes.topnum}>565</span>
      </Typography>
      <span>

        <img src={`${process.env.PUBLIC_URL}/img/DashBoard/Country/united-states.png`} alt='unitedState' className={classes.IconImg} />
        <span className={classes.texts}>
          USA <span className={classes.numbers}>396</span>
        </span>
      </span>
      <span>
        <img src={`${process.env.PUBLIC_URL}/img/DashBoard/Country/canada.png`} alt='Canada' className={classes.IconImg} />

        <span className={classes.texts}>
          CANADA <span className={classes.numbers}>36</span>
        </span>
      </span>

      <span>

        <img src={`${process.env.PUBLIC_URL}/img/DashBoard/Country/australia.png`} alt='Austrelia' className={classes.IconImg} />
        <span className={classes.texts}>
          AUSTRALIA <span className={classes.numbers}>19</span>
        </span>
      </span>

      <span>

        <img src={`${process.env.PUBLIC_URL}/img/DashBoard/Country/austria.png`} alt='Austrelia' className={classes.IconImg} />

        <span className={classes.texts}>
          AUSTRIA <span className={classes.numbers}>3</span>
        </span>
      </span>

      <span>

        <img src={`${process.env.PUBLIC_URL}/img/DashBoard/Country/belgium.png`} alt='Belgium' className={classes.IconImg} />

        <span className={classes.texts}>
          BELGIUM <span className={classes.numbers}>1</span>
        </span>
      </span>
      <span>
        {" "}
        <img src={`${process.env.PUBLIC_URL}/img/DashBoard/Country/czech-republic.png`} alt='Czech' className={classes.IconImg} />
        <span className={classes.texts}>
          CZECH REPUBLIC <span className={classes.numbers}>1</span>
        </span>
      </span>
      <span>
        {" "}
        <img src={`${process.env.PUBLIC_URL}/img/DashBoard/Country/denmark.png`} alt='Denmark' className={classes.IconImg} />
        <span className={classes.texts}>
          DENMARK <span className={classes.numbers}>1</span>
        </span>
      </span>
      <span>
        {" "}
        <img src={`${process.env.PUBLIC_URL}/img/DashBoard/Country/ireland.png`} alt='Ireland' className={classes.IconImg} />
        <span className={classes.texts}>
          IRELAND <span className={classes.numbers}>13</span>
        </span>
      </span>
      <span>
        {" "}
        <img src={`${process.env.PUBLIC_URL}/img/DashBoard/Country/netherlands.png`} alt='netherlands' className={classes.IconImg} />
        <span className={classes.texts}>
          NETHERLAND <span className={classes.numbers}>4</span>
        </span>
      </span>
      <span>
        {" "}
        <img src={`${process.env.PUBLIC_URL}/img/DashBoard/Country/new-zealand.png`} alt='Newzealand' className={classes.IconImg} />
        <span className={classes.texts}>
          NEW ZEALAND <span className={classes.numbers}>1</span>
        </span>
      </span>
      <span>
        {" "}
        <img src={`${process.env.PUBLIC_URL}/img/DashBoard/Country/united-kingdom.png`} alt='UK' className={classes.IconImg} />
        <span className={classes.texts}>
          UK <span className={classes.numbers}>36</span>
        </span>
      </span>
      <span>
        {" "}
        <img src={`${process.env.PUBLIC_URL}/img/DashBoard/Country/sweden.png`} alt='Sweden' className={classes.IconImg} />
        <span className={classes.texts}>
          SWITZERLAND <span className={classes.numbers}>1</span>
        </span>
      </span>
      <br />
      <Button variant="contained" sx={{ padding: "8px 14", borderRadius: 5, fontWeight: "100", fontSize: "12px", textTransform: "none" }}>more</Button>

    </Grid>
    // </Grid>
  );
};
export default CountryCard;

const useStyles = makeStyles(() => ({
  IconImg: {
    width: "16px",
    marginTop: "10px",
    height: "16px",
  },
  texts: {
    color: "#000",
    fontSize: "12px",
    lineHeight: "30px",
    marginLeft: "2px",
  },
  numbers: {
    color: "#1b6cfc",
    fontWeight: "500",
    marginRight: "5%",
  },
  btn: {
    color: "#fff",
    backgroundColor: "#1b6cfc",
    fontSize: "16px",
    padding: "5px 20px",
    borderRadius: "20px",
    border: "none",
    marginTop: "10px",
    fontWeight: "100",
  },
  topnum: {
    color: "#1b6cfc",
  },
}));
