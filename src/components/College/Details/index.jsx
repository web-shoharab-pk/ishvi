import React from 'react';
import BottomNav from '../../Common/BottomNav';
import { styled } from "@mui/material/styles";
import { Box } from '@mui/system';
import { Chip, Grid, IconButton, Typography } from '@mui/material';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import { useParams } from 'react-router-dom';



const useStyles = styled((theme) => ({
    root: {
        flexGrow: 1,
        bgcolor: '#E5E5E5',
        fontFamily: 'Montserrat'
    }

}));

const CollegeDetails = () => {
    const classes = useStyles();
    let { id } = useParams();
    console.log(id);
    return (
        <Box className={classes.root} sx={{ bgcolor: '#fafafa', }}>
            <Box sx={{
                // marginLeft: 2,
                // marginRight: 2,
                borderRadius: 2,
                position: 'relative',
            }}>

                <Box sx={{ height: '230px', backgroundImage: `url(${process.env.PUBLIC_URL}/img/college_details.png)` }}>

                </Box>
                <Box sx={{ backgroundColor: '#fff', paddingTop: '38px', top: 210, position: 'absolute', borderRadius: '10px', width: '100%' }}>
                    <Grid container>
                        <Grid item xs={2}><img alt='' src={`${process.env.PUBLIC_URL}/img/college.png`} /></Grid>
                        <Grid item xs={10} sx={{ pl: 1, position: 'relative' }}>
                            <Typography sx={{ fontWeight: 'bold', fontSize: '15px', mt: 1 }}>The Collage of saint Rose</Typography>
                            <Typography sx={{ fontSize: '13px' }}>Computer Information System</Typography>
                            <hr style={{ maxWidth: '70%', marginRight: '30%', color: '#fff' }} />

                            <Typography sx={{ mt: 1, fontSize: '15px' }}>May (01-01-1970)  <span style={{ float: 'right', marginRight: '10px', fontWeight: 'bold', fontSize: '16px' }}>$25000</span></Typography>

                            <img alt='' src={`${process.env.PUBLIC_URL}/img/percenatge.png`} style={{ marginTop: '15px' }} />
                            <Chip label="Apply" sx={{ bgcolor: '#1B6CFC', color: '#fff', position: 'absolute', marginTop: '5px', right: 0, marginRight: '25px', }} />

                            <Box sx={{ position: 'absolute', top: 0, right: 10 }}>

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
                            </Box>
                        </Grid>
                    </Grid>

                    <Grid container sx={{
                        paddingLeft: 3,
                        paddingRight: 3,
                        marginTop: 2,

                    }} spacing={1}>
                        <Grid item xs={6}>
                            <Typography sx={{ fontSize: '14px', }}><img alt='' style={{ marginRight: 10 }} src={`${process.env.PUBLIC_URL}/img/product_detail/gpa.png`} height="14px" />GPA % : <span style={{ float: 'right', paddingRight: 20 }}>60</span></Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography sx={{ fontSize: '14px', }}><img alt='' style={{ marginRight: 10 }} src={`${process.env.PUBLIC_URL}/img/product_detail/university.png`} height="14px" />University  : <span style={{ float: 'right', paddingRight: 20 }}>60</span></Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography sx={{ fontSize: '14px', }}><img alt='' style={{ marginRight: 10 }} src={`${process.env.PUBLIC_URL}/img/product_detail/semester.png`} height="14px" />Semester  : <span style={{ float: 'right', paddingRight: 20 }}>60</span></Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography sx={{ fontSize: '14px', }}><img alt='' style={{ marginRight: 10 }} src={`${process.env.PUBLIC_URL}/img/product_detail/qs.png`} height="14px" />QS World Rank : <span style={{ float: 'right', paddingRight: 20 }}>60</span></Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography sx={{ fontSize: '14px', }}><img alt='' style={{ marginRight: 10 }} src={`${process.env.PUBLIC_URL}/img/product_detail/deadline.png`} height="14px" />Deadline : <span style={{ float: 'right', paddingRight: 20 }}>60</span></Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography sx={{ fontSize: '14px', }}><img alt='' style={{ marginRight: 10 }} src={`${process.env.PUBLIC_URL}/img/product_detail/university.png`} height="14px" />US News Rank : <span style={{ float: 'right', paddingRight: 20 }}>60</span></Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography sx={{ fontSize: '14px', }}><img alt='' style={{ marginRight: 10 }} src={`${process.env.PUBLIC_URL}/img/product_detail/file.png`} height="14px" />Applied : <span style={{ float: 'right', paddingRight: 20 }}>60</span></Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography sx={{ fontSize: '14px', }}><img alt='' style={{ marginRight: 10 }} src={`${process.env.PUBLIC_URL}/img/product_detail/enroll.png`} height="14px" />Enrolled : <span style={{ float: 'right', paddingRight: 20 }}>60</span></Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography sx={{ fontSize: '14px', }}><img alt='' style={{ marginRight: 10 }} src={`${process.env.PUBLIC_URL}/img/product_detail/admit.png`} height="14px" />Admitted : <span style={{ float: 'right', paddingRight: 20 }}>60</span></Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography sx={{ fontSize: '14px', }}><img alt='' style={{ marginRight: 10 }} src={`${process.env.PUBLIC_URL}/img/product_detail/accept.png`} height="14px" />Acceptance : <span style={{ float: 'right', paddingRight: 20 }}>60</span></Typography>
                        </Grid>

                    </Grid>
                    <hr style={{ marginTop: '15px', marginRight: '5%', marginLeft: '5%', color: '#fff' }} />

                    <Box>
                        <Grid container sx={{
                            paddingLeft: 3,
                            paddingRight: 3,
                            marginTop: 2,
                            fontSize: '14px',
                        }} spacing={2}>
                            <Grid item >ILTES : <span style={{ color: '#1B6CFC', fontWeight: 'bold' }}>6</span></Grid>
                            <Grid item >PTE : <span style={{ color: '#1B6CFC', fontWeight: 'bold' }}>58</span></Grid>
                            <Grid item >TOEFL : <span style={{ color: '#1B6CFC', fontWeight: 'bold' }}>80</span></Grid>
                            <Grid item >WES : <span style={{ color: '#1B6CFC', fontWeight: 'bold' }}>80</span></Grid>
                            <Grid item >GRE :  <span style={{ color: '#FC5602', }}>Not Applicable</span></Grid>
                            <Grid item >GMAT : <span style={{ color: '#FC5602', }}>Not Applicable </span></Grid>
                        </Grid>
                    </Box>
                    <hr style={{ marginTop: '15px', marginRight: '5%', marginLeft: '5%', color: '#fff' }} />
                    <Box sx={{
                        paddingLeft: 3,
                        paddingRight: 3,
                        marginTop: '20px',
                    }}>
                        <Typography sx={{ color: '#1A1A1A', fontSize: '16px', fontWeight: 'bold' }}>
                            All Details
                            <span style={{ float: 'right', fontWeight: 'normal' }}>
                                See all
                            </span>
                        </Typography>

                        <Box sx={{ marginTop: '20px', bgcolor: '#1B6CFC', borderTopLeftRadius: '10px', borderTopRightRadius: '10px', paddingX: '10px', paddingY: '5px' }}>
                            <Typography sx={{ color: '#fff', fontWeight: 'bold', fontSize: '16px' }}>Program Details</Typography>
                        </Box>
                        <Box sx={{ paddingX: '10px', paddingY: '5px' }}>
                            <Typography sx={{ paddingY: '5px', fontWeight: 'bold' }}>Program: <span style={{ fontWeight: 'normal', fontSize: '15px' }}>Computer Information systems</span></Typography>
                        </Box>

                        {/* financial detaisl */}
                        <Box sx={{ marginTop: '20px', bgcolor: '#1B6CFC', borderTopLeftRadius: '10px', borderTopRightRadius: '10px', paddingX: '10px', paddingY: '5px' }}>
                            <Typography sx={{ color: '#fff', fontWeight: 'bold', fontSize: '16px' }}>Financial Details</Typography>
                        </Box>
                        <Box sx={{ paddingX: '10px', paddingY: '5px' }}>
                            <Typography sx={{ paddingY: '5px', fontWeight: 'bold' }}>Program: <span style={{ fontWeight: 'normal', fontSize: '15px' }}>Computer Information systems</span></Typography>
                        </Box>

                        {/* Scholarships  */}
                        <Box sx={{ marginTop: '20px', bgcolor: '#1B6CFC', borderTopLeftRadius: '10px', borderTopRightRadius: '10px', paddingX: '10px', paddingY: '5px' }}>
                            <Typography sx={{ color: '#fff', fontWeight: 'bold', fontSize: '16px' }}>Scholarships</Typography>
                        </Box>
                        <Box sx={{ paddingX: '10px', paddingY: '5px' }}>
                            <Typography sx={{ paddingY: '5px', fontWeight: 'bold' }}>Program: <span style={{ fontWeight: 'normal', fontSize: '15px' }}>Computer Information systems</span></Typography>
                        </Box>
                    </Box>


                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                </Box>
            </Box>

            <BottomNav />
        </Box>
    )
}

export default CollegeDetails;
