import React from "react";

import Head from "./Head";
import SignInForm from "./Form";
import Buttons from "./Button";
import { Grid } from "@mui/material";

const SignIn = () => {
  return (
    <Grid sx={{ backgroundColor:"#fafafa"}}>
      <Head />
      <SignInForm />
      <Buttons />
    </Grid>
  );
};
export default SignIn;
