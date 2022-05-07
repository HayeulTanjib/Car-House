import React from 'react';
import Inventory from '../Inventory/Inventory';
import BrandSlider from './BrandSlider/BrandSlider';
import ContactMap from './ContactMap/ContactMap';
import Slider from './Slider/Slider';

const Home = () => {
    return (
        <div>
            <Slider/>
            <Inventory/>
            <BrandSlider/>
            <ContactMap/>
        </div>
    );
};

export default Home;