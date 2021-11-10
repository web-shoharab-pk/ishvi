import React from 'react';
import { styled } from "@mui/material/styles";
import { Box } from '@mui/system';
import { Chip, Grid, IconButton, Typography } from '@mui/material';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import BottomNav from '../Common/BottomNav';
import { Link } from 'react-router-dom';

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

const Result = ({ searchList }) => {
    const classes = useStyles();
    // const response = await axios.post("/");
// eslint-disable-next-line
    const [value, setValue] = React.useState('recents');
// eslint-disable-next-line
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    console.log(searchList);
    return (
        <Box className={classes.root} sx={{ bgcolor: '#fafafa', }}>
            <Box sx={{

                marginLeft: 2,
                marginRight: 2,
                borderRadius: 2,

            }}>
                <Grid container spacing={1}>
                    <Grid item xs={6} sx={{ mt: 1, fontWeight: 'bold' }}>
                        Universities <span style={{ color: '#1B6CFC' }}>{searchList.length}</span>
                    </Grid>
                    <Grid item xs={6} sx={{ textAlign: 'end' }}>
                        <IconButton
                            size="small"
                            edge="end"
                            aria-label="account of current user"
                            // aria-controls={menuId}
                            aria-haspopup="true"

                            color="inherit"

                        >
                            <ShareOutlinedIcon />
                        </IconButton>
                    </Grid>

                </Grid>
                <hr />


            </Box>

            <Box sx={{
                marginLeft: 2,
                marginRight: 2,
                borderRadius: 2,
                marginTop: 3,
            }}>
                <Chip label="Programs" sx={{ bgcolor: '#fff' }} />

                <Chip icon={<FilterAltOutlinedIcon />} label="Filter" sx={{ bgcolor: '#fff', float: 'right', }} />
                <Chip avatar={<img alt="Natacha" src={`${process.env.PUBLIC_URL}/img/sort.png`} />} label="Sort" sx={{ bgcolor: '#fff', float: 'right', mx: 1 }} />
            </Box>

            <Box sx={{
                marginLeft: 2,
                marginRight: 2,
                borderRadius: 2,
                marginTop: 3,
            }}>
                {
                    searchList.map((val) => {
                        return (
                            <Link to={`/CollegeDetails/${val.universitiesid}`}>
                                <Box sx={{ bgcolor: '#fff', borderRadius: 3, py: 1, mb: 1 }}>
                                    <Grid container>

                                        <Grid item xs={2}><img src={`${process.env.PUBLIC_URL}/img/college.png`} alt='college' /></Grid>
                                        <Grid item xs={10} sx={{ pl: 1, position: 'relative' }}>
                                            <Typography sx={{ fontWeight: 'bold', fontSize: '15px', mt: 1 }}>{val.university}</Typography>
                                            <Typography sx={{ fontSize: '13px' }}>{val.department}</Typography>
                                            <hr style={{ maxWidth: '70%', marginRight: '30%', color: '#fff' }} />

                                            <Typography sx={{ mt: 1, fontSize: '15px' }}>{val.inter_adm_deadline}  <span style={{ float: 'right', marginRight: '10px', fontWeight: 'bold', fontSize: '16px' }}>${val.international_tuition_fee_yr}</span></Typography>

                                            <img src={`${process.env.PUBLIC_URL}/img/percenatge.png`} alt='percentage' style={{ marginTop: '15px' }} />
                                            <Chip label="Apply" sx={{ bgcolor: '#1B6CFC', color: '#fff', position: 'absolute', marginTop: '5px', right: 0, marginRight: '25px', }} />

                                            <Box sx={{ position: 'absolute', top: 0, right: 0 }}>
                                                <IconButton
                                                    size="small"
                                                    edge="end"
                                                    aria-label="account of current user"
                                                    // aria-controls={menuId}
                                                    aria-haspopup="true"

                                                    color="inherit"

                                                >
                                                    <FavoriteBorderIcon />
                                                </IconButton>
                                                <IconButton
                                                    size="small"
                                                    edge="end"
                                                    aria-label="account of current user"
                                                    // aria-controls={menuId}
                                                    aria-haspopup="true"

                                                    color="inherit"

                                                >
                                                    <MoreVertIcon />
                                                </IconButton>
                                            </Box>
                                        </Grid>

                                    </Grid>


                                </Box>
                            </Link>

                        )
                    })
                }


                {/* <Box sx={{ bgcolor: '#fff', borderRadius: 3, py: 1, mb: 1 }}>
                    <Grid container>
                        <Grid item xs={2}><img src={`${process.env.PUBLIC_URL}/img/college.png`} /></Grid>
                        <Grid item xs={10} sx={{ pl: 1, position: 'relative' }}>
                            <Typography sx={{ fontWeight: 'bold', fontSize: '15px', mt: 1 }}>The College of saint Rose</Typography>
                            <Typography sx={{ fontSize: '13px' }}>Computer Information System</Typography>
                            <hr style={{ maxWidth: '70%', marginRight: '30%', color: '#fff' }} />

                            <Typography sx={{ mt: 1, fontSize: '15px' }}>May (01-01-1970)  <span style={{ float: 'right', marginRight: '10px', fontWeight: 'bold', fontSize: '16px' }}>$25000</span></Typography>

                            <img src={`${process.env.PUBLIC_URL}/img/percenatge.png`} style={{ marginTop: '15px' }} />
                            <Chip label="Apply" sx={{ bgcolor: '#1B6CFC', color: '#fff', position: 'absolute', marginTop: '5px', right: 0, marginRight: '25px', }} />

                            <Box sx={{ position: 'absolute', top: 0, right: 0 }}>
                                <IconButton
                                    size="small"
                                    edge="end"
                                    aria-label="account of current user"
                                    // aria-controls={menuId}
                                    aria-haspopup="true"

                                    color="inherit"

                                >
                                    <FavoriteBorderIcon />
                                </IconButton>
                                <IconButton
                                    size="small"
                                    edge="end"
                                    aria-label="account of current user"
                                    // aria-controls={menuId}
                                    aria-haspopup="true"

                                    color="inherit"

                                >
                                    <MoreVertIcon />
                                </IconButton>
                            </Box>
                        </Grid>
                    </Grid>


                </Box> */}


            </Box>



            <BottomNav />
        </Box >
    )
}

export default Result;
