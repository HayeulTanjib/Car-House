import React from 'react';
import Inventory from '../Inventory/Inventory';
import BrandSlider from './BrandSlider/BrandSlider';
import Slider from './Slider/Slider';

const Home = () => {
    return (
        <div>
            <Slider/>
            <Inventory/>
            <BrandSlider/>
        </div>
    );
};

export default Home;