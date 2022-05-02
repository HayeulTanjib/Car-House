import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { Button, Card, Form } from 'react-bootstrap';
import { useParams, Link } from 'react-router-dom';


const InventoryDetails = () => {
    const { id } = useParams()
    const [car, setCar] = useState({});
    const numberRef = useRef();

    useEffect(() => {
        const getCar = async () => {
            const { data } = await axios.get(`http://localhost:5000/inventory/${id}`)
            setCar(data)
        }
        getCar();
    }, []);

    //setCar([...car, {quantity: carQuantity}])

    const handleDelivered = async () => {
        const carQuantity = (car.quantity - 1);
        await axios.put(`http://localhost:5000/inventory/${id}`, {
            quantity: carQuantity
        })
        setCar({ ...car, quantity: carQuantity });
    }

    //Restock form
    const handleRestockForm = async(e) => {
        e.preventDefault();

        const num = parseInt(numberRef.current.value);
        const carQuantity = parseInt(car.quantity + num);
        await axios.put(`http://localhost:5000/inventory/${id}`, {
            quantity: carQuantity
        })
        setCar({ ...car, quantity: carQuantity });
        e.target.reset();
    }


    return (
        <div className='vh-100'>
            <h2>Inventory Details</h2>

            <div className=''>
                <Card className='mx-auto mt-5' style={{ width: '28rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>{car.name}</Card.Title>
                        <p>{car.quantity}</p>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <Button variant="primary" onClick={handleDelivered} >Deliverd</Button>
                    </Card.Body>
                </Card>
            </div>
            <div className='mt-5 w-25 mx-auto'>
                <Form onSubmit={handleRestockForm}>
                    <Form.Group className="mb-3" controlId="formBasicNumber">
                        <Form.Control ref={numberRef} type="number" placeholder="Enter Number" required />
                        <Button variant="primary" type="submit" className="mt-3">
                            Restock
                        </Button>
                        <Link className='btn btn-primary' to={`/manage-inventory`}>Manage Inventory</Link>
                    </Form.Group>
                </Form>
            </div>
        </div>
    );
};

export default InventoryDetails;