import React from 'react';
import chat from "../../../static/img/Mentor/newchat4.png"
import calling from "../../../static/img/Mentor/newcall.png"
import whatsapp from "../../../static/icons/whatsapp.svg"
import Share from "../../../static/img/Mentor/share.svg"

const Icons = () => {
    return (
        <div className="icons_section">
            <img src={whatsapp} className="icon" alt="" />
            <img src={calling} className="icon" alt="" />
            <img src={chat} className="icon" alt="" />
            <img src={Share} className="icon" alt="" />
        </div>
    );
};

export default Icons;