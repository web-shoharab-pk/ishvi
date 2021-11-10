import React from "react";
import { Grid, Input, Typography, Button } from "@mui/material";
import OtpHead from "./Head";
import { makeStyles } from "@mui/styles";




const Otp = () => {
    const classes = useStyles();

    return (
        <Grid sx={{ backgroundColor: "#fafafa" }}>
            <OtpHead />
            <Grid sx={{ textAlign: "center" }}>
                <Input defaultValue="7" sx={{ mx: 0.5, px: 1.5, width: "50px", height: "50px", fontSize: "40px", fontWeight: "700", }} />
                <Input defaultValue="5" sx={{ mx: 0.5, px: 1.5, width: "50px", height: "50px", fontSize: "40px", fontWeight: "700", }} />
                <Input defaultValue="1" sx={{ mx: 0.5, px: 1.5, width: "50px", height: "50px", fontSize: "40px", fontWeight: "700", }} />
                <Input defaultValue="8" sx={{ mx: 0.5, px: 1.5, width: "50px", height: "50px", fontSize: "40px", fontWeight: "700", }} />
            </Grid>


            <Typography
                sx={{ fontSize: "16px", color: "#000", textAlign: "center", mt: 3 }}
            >
                Didn't received the code? <br />
                <strong ><u className={classes.RScode}>Resend Code</u></strong>

            </Typography>
            <Grid xs={11} sx={{ margin: "auto", mt: 3, mb: 5 }}>
                <Button
                    sx={{
                        fontSize: "14px",
                        fontWaight: "600",
                        p: 1,
                        color: "#fff",
                        backgroundColor: "#1b6cfc",
                        my: 2,
                        borderRadius: "100px",
                        width: "100%",
                    }}
                >
                    Confirm
                </Button>
            </Grid>
            <Grid sx={{ margin: "auto", mt: 5 }}>
                <Typography
                    sx={{ fontSize: "14px", color: "#000", textAlign: "center", mt: 5, px: 2, pt: 5 }}
                >
                    By clicking start, you agree to our
                    <span className={classes.text}> Privacy Policy</span> OUR <span className={classes.text}>Teams and Conditions</span>
                </Typography>
            </Grid>
        </Grid>
    );
};
export default Otp;



const useStyles = makeStyles(() => ({
    RScode: {
        color: "#1b6cfc",
        fontSize: "14px",
    },
    text: {
        color: "#1b6cfc"
    }
}))