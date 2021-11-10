import React from 'react';

const Box = () => {
    return (
        <>
            <div className="box_section mt-5 mb-5">
                <div className="box">
                    <h6 className="highlight">Experience</h6>
                    <h5 className="bold_highlight">5 Years</h5>
                </div>
                <div className="box">
                    <h6 className="highlight">Student Served</h6>
                    <h5 className="bold_highlight">20</h5>
                </div>
            </div>

            <div className="box_section">
                <div className="box">
                    <h6 className="highlight">Countries</h6>
                    <h5 className="bold_highlight">UK, Ireland</h5>
                </div>
                <div className="box">
                    <h6 className="highlight">Location</h6>
                    <h5 className="bold_highlight">Bangalore</h5>
                </div>
            </div>
            <div className="">
                    <button className="book_btn">Book Now</button>
                </div>
        </>
    );
};

export default Box;