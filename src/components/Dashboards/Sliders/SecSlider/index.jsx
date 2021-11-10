import React, { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { secData } from './main'
import './SecSlider.css'

class secSlider extends Component {
    render() {
        const settings = {
            infinite: true,
            slidesToShow: 2,
        };
        return (
            <div className="container">
                <Slider {...settings}>
                    {secData.map((secData, ind) => {
                        console.log(secData)
                        return (
                            <div style={{ backgroundColor: "orange", width: "90%" }}>
                               
                            </div>
                        )
                    })}


                </Slider>
            </div>
        );
    }
}

export default secSlider;


