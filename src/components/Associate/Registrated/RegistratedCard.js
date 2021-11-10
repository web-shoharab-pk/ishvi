import React from 'react';
import logo1 from '../../../static/img/Associate/image//logo1.png'

const RegistratedCard = ({ register }) => {
    const { name, trans, dollar, persent } = register;
    return (
        <div className="d-flex justify-content-around align-items-center follow_up_card">
            <div>
                <img src={logo1} alt="" />
            </div>
            <div>
                <h3 className="budget_text">{name}</h3>
                <h4 className="budget_title">{trans}</h4>

            </div>
            <div>
                <h3 className="budget_text">{dollar}</h3>
                <h4 className="budget_title">{persent}</h4>
            </div>
        </div>
    );
};

export default RegistratedCard;