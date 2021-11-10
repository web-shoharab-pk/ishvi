import React from "react";
import { makeStyles } from "@mui/styles";

const PageTitle = ({ pageTitle, bold, large, small}) => {
 const classes = useStyles();
 const _bold = bold ? { fontWeight: "bold" } : null;
 const _large = large ? { fontSize: "20px" } : null;
 const _small = small ? { fontSize: "16px" } : null;
 return (
  <div>
   <div style={{ ..._bold, ..._large, ..._small }} className={classes.notification}>
    {pageTitle}
   </div>
  </div>
 );
};

export default PageTitle;

const useStyles = makeStyles({
 notification: {
  fontSize: "18px",
  marginBottom: "2%",
 },
});
