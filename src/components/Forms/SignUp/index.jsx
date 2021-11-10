import React from 'react' 
import SignInForm from './Form'
import Head from './Head'
import { Grid } from '@mui/material'

const SignUp = () => {
    return (
        <Grid sx={{ backgroundColor:"#fafafa"}}>
        <Head />
        <SignInForm />
        </Grid>
    )
}
export default SignUp