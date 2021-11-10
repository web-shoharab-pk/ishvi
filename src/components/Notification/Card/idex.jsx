import { makeStyles } from '@mui/styles'
import React from 'react'

const Card = () => {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <img className={classes.imgStyle} src={`${process.env.PUBLIC_URL}/img/bitmoji.png`} alt='bitmoji' /> 
            <div className={classes.content}>
            <div>
            <main className={classes.title}>Robert Fox</main>
            <p className={classes.para}>Have a new course</p>
            </div>
            <p className={classes.time}>TIME</p>
            </div>
        </div>
    )
}

export default Card

const useStyles = makeStyles({
    container : {
        border : '1px solid #DCDCDC',
        borderRadius : '5px',
        boxShadow : '1px 5px 20px 1px #DCDCDC',
        display : 'flex',
        margin : '10px',
        padding : '5px'
    },
    content : {
        display : 'flex',
        justifyContent : 'space-between',
        flex : 1,
        marginLeft : '1%',
        marginTop : '1%'
    },
    imgStyle : {
        height : '60px',
        width : '60px',
    },
    title : {
        fontWeight : '600'
    },
    para : {
        marginTop : '4px'
    },
    time : {
        display : 'flex',
        justifyContent : 'center'
    }
  });