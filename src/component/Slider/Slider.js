import React from 'react';
import Banner from '../../images/banner.jpg'
import './Slider.css'

const Slider = () => {
    return (
        <div className = "slider">
            <img className = "slider__img" src={Banner} alt="" />
        </div>
    );
};

export default Slider;