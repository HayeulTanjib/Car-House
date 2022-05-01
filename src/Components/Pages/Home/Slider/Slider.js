import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';

const Slider = () => {

    const [index, setIndex] = useState(0)
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <div>
            <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                    <img
                        className="d-block img-fluid w-100"
                        src="https://i.ibb.co/yYYC9qm/b1.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Wild And Nature</h3>
                        <p>“ You only need a beautiful heart.”</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block img-fluid w-100"
                        src="https://i.ibb.co/vJg7Mjh/b3.jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Wild And Free</h3>
                        <p>“Nature is the mother of all fine art.”</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block img-fluid w-100"
                        src="https://i.ibb.co/njtLVk4/b2.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Wild And Peace</h3>
                        <p>
                            "For me, Every day is Photography Day."
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

        </div>
    );
};

export default Slider;