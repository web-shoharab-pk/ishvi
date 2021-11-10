import React from 'react'
import { makeStyles } from '@mui/styles'
import PageTitle from '../../../PageTitle'
import RoomIcon from '@mui/icons-material/Room';

const FeaturedCards = () => {
    const classes = useStyles();
    return (
        <div>
            {/* //card */}
            <div className={classes.container}>
            <img 
            className={classes.image}
            src='${process.env.PUBLIC_URL}/img/documents/doctor.jpg' alt='' />
            <main className={classes.textDiv}>
                <p className={classes.name}>Doctor's Name</p>
                <div className={classes.container2}>
                <RoomIcon className={classes.locationIcon}/>
                <p className={classes.location}>location</p>
                </div>
                <div className={classes.container3}>
                <img className={classes.starImg} src="${process.env.PUBLIC_URL}/img/star.png" alt='' />
                <p className={classes.review} >50 reviews</p>
                </div>
            </main>
            </div>



           
        </div>
    )
}

export default FeaturedCards

const useStyles = makeStyles(() => ({
container : {
    display : 'flex',
    alignContent : 'flex-start',
    alignItems : 'center',
    border : '1px solid transparent',
    boxShadow : '2px 2px 5px lightgray',
    borderRadius : '20px',
    width : 'fit-content'
},
container2 : {
    display : 'flex',
    alignItems : 'center',
    marginTop : '-20px'
    // position : 'relative', top : 0
},
textDiv : {
    marginLeft : '7px',
    marginRight : '7px',
},
header : {
    display : 'flex',
    alignItems : 'center',
    justifyContent : 'space-between'
},
 image : {
     height : '100px',
     width : '100px',
     borderRadius : '20px'
 },
 name : {
     fontWeight : 'bold'
 },
 locationIcon : {
     opacity : 0.5
 },
 location : {
     opacity : 0.7
 },
 container3 : {
    display : 'flex',
     justifyContent : 'flex-start',
      alignItems : 'center',
    //   marginTop: '-15%'
 },
 starImg : {
    height : '20px',
    width : '20px'
},
review : {
    fontSize : '12px',
    marginLeft : '5px'
}
}))
