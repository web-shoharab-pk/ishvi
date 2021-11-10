import React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {makeStyles} from "@mui/styles";
import {Button, Grid, Typography} from "@mui/material";

const SearchForm = () => {
    const classes = useStyles();
    return (
        <>
            <div className={classes.cardBox}>
                <FormControl sx={{m: 1, minWidth: "100%"}}>
                    <InputLabel id="demo-simple-select-helper-label">Select course</InputLabel>
                    <Select value={''}
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        label="Select course"
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={'ipsum1'}>lorem</MenuItem>
                        <MenuItem value={'ipsum2'}>ipsum</MenuItem>
                        <MenuItem value={'ipsum3'}>dolar</MenuItem>
                    </Select>
                </FormControl>
                <FormControl sx={{m: 1, minWidth: "100%"}}>
                    <InputLabel id="demo-simple-select-helper-label">Select Country</InputLabel>
                    <Select value={''}
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        label="Select course"
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={'lorem1'}>lorem</MenuItem>
                        <MenuItem value={'lorem2'}>ipsum</MenuItem>
                        <MenuItem value={'lorem3'}>dolar</MenuItem>
                    </Select>
                </FormControl>
                <FormControl sx={{m: 1, minWidth: "100%"}}>
                    <InputLabel id="demo-simple-select-helper-label">Select Program</InputLabel>
                    <Select
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        label="Select course"
                        value={''}
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={'lorem'}>loral</MenuItem>
                        <MenuItem value={'ipsum'}>ipsum</MenuItem>
                        <MenuItem value={'dolar'}>dolar</MenuItem>
                    </Select>
                </FormControl>
                <Grid xs={12} className={classes.gridFlex} style={{marginBottom: '10px', marginTop: '5px'}}>
                    <Button className={classes.resetBtn}>Reset</Button>
                    <Button className={classes.submitBtn} type={'primary'}>Submit</Button>
                </Grid>
            </div>
            <Grid className={classes.sxGrid_1Top}>
                <Grid className={classes.sxGrid_3}>
                    <Button sx={{
                        padding: 0,
                    }}>
                        <img src={`${process.env.PUBLIC_URL}/img/DashBoard/scholarship.png`} alt="web search"
                             width="80%"/>
                    </Button>
                    <Button variant="text" disableElevation className={classes.viewBtn}>View</Button>
                </Grid>
                <Grid className={classes.sxGrid_3}
                >

                    <Button
                        sx={{
                            padding: 0,
                        }}
                    >
                        <img src={`${process.env.PUBLIC_URL}/img/DashBoard/sop.png`} alt="web search" width="80%"/>
                    </Button>
                    <Button variant="text" disableElevation className={classes.viewBtn}>View</Button>

                </Grid>
                <Grid
                    className={classes.sxGrid_3}
                >

                    <Button
                        sx={{
                            padding: 0,
                        }}
                    >
                        <img src={`${process.env.PUBLIC_URL}/img/DashBoard/web.png`} alt="web search" width="80%"/>
                    </Button>
                    <Button
                        className={classes.viewBtn}
                        variant="text" disableElevation>View</Button>
                </Grid>
            </Grid>
            <Grid
                sx={{
                    fontSize: "16px",
                    display: "flex",
                    textAlign: "center",
                    marginTop: "30px",
                    marginBottom: "30px",
                    justifyContent: "space-around",
                }}
            >
                <Typography sx={{
                    fontSize: "16px",
                    lineHeight: '20px',
                    textAlign: 'center',
                    fontWeight: 'normal',
                    color: '#1A1A1A'
                }}> Search <br/> Scholarship </Typography>
                <Typography sx={{
                    fontSize: "16px",
                    lineHeight: '20px',
                    textAlign: 'center',
                    fontWeight: 'normal',
                    color: '#1A1A1A'
                }}> Search <br/> SOP </Typography>
                <Typography sx={{
                    fontSize: "16px",
                    lineHeight: '20px',
                    textAlign: 'center',
                    fontWeight: 'normal',
                    color: '#1A1A1A'
                }}> Search <br/> Programer </Typography>
            </Grid>
        </>
    );
};

export default SearchForm;
const useStyles = makeStyles(() => ({
    cardBox: {
        backgroundColor: "#ffffff",
        borderRadius: "10px",
        boxShadow: ' 0px 10px 20px rgba(0, 0, 0, 0.04), 0px 2px 6px rgba(0, 0, 0, 0.04), 0px 0px 1px rgba(0, 0, 0, 0.04);',
        marginBottom: '20px',
        paddingTop: '10px',
        paddingBottom: '10px;',
        paddingLeft: '15px',
        paddingRight: '30px',
        marginTop: '15px',
    },
    submitBtn: {
        boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.04), 0px 2px 6px rgba(0, 0, 0, 0.04), 0px 0px 1px rgba(0, 0, 0, 0.04)',
        borderRadius: '30px',
        height: '56px',
        width: '167px',
        backgroundColor: '#1B6CFC',
        color: '#ffffff',
        fontWeight: 'bold',
        fontSize: '16px',
        lineHeight: '20px',
        marginLeft: '7px',

    },
    resetBtn: {
        backgroundColor: '#FFFFFF',
        boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.04), 0px 2px 6px rgba(0, 0, 0, 0.04), 0px 0px 1px rgba(0, 0, 0, 0.04)',
        borderRadius: '30px',
        height: '56px',
        width: '160px',
        marginRight: '7px',
        color: '#666666',
        fontWeight: 'normal',
        fontSize: '14px',
        lineHeight: '17px',
    },
    gridFlex: {
        display: 'flex',
        alignItems: 'center',
    },
    sxGrid_1Top: {
        display: "flex",
        justifyContent: "space-around",
        textAlign: "center",
        mt: 3,
    },
    sxGrid_3: {
        border: '1px solid #DCE8FF',
        boxSizing: "border-box",
        backgroundColor: '#ffffff',
        width: '116px',
        height: '116px',
        display: "flex",
        justifyContent: "center",
        alignItems: 'center',
        padding: "20px",
        borderRadius: "50%",
        position: "relative",
    },
    viewBtn: {
        backgroundColor: "#fff",
        position: "absolute",
        marginTop: "75px",
        padding: "7px 25px",
        fontWeight: "600",
        color: "#1b6cfc",
        border: " 1px solid #DCE8FF",
        boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.04), 0px 2px 6px rgba(0, 0, 0, 0.04), 0px 0px 1px rgba(0, 0, 0, 0.04)",
        borderRadius: "30px",
        bottom: '-20px',
    },
}));