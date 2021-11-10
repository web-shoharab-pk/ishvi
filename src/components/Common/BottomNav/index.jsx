import { BottomNavigation, BottomNavigationAction, Paper } from '@mui/material';
import React from 'react';
import { useHistory } from 'react-router-dom';

export default function BottomNav() {
    const [value, setValue] = React.useState('recents');
    const history = useHistory();
    const handleChange = (event, newValue) => {
        setValue(newValue);
        if (newValue === 0) {
            history.push('/dashboard');
        }
        if (newValue === 1) {

        }
        // 
    };
    return (
        <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, pb: 2, pt: 1 }} elevation={3}>
            <BottomNavigation
                showLabels
                value={value} onChange={handleChange}
                sx={{ fontFamily: 'Montserrat' }}
            >
                <BottomNavigationAction onClick={()=>history.push('/dashboard')} sx={{ fontFamily: 'Montserrat' }} label="Home" icon={<img src={`${process.env.PUBLIC_URL}/img/icons/home.svg`} alt="" />} />
                <BottomNavigationAction onClick={()=>history.push('/ComingSoon')} label="Favorites" icon={<img src={`${process.env.PUBLIC_URL}/img/icons/heart.svg`} alt="" />} />
                <BottomNavigationAction onClick={()=>history.push('/ComingSoon')} label="Documents" icon={<img src={`${process.env.PUBLIC_URL}/img/icons/document.svg`} alt="" />} />
                <BottomNavigationAction onClick={()=>history.push('/ComingSoon')} label="Status" icon={<img src={`${process.env.PUBLIC_URL}/img/icons/moreCircle.svg`} alt="" />} />
                <BottomNavigationAction onClick={()=>history.push('/ComingSoon')} label="WhatsApp" icon={<img src={`${process.env.PUBLIC_URL}/img/icons/whatsapp.svg`} alt="" />} />
            </BottomNavigation>
        </Paper>
    )
}
