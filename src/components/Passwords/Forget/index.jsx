import React from "react";
import { Grid } from "@mui/material";
import ForgetHead from "./Head";
import ForgetForm from "./Form";

const ForgePassword = () => {
    return (
        <Grid sx={{ backgroundColor: "#fafafa" }}>
            <ForgetHead />
            <ForgetForm />
        </Grid>
    );
};
export default ForgePassword;