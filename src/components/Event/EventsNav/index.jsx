import { makeStyles } from "@mui/styles";
import React from "react";

const EventsNav = ({ toggle, setToggle }) => {
 const { forYou, trending, upcoming } = toggle;
 const classes = useStyles();
 return (
  <div className={classes.container}>
   <p
    className={`${forYou && classes.bgBlue} ${classes.text}`}
    onClick={() =>
     setToggle({ forYou: true, trending: false, upcoming: false })
    }
   >
    For you
   </p>
   <p
    className={`${trending && classes.bgBlue} ${classes.text}`}
    onClick={() =>
     setToggle({ forYou: false, trending: true, upcoming: false })
    }
   >
    Trending
   </p>
   <p
    className={`${upcoming && classes.bgBlue} ${classes.text}`}
    onClick={() =>
     setToggle({ forYou: false, trending: false, upcoming: true })
    }
   >
    Upcoming
   </p>
  </div>
 );
};

export default EventsNav;

const useStyles = makeStyles((theme) => ({
 container: {
  display: "flex",
  justifyContent: "space-evenly",
  border: "1px solid transparent",
  borderRadius: "30px",
  backgroundColor: "#fafafa",
  boxShadow: "1px 3px 10px 1px #DCDCDC",
 },
 text: {
  fontSize: "14px",
  fontWeight : 'bold'
 },
 bgBlue: {
  color: "#377efc",
 },
}));
