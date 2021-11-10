import React from 'react';

const FollowUpCard = () => {
    return (
        <div className="">
            <div className="d-flex justify-content-around align-items-center follow_up_card_one">
                <div>
                    <img src={`${process.env.PUBLIC_URL}/img/Associate/image/logo1.png`} alt="" />
                </div>
                <div>
                    <h3 className="budget_text">Not Started</h3>
                    <h4 className="budget_title">18 transictions</h4>

                </div>
                <div>
                    <h3 className="budget_text">99%</h3>
                    <h4 className="budget_title">51%</h4>
                </div>
            </div>
            <div className="d-flex justify-content-around align-items-center follow_up_card_two">
                <div>
                    <img src={`${process.env.PUBLIC_URL}/img/Associate/image/logo1.png`} alt="" />
                </div>
                <div>
                    <h3 className="budget_text">Yet to Fill</h3>
                    <h4 className="budget_title">18 transictions</h4>

                </div>
                <div>
                    <h3 className="budget_text">99%</h3>
                    <h4 className="budget_title">51%</h4>
                </div>
            </div>

        </div>
    );
};

export default FollowUpCard;