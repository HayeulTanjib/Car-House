import React from 'react';

const Footer = () => {
    return (

<div className=" mt-5">

  <footer
          className="text-center text-lg-start text-white"
          style={{backgroundColor: '#1c2331'}}
          >
  
    <section className="pt-1">
      <div className="container text-center text-md-start mt-5">
        <div className="row mt-3">
          <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
            <h6 className="text-uppercase fw-bold">Car House</h6>
            <hr
                className="mb-4 mt-0 d-inline-block mx-auto"
                style={{width: '60px', backgroundColor: '#7c4dff', height: '2px'}}
                />
            <p>
              Car House is Leading Warehouse in Bangladesh. We have over ten thousand car capacity. One the the biggest and beastest in the country. 
            </p>
          </div>
        
          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
            
            <h6 className="text-uppercase fw-bold">Car Vendors</h6>
            <hr
                className="mb-4 mt-0 d-inline-block mx-auto"
                style={{width: '60px', backgroundColor: '#7c4dff', height: '2px'}}
                />
            <p>
              <a href="#!" className="text-white">CDI Autos</a>
            </p>
            <p>
              <a href="#!" className="text-white">MKV Line</a>
            </p>
            <p>
              <a href="#!" className="text-white">Venex Auto</a>
            </p>
            <p>
              <a href="#!" className="text-white">Velor</a>
            </p>
          </div>
          
          <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
            <h6 className="text-uppercase fw-bold">Useful links</h6>
            <hr
                className="mb-4 mt-0 d-inline-block mx-auto"
                style={{width: '60px', backgroundColor: '#7c4dff', height: '2px'}}
                />
            <p>
              <a href="#!" className="text-white">Car Tendar</a>
            </p>
            <p>
              <a href="#!" className="text-white">Maintenance</a>
            </p>
            <p>
              <a href="#!" className="text-white">Shipping Rates</a>
            </p>
            <p>
              <a href="#!" className="text-white">Help</a>
            </p>
          </div>
         
          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
            <h6 className="text-uppercase fw-bold">Contact</h6>
            <hr
                className="mb-4 mt-0 d-inline-block mx-auto"
                style={{width: '60px', backgroundColor: '#7c4dff', height: '2px'}}
                />
            <p><i className="fas fa-home mr-3"></i> Baridhara, BD 10012, BS</p>
            <p><i className="fas fa-envelope mr-3"></i> info@carhouse.com</p>
            <p><i className="fas fa-phone mr-3"></i> + 01 234 567 88</p>
            <p><i className="fas fa-print mr-3"></i> + 01 234 567 89</p>
          </div>
        </div>
      </div>
    </section>
    
    <div
         className="text-center p-3"
         style={{backgroundColor: 'rgba(0, 0, 0, 0.2)'}}
         >
                     <p>&copy; Copyright : Car house | {new Date().getFullYear()} </p> 
     
    </div>

  </footer>


</div>

        
        
    );
};

export default Footer;