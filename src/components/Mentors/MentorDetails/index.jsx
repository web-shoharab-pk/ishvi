import React from 'react';
import "./MentorDetails.css";
import { AiFillStar } from 'react-icons/ai'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import Icons from './Icons';
import Box from "./Box"
import Description from './Description';

const MentorDetails = () => {

    return (
        <div className="mentor_details mt-5 mb-5">
            <div className="mentor_image">
                <img src={`${process.env.PUBLIC_URL}/img/Mentor/person.png`} alt="" />
            </div>
            <section className="mentor_description mt-5 mb-5">
                <div className="contact">
                    <h3>Sandeep</h3>
                    <Icons />
                </div>
                <div className="">
                    <p><HiOutlineLocationMarker /> Bangalore, India</p>
                    <p><AiFillStar style={{ color: "#F4C300" }} /> 50 Reviews</p>
                </div>
                    <Description />
                    <Box />
            </section>
        </div>
    );
};

export default MentorDetails;