import React from "react";
import { makeStyles } from "@mui/styles";
import Colors from "../../static/layout/Colors";
import PageTitle from "../PageTitle";
import { FormControl, InputLabel, MenuItem, Select, LinearProgress, Box } from '@mui/material';
import CancelPresentationRoundedIcon from '@mui/icons-material/CancelPresentationRounded';


const UploadDocuments = () => {
    const classes = useStyles();
    const [progress, setProgress] = React.useState(0);

    React.useEffect(() => {
        const timer = setInterval(() => {
            setProgress((oldProgress) => {
                if (oldProgress === 100) {
                    return 0;
                }
                const diff = Math.random() * 10;
                return Math.min(oldProgress + diff, 100);
            });
        }, 500);

        return () => {
            clearInterval(timer);
        };
    }, []);
    return (
        <div>
            <div className="global-container">
                <PageTitle pageTitle="Upload Documents" bold />

                <div className={`${classes.header} flexCenterJcB`}>
                    <main className={classes.docNo}>
                        <p className={classes.no}>1</p>
                    </main>
                    <main className={classes.viewDiv}>
                        <p className={classes.view}>View</p>
                    </main>
                </div>

                <div style={{ margin: '8% 0px 2% 0px' }} >
                    <PageTitle pageTitle='Required Documents' small />
                </div>
                <FormControl style={{ marginTop: '3%' }} fullWidth>
                    <InputLabel
                        id="demo-simple-select-label">Select your Document</InputLabel>
                    <Select>
                        <MenuItem>--</MenuItem>
                    </Select>
                </FormControl>


                <div>
                    <p>Uploaded Documents</p>
                </div>


                <div className="flexCenterJcB">
                    <main style={{ marginTop: '4%' }}>
                        <img src='${process.env.PUBLIC_URL}/img/documents/pdf.png' alt="" />
                    </main>

                    <main className="flexCenterJcB">
                        <nav>
                            <div className={classes.bar}>
                                <p > 10th and 12th marksheet</p>
                                <Box sx={{ width: '140%' }}>
                                    <LinearProgress variant="determinate" value={progress} />
                                </Box>
                            </div>
                        </nav>
                    </main>
                    <p >70%</p>
                    <CancelPresentationRoundedIcon sx={{ opacity: 0.5 }} />
                </div>

                <div className={classes.submitImage}>
                    <img src='${process.env.PUBLIC_URL}/img/documents/submit.png' alt="" />
                </div>



            </div>
        </div>
    );
};

export default UploadDocuments;

const useStyles = makeStyles(() => ({
    docNo: {
        border: "1px solid transparent",
        borderRadius: "50px",
        height: "50px",
        width: "50px",
        backgroundColor: "#46a719",
    },
    header: {
        marginTop: '5%'
    },
    no: {
        textAlign: "center",
        fontSize: "17px",
        color: "white",
        fontWeight: "bold",
    },
    viewDiv: {
        border: "1px solid transparent",
        width: "fit-content",
        padding: "0px 15px 0px 15px",
        borderRadius: '25px',
        backgroundColor: Colors.lightBlue
    },
    view: {
        fontWeight: 'bold',
        color: Colors.blue
    },
    submitImage: {
        marginTop: '10%',
        display: 'flex',
        justifyContent: 'center'
    },
    bar: {
        display: 'flex',
        flexDirection: 'column'
    }
}));
