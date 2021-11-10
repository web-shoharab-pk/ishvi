import React from 'react';

const Icons = () => {
    return (
        <div className="icons_section">
            <img src={`${process.env.PUBLIC_URL}/img/icons/whatsapp.svg`} className="icon" alt="" />
            <img src={`${process.env.PUBLIC_URL}/img/Mentor/newcall.png`} className="icon" alt="" />
            <img src={`${process.env.PUBLIC_URL}/img/Mentor/newchat4.png`} className="icon" alt="" />
            <img src={`${process.env.PUBLIC_URL}/img/Mentor/share.svg`} className="icon" alt="" />
        </div>
    );
};

export default Icons;