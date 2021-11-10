import React, { useState, useEffect } from 'react';
import { styled } from "@mui/material/styles";
import { Box } from '@mui/system';
import { Chip, FormControl, Grid, InputLabel, MenuItem, OutlinedInput, Select, Typography } from '@mui/material';
import axios from 'axios';
import Result from '../Result';
import BottomNav from '../Common/BottomNav';


const useStyles = styled((theme) => ({
    root: {
        flexGrow: 1,
        bgcolor: '#E5E5E5',
        fontFamily: 'Montserrat'
    }

}));



// const names = [
//     'Oliver Hansen',
//     'Van Henry',
//     'April Tucker',
//     'Ralph Hubbard',
//     'Omar Alexander',
//     'Carlos Abbott',
//     'Miriam Wagner',
//     'Bradley Wilkerson',
//     'Virginia Andrews',
//     'Kelly Snyder',
// ];

const Home = () => {
    const classes = useStyles();

    // const [value, setValue] = React.useState('recents');

    const [degree, setDegree] = useState('');
    const [program, setProgram] = useState('');
    const [country, setCountry] = useState('');

    const [searchList, setSearchList] = useState([]);

    const [programList, setProgramList] = useState([]);
    const [countryList, setCountryList] = useState([]);

    const submit = async () => {
        const params = new URLSearchParams();
        params.append('degree_type', degree);
        params.append('program', program);
        params.append('country', country);
        params.append('page', '1');
        params.append('operation', 'profileEvaluationDetails');
        params.append('call_frm', 'mobile');
        params.append('userid', '633575');
        const response = await axios.post("https://erp.bscglobaledu.com/mapi/JsonApi/", params
            , {
                'Access-Control-Allow-Origin': '*',
            });

        setSearchList(response.data.data);
        // console.log(response.data.data);
    }

    useEffect(()=>{ 
        async function syncData() {
        const params = new URLSearchParams();
        params.append('operation', 'fetchPicklist');
        params.append('name', 'related_programs');
        const response = await axios.post("https://erp.bscglobaledu.com/mapi/JsonApi/", params
            , {
                'Access-Control-Allow-Origin': '*',
            });

        params.append('name', 'country');
        const countryRes = await axios.post("https://erp.bscglobaledu.com/mapi/JsonApi/", params);
        console.log(countryRes.data);
        setProgramList(response.data.data);
        setCountryList(countryRes.data.data);}
        syncData();
    }, []);


    return (
        <>
            {
                !searchList.length > 0 ?

                    <Box className={classes.root} sx={{ bgcolor: '#fafafa', }}>

                        <Box sx={{
                            bgcolor: '#fff',
                            marginLeft: 2,
                            marginRight: 2,
                            borderRadius: 2,
                            marginTop: 4,
                        }}>
                            <Typography sx={{ padding: 2, fontFamily: 'Montserrat' }}>
                                Search Universities
                            </Typography>

                            <FormControl fullWidth sx={{ my: 1, }}>
                                <InputLabel sx={{ fontFamily: 'Montserrat', mx: 2 }}>Degree Type</InputLabel>
                                <Select
                                    sx={{ borderRadius: 2, mx: 2 }}
                                    input={<OutlinedInput label="Degree Type" />}
                                    onChange={(e) => setDegree(e.target.value)}
                                >
                                    <MenuItem value='Masters' selected>Masters</MenuItem>
                                    <MenuItem value='Diploma' selected>Diploma</MenuItem>
                                    <MenuItem value='Bachelors' selected>Bachelors</MenuItem>
                                    <MenuItem value='Phd' selected>Phd</MenuItem>

                                </Select>
                            </FormControl>

                            <FormControl fullWidth sx={{ my: 1, }}>
                                <InputLabel sx={{ fontFamily: 'Montserrat', mx: 2 }}>Program Name</InputLabel>
                                <Select
                                    sx={{ borderRadius: 2, mx: 2 }}
                                    input={<OutlinedInput label="Program Name" />}
                                    onChange={(e) => setProgram(e.target.value)}
                                >
                                    {
                                        programList && programList.map((val) =>
                                            <MenuItem value={val}>
                                                {val}
                                            </MenuItem>
                                        )
                                    }


                                </Select>
                            </FormControl>

                            <FormControl fullWidth sx={{ my: 1, }}>
                                <InputLabel sx={{ fontFamily: 'Montserrat', mx: 2 }}>Country</InputLabel>
                                <Select
                                    sx={{ borderRadius: 2, mx: 2 }}
                                    input={<OutlinedInput label="Country" />}
                                    onChange={(e) => setCountry(e.target.value)}
                                >
                                    {
                                        countryList && countryList.map((val) =>
                                            <MenuItem value={val}>
                                                {val}
                                            </MenuItem>
                                        )
                                    }

                                </Select>
                            </FormControl>

                            <Grid container spacing={1}>
                                <Grid item mx='auto' xs={6} sx={{ textAlign: 'center', }}>
                                    <img src={`${process.env.PUBLIC_URL}/img/reset.png`} alt='Reset' width="180px" />

                                </Grid>
                                <Grid item mx='auto' xs={6} sx={{ textAlign: 'center', mt: 1 }}>
                                    <img onClick={submit} alt='Submit' src={`${process.env.PUBLIC_URL}/img/submit.png`} width="150px" />
                                </Grid>
                            </Grid>

                        </Box>

                        <Box sx={{ height: '500px' }}>
                            <Grid container sx={{ textAlign: 'center', mt: 3, }} spacing={1}>
                                <Grid mx='auto' item sx={{ position: 'relative' }}>
                                    <img src={`${process.env.PUBLIC_URL}/img/scholarship.png`} alt='scholar' width="100px" />
                                    <Chip sx={{ position: 'absolute', left: 0, right: 0, ml: 'auto', mr: 'auto', width: '60%', mt: 10, bgcolor: '#FFFFFF', boxShadow: 1, fontFamily: 'Montserrat' }} label="View" variant="filled" />
                                </Grid>
                                <Grid mx='auto' item sx={{ position: 'relative' }}>
                                    <img src={`${process.env.PUBLIC_URL}/img/programs.png`} alt='Programs' width="100px" />
                                    <Chip sx={{ position: 'absolute', left: 0, right: 0, ml: 'auto', mr: 'auto', width: '60%', mt: 10, bgcolor: '#FFFFFF', boxShadow: 1, fontFamily: 'Montserrat' }} label="View" variant="filled" />
                                </Grid>
                                <Grid mx='auto' item sx={{ position: 'relative' }}>
                                    <img src={`${process.env.PUBLIC_URL}/img/sop.png`} alt='Sop' width="100px" />
                                    <Chip sx={{ position: 'absolute', left: 0, right: 0, ml: 'auto', mr: 'auto', width: '60%', mt: 10, bgcolor: '#FFFFFF', boxShadow: 1, fontFamily: 'Montserrat' }} label="View" variant="filled" />
                                </Grid>
                            </Grid>
                        </Box>


                        <BottomNav />
                    </Box>
                    :
                    <Result searchList={searchList} />
            }
        </>
    )
}

export default Home;
