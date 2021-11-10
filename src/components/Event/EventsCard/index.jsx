import React from "react";
import party from "${process.env.PUBLIC_URL}/img/party.png";
//mui
import { makeStyles } from "@mui/styles";
import { IconButton } from "@mui/material";
import RoomIcon from "@mui/icons-material/Room";
import ShareIcon from "@mui/icons-material/Share";

import Colors from "../../static/layout/Colors";
import PageTitle from "../../PageTitle";

const EventsCard = () => {
 const classes = useStyles();
 return (
  <div className="global-container">
   <div className={classes.eventListContainer}>
    <img className={classes.partyImage} src={party} />
   </div>

   <div className={classes.container2}>
    <div>
     <PageTitle pageTitle={`Birthday Celebration`} />
     <div className={classes.location}>
      <IconButton>
       <RoomIcon sx={{ fontSize: 12, opacity: 0.7 }} />
      </IconButton>
      <p style={{ fontSize: "12px", opacity: 0.7 }}>
       1901 Thornridge Cir, Shiloh
      </p>
     </div>
    </div>

    <div style={{ marginTop: "-5px" }}>
     <main className={classes.date}>
      <p className={classes.dateText}>Sept 10</p>
     </main>
     <p className={classes.distance}>2km</p>
    </div>
   </div>

   <div className={classes.container3}>
    <div style={{ display: "flex", alignItems: "center" }}>
     <main className={classes.joined}>28 joined</main>
     <img className={classes.img} src={`${process.env.PUBLIC_URL}/img/displayPicture.jpg`} />
     <div className={classes.userLength}>
      <main style={{ fontSize: "14px", textAlign: "left", color: "white" }}>
       {/* <span style={{position : 'relative', right : 1}}>+</span>25 */}
       +25
      </main>
     </div>
    </div>

    <ShareIcon sx={{ opacity: 0.7 }} />
   </div>
  </div>
 );
};

export default EventsCard;

const useStyles = makeStyles((theme) => ({
 container2: {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginTop: "2%",
 },
 container3: {
  display: "flex",
  justifyContent: "space-between",
  marginTop: "2%",
 },
 eventListContainer: {
  display: "flex",
  justifyContent: "center",
  marginTop: "3%",
 },
 location: {
  display: "flex",
  alignItems: "center",
  marginLeft: "-7px",
 },
 date: {
  backgroundColor: Colors.lightBlue,
  borderRadius: "10px",
 },
 dateText: {
  fontSize: "10px",
  padding: "8px",
  fontWeight: "bold",
 },
 distance: {
  opacity: 0.7,
  fontSize: "12px",
  display: "flex",
  justifyContent: "flex-end",
 },
 joined: {
  fontWeight: "bold",
 },
 img: {
  height: "30px",
  width: "30px",
  borderRadius: "100%",
  marginLeft: "10px",
 },
 userLength: {
  backgroundColor: Colors.blue,
  borderRadius: "50%",
  padding: "7px",
 },
}));
