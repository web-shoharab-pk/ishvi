import React from 'react';
import {Link} from 'react-router-dom';
import {IconButton} from '@mui/material'
import {Box} from '@mui/system'
import Drawer from '@mui/material/Drawer';
// import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import SearchIcon from '@mui/icons-material/Search';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
// import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import {useHistory} from "react-router-dom";
export default function Navbar() {
    let history=useHistory()
    const [state, setState] = React.useState({top: false, left: false, bottom: false, right: false,});
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setState({...state, [anchor]: open});
    };
    const studentMenuList = [
        {text: 'Profile Evaluation', url: '/dashboard'}, {text: 'Mentors', url: '/mentorList'}, {
            text: 'Events List',
            url: '/ComingSoon'
        },
        {text: 'Education Loan list', url: '/EducationLoanList'}, {text: 'Accommodation list', url: '/accomodation'},
        {text: 'Internship List', url: '/ComingSoon'}, {
            text: 'Document Checklist',
            url: '/ComingSoon'
        }, {text: 'Agreements', url: '/ComingSoon'},
        {text: 'Invoice', url: '/ComingSoon'}, {text: 'FAQ', url: '/faq'}, {text: 'Services', url: '/ComingSoon'},
        {text: 'Videos', url: '/ComingSoon'}, {text: 'Chat', url: '/ComingSoon'}, {text: 'Contact Us', url: '/ComingSoon'}
    ]
    // const employeeMenuList = [
    //     {text: 'Student', url: '/'}, {text: 'Registered', url: '/mentorList'}, {text: 'Applications', url: '/EventsList'},
    //     {text: 'Events List', url: '/EducationLoanList'}, {text: 'Education Loan list', url: '/accomodation'},
    //     {text: 'Accommodation list', url: '/'}, {text: 'Internship List',url: '/DocumentCheckList'}, {text: 'Document Checklist', url: '/'},
    //     {text: 'Agreements', url: '/'},{text: 'Invoice', url: '/'}, {text: 'FAQ', url: '/faq'}, {text: 'Services', url: '/'},
    //     {text: 'Videos', url: '/'}, {text: 'Chat', url: '/'}, {text: 'Contact Us', url: '/'}
    // ]
    // const eduLoanMenuList = [
    //     {text: 'Student', url: '/'},
    //     {text: 'Events List', url: '/EducationLoanList'}, {text: 'Education Loan', url: '/accomodation'},
    //     {text: 'Accommodation list', url: '/'}, {text: 'Internship List',url: '/DocumentCheckList'}, {text: 'Document Checklist', url: '/'},
    //     {text: 'Agreements', url: '/'},{text: 'Invoice', url: '/'}, {text: 'FAQ', url: '/faq'}, {text: 'Services', url: '/'},
    //     {text: 'Videos', url: '/'}, {text: 'Chat', url: '/'}, {text: 'Contact Us', url: '/'}
    // ]
    // const accommodationMenuList = [
    //     {text: 'Student', url: '/'},{text: 'Post Accomidation', url: '/'},{text: 'Manage Accomidation', url: '/'},
    //     {text: 'Events List', url: '/EducationLoanList'}, {text: 'Education Loan', url: '/accomodation'},
    //     {text: 'Accommodation list', url: '/'}, {text: 'Internship List',url: '/DocumentCheckList'}, {text: 'Document Checklist', url: '/'},
    //     {text: 'Agreements', url: '/'},{text: 'Invoice', url: '/'}, {text: 'FAQ', url: '/faq'}, {text: 'Services', url: '/'},
    //     {text: 'Videos', url: '/'}, {text: 'Chat', url: '/'}, {text: 'Contact Us', url: '/'},{text: 'Push Notification', url: '/'}
    // ]
    // const internshipMenuList = [
    //     {text: 'Interns', url: '/'},{text: 'Post Internship', url: '/'},{text: 'Manage Internship', url: '/'},
    //     {text: 'Events List', url: '/EducationLoanList'}, {text: 'Education Loan', url: '/accomodation'},
    //     {text: 'Accommodation list', url: '/'}, {text: 'Internship List',url: '/DocumentCheckList'}, {text: 'Document Checklist', url: '/'},
    //     {text: 'Agreements', url: '/'},{text: 'Invoice', url: '/'}, {text: 'FAQ', url: '/faq'}, {text: 'Services', url: '/'},
    //     {text: 'Videos', url: '/'}, {text: 'Chat', url: '/'}, {text: 'Contact Us', url: '/'},{text: 'Push Notification', url: '/'}
    // ]
    // const universityMenuList = [
    //     {text: 'Student', url: '/'},{text: 'Applications', url: '/'},{text: 'Enrolled', url: '/'},
    //     {text: 'Programs', url: '/EducationLoanList'}, {text: 'Events List', url: ''},{text: 'Post Events', url: ''}, {text: 'Education Loan List', url: '/accomodation'},
    //     {text: 'Accommodation list', url: '/'},{text: 'Agreements', url: '/'},{text: 'Invoice', url: '/'}, {text: 'FAQ', url: '/faq'}, {text: 'Services', url: '/'},
    //     {text: 'Videos', url: '/'}, {text: 'Chat', url: '/'}, {text: 'Contact Us', url: '/'},{text: 'Push Notification', url: '/'}
    // ]
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
      };
    const handleClose = () => {
    setAnchorEl(null);
  };
    const list = (anchor) => (
        <Box
            sx={{width: 250}}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                {studentMenuList.map((obj, index) => (
                    <ListItem button key={obj.text}>
                        <Link to={obj.url}>
                            <ListItemText primary={obj.text}/>
                        </Link>
                    </ListItem>
                ))}
            </List>
            {/*<Divider />*/}
            {/*<List>*/}
            {/*  {['All mail', 'Trash', 'Spam'].map((text, index) => (*/}
            {/*    <ListItem button key={text}>*/}
            {/*      <ListItemIcon>*/}
            {/*        {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}*/}
            {/*      </ListItemIcon>*/}
            {/*      <ListItemText primary={text} />*/}
            {/*    </ListItem>*/}
            {/*  ))}*/}
            {/*</List>*/}
        </Box>
    );
    return (
        <Box sx={{display: 'flex', flexGrow: 1, flexDirection: 'row', bgcolor: '#fafafa'}}>
            <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                // aria-controls={menuId}
                aria-haspopup="true"
                onClick={toggleDrawer('left', true)}
                color="inherit"
                sx={{marginTop: 2, marginLeft: 1,}}
            >
                <MenuIcon sx={{fontSize: 30}}/>
            </IconButton>
            <Drawer
                // anchor={anchor}
                open={state['left']}
                onClose={toggleDrawer('left', false)}
            >
                {list('left')}
            </Drawer>
            <div style={{marginTop:35,marginLeft:8}}><img src={`${process.env.PUBLIC_URL}/img/logo.png`} alt='user'/></div>
            <IconButton
                onClick={()=>history.push('/search')}
                size="large"
                edge="end"
                aria-label="account of current user"
                // aria-controls={menuId}
                aria-haspopup="true"
                color="inherit"
                sx={{marginTop: 2, flex: 2, justifyContent: 'flex-end'}}
            >
                <SearchIcon sx={{fontSize: 25}}/>
            </IconButton>

            <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                // aria-controls={menuId}
                aria-haspopup="true"

                color="inherit"
                sx={{marginTop: 2, justifyContent: 'flex-end'}}
            >
                <ShareOutlinedIcon sx={{fontSize: 25}}/>
            </IconButton>

            <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                // aria-controls={menuId}
                aria-haspopup="true"

                color="inherit"
                sx={{marginTop: 2, justifyContent: 'flex-end'}}
            >
                <Link to="/notifications"><NotificationsNoneIcon sx={{fontSize: 25}}/></Link>
            </IconButton>

            <IconButton
                onClick={handleClick}
                size="large"
                edge="end"
                aria-label="account of current user"
                // aria-controls={menuId}
                aria-haspopup="true"

                color="inherit"
                sx={{marginTop: 2, marginRight: 1, justifyContent: 'flex-end'}}
            >
                <img src={`${process.env.PUBLIC_URL}/img/user.png`} alt='user'/>
            </IconButton>
            <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                transformOrigin={{horizontal: 'right', vertical: 'top'}}
                anchorOrigin={{horizontal: 'right', vertical: 'bottom'}}
            >
                <MenuItem>
                    <img style={{marginRight:5}} src={`${process.env.PUBLIC_URL}/img/user.png`} alt='user'/> Profile
                </MenuItem>
                <Divider/>
                <MenuItem>
                    <ListItemIcon>
                        <Settings fontSize="small"/>
                    </ListItemIcon>
                    Change Password
                </MenuItem>
                <MenuItem>
                     <ListItemIcon>
                        <AutoAwesomeIcon fontSize="small"/>
                    </ListItemIcon>
                        Rewards
                </MenuItem>
                <MenuItem onClick={()=>history.push('/SignIn')}>
                    <ListItemIcon>
                        <Logout fontSize="small"/>
                    </ListItemIcon>
                    Logout
                </MenuItem>
            </Menu>

        </Box>
    )
}
