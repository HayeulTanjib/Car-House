import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import './Slider.module.css';

const Slider = () => {

    const [index, setIndex] = useState(0)
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
  

    return (
        <div className='slider'>
            <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                    <img
                        className="d-block img-fluid w-100 "
                        src="https://i.ibb.co/hM6t1kL/pexels-sebastian-pichard-6894432.jpg"
                        alt="First slide"
                        
                    />
                    <Carousel.Caption>
                        <h2>Elegance</h2>
                        <h4>“ The cars we drive say a lot about us.”</h4>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block img-fluid w-100"
                        src="https://i.ibb.co/ggQw0T2/pexels-supreet-7942892.jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h2>Wild And Free</h2>
                        <h4>“We aren't addicted to oil, but our cars are”</h4>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block img-fluid w-100"
                        src="https://i.ibb.co/njtLVk4/b2.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h2>Attitude</h2>
                        <h4>
                            "A car for every purse and purpose."
                        </h4>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

        </div>
    );
};

export default Slider;