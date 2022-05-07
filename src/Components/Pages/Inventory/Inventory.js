import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';

const Inventory = () => {
    const [cars, setCars] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        const getCars = async () => {
            const { data } = await axios.get('https://gentle-bayou-59489.herokuapp.com/inventory')
            setCars(data)
            setLoading(false)
        }
        getCars();
    }, [])


    return (
        <>
            {loading ?  <div className='mt-5'><Loading /></div> : (
                  
        <div>
            <h1 className='text-center mt-5'> Inventory</h1>
            <hr className='w-25 mx-auto mb-5' />
            <div className="container ">
                <div className='row'>
                    {
                        cars.slice(0, 6).map(car => {
                            const { name, img, price, description, supplier_name, quantity } = car;

                            return (
                                <div key={car._id} className="col-12 col-md-4 pb-5 d-flex justify-content-center align-items-center">

                                    <Card style={{ width: '22rem' }} className="shadow-lg">
                                        <Card.Img variant="top" className='img-thumbnail' src={img} />
                                        <Card.Body>
                                            <Card.Title><h3>{name}</h3></Card.Title>
                                            <b>Price: {price}$</b>
                                            <h6>Quantity:  {quantity >= 1 ? quantity : <span className='text-danger'>Sold Out!</span>}</h6>
                                            <h6>Supplier Name: {supplier_name}</h6>
                                            <Card.Text>
                                                {description.slice(0, 100) + "..."}
                                            </Card.Text>
                                            <Link className='btn btn-secondary fw-bold' to={`/inventory/${car._id}`}>Update</Link>
                                        </Card.Body>
                                    </Card>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
            <div className='py-3'>
                <Link className='btn btn-warning fw-bold px-5' to={`/manage-inventory`}>Manage Inventory</Link>
            </div>
        </div>
         )}
         </>

    )
};

export default Inventory;