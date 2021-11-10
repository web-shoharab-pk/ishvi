import React from "react";
import PageTitle from "../../PageTitle.js";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { makeStyles } from "@mui/styles";
import { IconButton } from "@mui/material";
import RoomIcon from "@mui/icons-material/Room";

const Card = () => {
    const classes = useStyles();
    return (
        <div>
            <div className={classes.container}>
                <PageTitle pageTitle={`Accomodation List`} bold />
                <img style={{ marginTop: '10px' }} src={`${process.env.PUBLIC_URL}/img/sort.png`} alt="" />
            </div>

            <div className={classes.img}>
                <img src={`${process.env.PUBLIC_URL}/img/books.png`} alt="books" />
            </div>

            <div className={classes.container2}>
                <p >The college of Saint rose</p>
                <div style={{ position: 'relative', top: 12 }}>
                    <img src={`${process.env.PUBLIC_URL}/img/whatsapp.png`} alt="" />
                    <img src={`${process.env.PUBLIC_URL}/img/share.png`} alt="" />
                </div>
            </div>

            <div>
                <main style={{ display: 'flex', marginTop: '-15px' }}>
                    <IconButton>
                        <RoomIcon sx={{ fontSize: 12, opacity: 0.7 }} />
                    </IconButton>
                    <p className={classes.text}>1901 Thornbridge Cir. Shiloh Show on map</p>
                </main>
                <div className={classes.container3}>
                    <img className={classes.starImg} src={`${process.env.PUBLIC_URL}/img/star.png`} alt='' />
                    <p className={classes.review} >50 reviews</p>
                </div>

                <div className={classes.img}>
                    <img src={`${process.env.PUBLIC_URL}/img/book.png`} alt='' />
                </div>

            </div>

        </div>
    );
};

export default Card;

const useStyles = makeStyles(() => ({
    container: {
        display: "flex",
        alignItems: "center",
        justifyContent: 'space-between'
    },
    container2: {
        display: "flex",
        alignItems: "center",
        justifyContent: 'space-between'
    },
    container3: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: '-10px'
    },
    img: {
        display: 'flex',
        justifyContent: 'center'
    },
    text: {
        fontSize: '12px',
        opacity: 0.7
    },
    starImg: {
        height: '20px',
        width: '20px'
    },
    review: {
        fontSize: '12px',
        marginLeft: '5px'
    }
}));
