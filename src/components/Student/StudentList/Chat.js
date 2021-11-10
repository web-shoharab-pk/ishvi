import React from "react";
import { makeStyles } from "@mui/styles";
import CheckBoxOutlineBlankOutlinedIcon from "@mui/icons-material/CheckBoxOutlineBlankOutlined";

const Chat = () => {
 const classes = useStyles();
 return (
  <>
   <div className={`${classes.container} flexCenterJcB`}>
    <CheckBoxOutlineBlankOutlinedIcon />
    <img
     className={classes.image}
     src={`${process.env.PUBLIC_URL}/img/education/education.jpg`}
     alt=""
    />
    <main className={classes.nameDetails}>
     <p className={classes.name}>Jane Cooper</p>
     <p className={classes.details}>Computer Science</p>
    </main>
    {/* <nav className="flexCenterJcB"> */}
    <img
     className={classes.logos}
     src={`${process.env.PUBLIC_URL}/img/student/whatsapp.png`}
     alt=""
    />
    <img
     className={classes.logos}
     src={`${process.env.PUBLIC_URL}/img/student/call.png`}
     alt=""
    />
    {/* </nav> */}
   </div>
  </>
 );
};

export default Chat;

const useStyles = makeStyles(() => ({
 container: {
  backgroundColor: "#f0f0f0",
  borderRadius: "12px",
  padding: "0 3% 0 5%",
  height : '10%'
 },
 image: {
  height: "45px",
  width: "45px",
  borderRadius: "30px",
 },
 nameDetails: {
  marginTop: "2%",
 },
 name: {
  fontWeight: "bold",
//   minWidth: "200px",
flexGrow : 1,
'@media (max-width: 472px)' : {
    fontSize : '13px',
    wordBreak : 'break-all'
  }
 },
 details : {
     fontWeight : '500',
     marginTop : '-2%',
    '@media (max-width: 472px)' : {
        fontSize : '11px',
        wordBreak : 'break-all'
      }
 },
 logos : {
     alignSelf : 'flex-end',
     '@media (max-width: 472px)' : {
         justifyContent : 'center',
        //  margin : 'auto'
      }
 }
}));
