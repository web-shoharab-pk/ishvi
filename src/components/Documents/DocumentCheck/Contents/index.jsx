import React from "react";
import PageTitle from "../../../PageTitle";
import { makeStyles } from "@mui/styles";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import DescriptionIcon from '@mui/icons-material/Description';
import DoneIcon from '@mui/icons-material/Done';
import PublicIcon from '@mui/icons-material/Public';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';

const Contents = () => {
 const classes = useStyles();
 return (
  <div>
   <PageTitle pageTitle="Documents Checklist" bold />
   <p>Welcome to our medical clinic</p>
   <img src="${process.env.PUBLIC_URL}/img/documents/stayHome.png" />

   <div className={classes.container}>
    <main>
     <CalendarTodayIcon className={classes.iconImage} />
     <p>Academics</p>
    </main>

    <main>
     <InsertDriveFileIcon className={classes.iconImage}/>
     <p>Visa</p>
    </main>

    <main>
     <MoreHorizIcon 
      className={classes.iconImage}/>
     <p>General</p>
    </main>
   </div>

    {/* 2nd line */}
    <div className={classes.container}>
    <main>
    <DescriptionIcon className={classes.iconImage}/>
    <p>Document</p>
    </main>

    <main>
    <PublicIcon className={classes.iconImage}/>
    <p>Immigration</p>
    </main>

    <main>
    <DoneIcon className={classes.iconImage}/>
    <p>Funding</p>
    </main>
    </div>



   <p style={{textAlign : 'justify'}}>
     Lorem Ipsum is simply dummy text of the printing and typesetting industry.
     Lorem Ipsum has been the industry's standard dummy text ever since the
     1500s, when an unknown printer took a galley of type and scrambled it to
     make a type specimen book.
    </p>


    <PageTitle pageTitle='Required Documents' />

    <div className='flexCenterJcB'>
    <main className='flexCenter'>
    <CheckBoxOutlinedIcon />
    <p style={{marginLeft : '5px'}}>10th</p>
    </main>
    <img src='${process.env.PUBLIC_URL}/img/documents/download.png' />
    </div>

    <div className='flexCenterJcB'>
    <main className='flexCenter'>
    <CheckBoxOutlinedIcon />
    <p style={{marginLeft : '5px'}}>11th standard markscard</p>
    </main>
    <img src='${process.env.PUBLIC_URL}/img/documents/download.png' />
    </div>

    <div className='flexCenterJcB'>
    <main className='flexCenter'>
    <CheckBoxOutlinedIcon />
    <p style={{marginLeft : '5px'}}>12th standard markscard</p>
    </main>
    <img src='${process.env.PUBLIC_URL}/img/documents/download.png' />
    </div>

  </div>
 );
};

export default Contents;

const useStyles = makeStyles(() => ({
 container: {
  display: "flex",
  justifyContent: "space-evenly",
  flexWrap: "wrap",
 },
 insideContainer: {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center"
 },
 moreDiv : {
     border : '1px solid',
     borderRadius : '120%',
     alignSelf : 'center'
 },
 iconImage: {
  height: "70px",
  width: "50px",
 },
}));
