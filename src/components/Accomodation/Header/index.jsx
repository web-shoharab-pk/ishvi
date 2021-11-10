import React from 'react'
import { makeStyles } from '@mui/styles'
import SearchIcon from '@mui/icons-material/Search';

const Header = () => {
    const classes = useStyles();
    return (
        <div>

            <div style={{display : 'flex', alignItems : 'center'}}>
                
            <main className={classes.inputContainer}>
            <SearchIcon sx={{opacity : 0.5}} />
            <input className={classes.input} autoFocus placeholder='Search Events...'/> 
            </main>

            <div >
            <img className={classes.filterIcon} src={`${process.env.PUBLIC_URL}/img/frame.png`} alt='' />
            </div>

            </div>
        </div>
    )
}

export default Header

const useStyles = makeStyles(() => ({
 inputContainer : {
    display : 'flex',
    padding : '10px',
    width : '80%',
    height : "20%",
    border : '1px solid transparent',
    borderRadius : '20px',
    boxShadow : '2px 2px 10px #DCDCDC',
 },
 input : {
    borderColor : 'transparent',
    outline : 'none',
    marginLeft : '10px',
    fontSize : '16px',
    opacity : 0.7,
    letterSpacing : 0.7
 },
 filterIcon : {
     position : 'relative',
     top : 10,
     height : '75px',
     width : '75px',
    //  boxShadow : '2px 2px 10px #DCDCDC','
 }
}))