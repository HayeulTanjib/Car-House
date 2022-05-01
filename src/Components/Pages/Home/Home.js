import React from 'react';
import Inventory from '../Inventory/Inventory';
import Slider from './Slider/Slider';

const Home = () => {
    return (
        <div>
            <Slider/>
            <Inventory/>
        </div>
    );
};

export default Home;