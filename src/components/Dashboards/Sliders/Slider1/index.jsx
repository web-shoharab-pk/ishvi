import React, { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './slider.css';
import { SliderData } from './SliderData'

class TopSlider extends Component {
    render() {
        const settings = {
            arrows: false,
            slidesToShow: 1,
            centerMode: true,
        };
        return (
            <div className="container">
                <Slider {...settings}>
                    {SliderData.map((data, ind) =>
                            <div key={ind}>
                                <div className="SmallCon">
                                <img src={`${process.env.PUBLIC_URL}/img/DashBoard/TopCard.png`} width="50%" alt="Credit to Joshua Earle on Unsplash" />
                                    <h2>{data.content}</h2>
                                </div>
                            </div>
                    )}


                </Slider>
            </div>
        );
    }
}

export default TopSlider;
