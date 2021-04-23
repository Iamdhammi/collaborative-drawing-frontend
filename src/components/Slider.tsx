import React from 'react';
import Slider from "react-slick";


const HomeSlider: React.FC = ({ children }) => {

    const settings = {
        dots: false,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear"
    };

    return (
        <div style={{width: '90%'}}>
            <Slider {...settings}>
                {children}
            </Slider>
        </div>
    )
}

export default HomeSlider;