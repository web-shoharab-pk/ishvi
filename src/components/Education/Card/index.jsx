import React from "react";
import { makeStyles } from "@mui/styles";
import Colors from "../../../static/layout/Colors";

const Card = () => {
 const classes = useStyles();
 return (
  <div>
   <div className="flexCenterJcB" style={{marginTop : '5%'}}>
    <div className={classes.imageDiv}>
    <img
     className={classes.image}
     src={`${process.env.PUBLIC_URL}/img/education/table.jpg`}
     alt=""
    />
    </div>

    <div style={{ alignSelf: "flex-start", flex : 1 }}>
    <nav className="flexCenterJcB" style={{ alignSelf: "flex-start", flex : 1 }}>
    <div className={classes.title}>
     The Collage of saint Rose
    </div>

    {/* <main style={{ alignSelf: "flex-start" }} className={classes.applyDiv}>
     <p className={classes.apply}>Apply</p>
    </main> */}
    <img src={`${process.env.PUBLIC_URL}/img/education/apply.png`} alt='' />
    </nav>

    <div className={classes.line}></div>
    
    <main className={classes.icons}>
    <img src={`${process.env.PUBLIC_URL}/img/education/earth.png`} alt='' />
    <img src={`${process.env.PUBLIC_URL}/img/education/whatsapp.png`} alt='' />
    <img src={`${process.env.PUBLIC_URL}/img/education/call.png`} alt='' />
    <img src={`${process.env.PUBLIC_URL}/img/education/msg.png`} alt='' />
    </main>
    </div>

   </div>
  </div>
 );
};
export default Card;

const useStyles = makeStyles(() => ({
imageDiv : {
    border : '1px solid transparent',
    borderRadius: "8px",
    backgroundColor : "white"
},
 image: {
  height: "70px",
  width: "70px",
  borderRadius: "20px",
  padding : '10px'
 },
 title: {
  fontWeight: "bold",
  fontSize : '15px',
  marginTop : 'auto',
  marginBottom : 'auto',
  marginLeft : '5%',
  marginRight : '2%',

 },
 applyDiv: {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "20px",
  backgroundColor: Colors.blue,
  width: "80px",
  height: "40px",
  marginTop: "2%",
 },
 apply: {
  color: "white",
  textAlign: "center",
 },
 line: {
  border: "none",
  borderTop: "1px solid black",
  borderWidth: "100%",
  height: "2px",
  marginTop : '2%',
  borderColor : Colors.lightBlue
 },
 icons : {
     display : 'flex',
     justifyContent : 'space-evenly'
 }
}));
