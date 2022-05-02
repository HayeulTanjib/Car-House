import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Inventory = () => {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        const getCars = async () => {
            const { data } = await axios.get('http://localhost:5000/inventory')
            setCars(data)
        }
        getCars();
    }, [])


    return (
        <div>
            <h1 className='text-center mt-5'> Inventory </h1>
            <hr className='w-25 mx-auto mb-5' />
            <div className='row mx-auto'>
                {
                    cars.slice(0,6).map(car => {
                        const { name, img, price, description } = car;

                        return (
                            <div key={car._id} className="col-12 col-md-4 pb-5">

                                <Card style={{ width: '22rem' }} className="shadow-sm">
                                    <Card.Img variant="top" className='img-thumbnail' src={img} />
                                    <Card.Body>
                                        <Card.Title>{name}</Card.Title>
                                        <h5>{price}$</h5>
                                        <Card.Text>
                                            {description}
                                        </Card.Text>
                                        <Link className='btn btn-primary' to={`/inventory/${car._id}`}>Update</Link>
                                    </Card.Body>
                                </Card>
                            </div>
                        );
                    })
                }
            </div>
            <div className='py-3'>
            <Link className='btn btn-primary px-5' to={`/manage-inventory`}>Manage Inventory</Link>
            </div>
        </div>

    )
};

export default Inventory;