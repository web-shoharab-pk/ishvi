import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { makeStyles } from '@mui/styles';
import { Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import CheckBoxOutlineBlankOutlinedIcon from '@mui/icons-material/CheckBoxOutlineBlankOutlined';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import Chat from './Chat';

const Header = () => {
    const classes = useStyles();
    return (
        <div>
            <main className={`${classes.inputContainer}`}>
            <SearchIcon sx={{opacity : 0.5}} />
            <input className={classes.input} autoFocus placeholder='Search Students...'/> 
            </main>

            <div className={`${classes.dropdownContainer} flexCenterJcB`}>
            <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">All</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Age"
            >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
            </Select>
            </FormControl>
            {/* ===================================================================== */}
            <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">All</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Age"
            >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
            </Select>
            </FormControl>
            {/* ===================================================================== */}
            <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">All</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Age"
            >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
            </Select>
            </FormControl>
            {/* ===================================================================== */}
            <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Date</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Age"
            >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
            </Select>
            </FormControl>
            </div>


            <div className='flexCenterJcB'>
                <main className='flexCenterJcB'>
                <CheckBoxOutlineBlankOutlinedIcon className={classes.squareIcon}/>
                <p className={classes.student}>Students - 7161</p>
                </main>

                <main>
                <AddBoxOutlinedIcon className={classes.addIcon}/>
                </main>
            </div>

        <div className={classes.addContact}>
            <img src={`${process.env.PUBLIC_URL}/img/student/addContact.png`} alt='' />
            <p style={{fontWeight : 'bold'}}>Add New Contact</p>
        </div>

        <Chat />


        </div>
    )
}

export default Header

const useStyles = makeStyles(() => ({
    inputContainer : {
       display : 'flex',
       padding : '10px',
       width : '90%',
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
    dropdownContainer : {
        margin : '10% 0 6% 0'
    },
    squareIcon : {
        opacity : 0.5
    },
    addIcon : {
        opacity : 0.9,
        color : '#1b6cfc',
        border : '1px solid',
        padding : '5px',
        borderRadius : '20px',
        borderColor : 'lightgray',
        boxShadow : '1px 2px 3px lightgray'
    },
    student : {
        fontWeight : 'bold',
        marginLeft : '15%',
        width : '200px'
    },
    addContact : {
        display : 'flex',
        alignItems : 'center'
    }
   }))