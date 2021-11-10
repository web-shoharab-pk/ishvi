import React from 'react';
import './Analysics.css';

const Analysics = () => {
    return (
        <div>
            <p className="normal_title mt-5 mb-3 mx-3">Analysics</p>
            <div className="d-flex justify-content-center">
                <img className="img-fluid" src={`${process.env.PUBLIC_URL}/img/Associate/image/analytics1.png`} alt="" />
                <img className="img-fluid" src={`${process.env.PUBLIC_URL}/img/Associate/image/analytics2.png`} alt="" />
            </div>
        </div>
    );
};

export default Analysics;