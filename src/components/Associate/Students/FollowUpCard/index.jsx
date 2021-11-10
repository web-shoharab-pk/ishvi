import React from 'react';
import '../Students.css';

const FollowUpCard = () => {
    return (
        <div>
            <div className="d-flex justify-content-around align-items-center follow_up_card_one">
                <div>
                    <img src={`${process.env.PUBLIC_URL}/img/Associate/image/logo1.png`} alt="" />
                </div>
                <div>
                    <h3 className="budget_text">Profile Analysics</h3>
                    <h4 className="budget_title">18 transictions</h4>

                </div>
                <div>
                    <h3 className="budget_text">$100</h3>
                    <h4 className="budget_title">51%</h4>
                </div>
            </div>
            <div className="d-flex justify-content-around align-items-center follow_up_card_two">
                <div>
                    <img src={`${process.env.PUBLIC_URL}/img/Associate/image/logo1.png`} alt="" />
                </div>
                <div>
                    <h3 className="budget_text">Shortlisting</h3>
                    <h4 className="budget_title">18 transictions</h4>

                </div>
                <div>
                    <h3 className="budget_text">$90</h3>
                    <h4 className="budget_title">91%</h4>
                </div>
            </div>

        </div>
    );
};

export default FollowUpCard;