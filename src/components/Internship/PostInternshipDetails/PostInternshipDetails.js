import React from 'react';
import { Link } from 'react-router-dom';
import City from '../Collaps/City';
import Details from '../Collaps/Details';
import Duaration from '../Collaps/Duaration';
import Internship from '../Collaps/Internship';
import LastResponsibilities from '../Collaps/LastResponsibilities';
import Opinions from '../Collaps/Opinions';
import Responsibilites from '../Collaps/Responsibilites';
import Type from '../Collaps/Type';
import './PostInternshipDetails.css';



const PostInternshipDetails = () => {

    return (
        <div className="postInternship_section">
            <p className="faq_question mx-3">Post an internship?</p>
            <div className="d-flex justify-content-between align-items-center mx-3">
                <p className="help_text">Need assistance? Please </p>
                <p>
                    <Link className="help_text text-primary" to="#" >visit Help Center</Link>
                </p>

            </div>

            <div className="post_inernship_type_details py-1">

                <Details />
                <Type />
                <City />
                <Opinions />
                <Internship />
                <Duaration />
                <Responsibilites />
                <LastResponsibilities />

            </div>
            <br /><br /><br /><br />
        </div>
    );
};

export default PostInternshipDetails;