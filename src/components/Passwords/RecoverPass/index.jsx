import React from "react";

import { Grid } from "@mui/material";
import HeadRecover from "./Head";
import FormRecover from "./Form";

const RecoverPassword = () => {
    return (
        <Grid sx={{ backgroundColor: "#fafafa" }}>
            <HeadRecover />
            <FormRecover />
        </Grid>
    );
};
export default RecoverPassword;
