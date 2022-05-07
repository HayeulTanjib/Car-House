import React from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick/lib/slider';

const BrandSlider = () => {

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear"
      };

    return (
        <div className='mb-5'>
            <h2 className='pt-5'>Brands We Trust</h2>
            <hr className='w-25 mx-auto mb-5' />
            <div>
              <div>
        <Slider {...settings}>
          <div className=''>
            <img src="https://i.ibb.co/2ywTQGW/toyota-logo-removebg-preview.png" className='img-fluid' alt="" />
          </div>
          <div>
          <img src="https://i.ibb.co/VLYFb5M/Nissan-Logo-2.jpg" className='img-fluid w-50' alt="" />
          </div>
          <div>
          <img src="https://i.ibb.co/zPWbZpM/Mazda-Logo.png" className='img-fluid w-75' alt="" />
          </div>
          <div>
          <img src="https://i.ibb.co/CH0k604/Honda-svg.png" className='img-fluid w-50' alt="" />
          </div>
          <div>
          <img src="https://i.ibb.co/Jc441rM/Subaru-Logo.png" className='img-fluid w-75' alt="" />
          </div>
        </Slider>
        </div>
      </div>
        </div>
    );
};

export default BrandSlider;