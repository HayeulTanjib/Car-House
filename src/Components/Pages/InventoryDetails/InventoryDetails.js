import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { Button, Card, Form } from 'react-bootstrap';
import { useParams, Link } from 'react-router-dom';
import './InventoryDetails.css';


const InventoryDetails = () => {
    const { id } = useParams()
    const [car, setCar] = useState({});
    const numberRef = useRef();
    const { name, img, quantity, description, price, supplier_name } = car;



    useEffect(() => {
        const getCar = async () => {
            const { data } = await axios.get(`https://gentle-bayou-59489.herokuapp.com/inventory/${id}`)
            setCar(data)
        }
        getCar();
    }, []);

    //setCar([...car, {quantity: carQuantity}])

    const handleDelivered = async () => {
        const carQuantity = (car.quantity - 1);
        await axios.put(`https://gentle-bayou-59489.herokuapp.com/inventory/${id}`, {
            quantity: carQuantity
        })
        setCar({ ...car, quantity: carQuantity });
    }

    //Restock form
    const handleRestockForm = async (e) => {
        e.preventDefault();

        const num = parseInt(numberRef.current.value);
        const carQuantity = parseInt(car.quantity + num);
        await axios.put(`https://gentle-bayou-59489.herokuapp.com/inventory/${id}`, {
            quantity: carQuantity
        })
        setCar({ ...car, quantity: carQuantity });
        e.target.reset();
    }


    return (
        <div className='container mx-auto'>
            <h2>Inventory Details</h2>
            <div className='d-flex flex-column flex-md-row justify-content-center align-items-center gap-5 '>
                <div className=''>
                    <Card className='mx-auto mt-5' style={{ width: '28rem' }}>
                        <Card.Img variant="top" className='w-full' src={img} />
                        <Card.Body>
                            <Card.Title>{name}</Card.Title>
                            <h6>Price: {price}$</h6>
                            <h6>Quantity:  {quantity >= 1 ? quantity : <span className='text-danger'>Sold Out!</span>}</h6>
                            <p>Supplier Name: {supplier_name}</p>
                            <Card.Text>
                                {description}
                            </Card.Text>
                            <Button variant="primary" onClick={handleDelivered} >Deliverd</Button>
                        </Card.Body>
                    </Card>
                </div>
                <div className='separator d-none d-md-block'></div>
                <div className='border p-5'>
                    <h4 className='mb-5 '>Restock Car</h4>
                    <Form onSubmit={handleRestockForm}>
                        <Form.Group className="" controlId="formBasicNumber">
                            <Form.Control ref={numberRef} type="number" placeholder="Enter Number" min="0" required />
                            <Button variant="primary" type="submit" className="px-5 my-3">
                                Restock
                            </Button> <br />
                            <Link className='btn btn-warning mt-3' to={`/manage-inventory`}>Manage Inventory</Link>
                        </Form.Group>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default InventoryDetails;