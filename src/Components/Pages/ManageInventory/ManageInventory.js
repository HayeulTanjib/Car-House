import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Table, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ManageInventory = () => {

    const [allCars, setAllCars] = useState([]);    
    

    useEffect(() => {
        const getAllCar = async () => {
            const { data } = await axios.get('http://localhost:5000/inventory')
            setAllCars(data)
           
        }
        getAllCar();
    }, [])

    //Delete
    const handleDelete = async(id) =>{
        let deleteConfirm = window.confirm('Are you sure?')
        if(deleteConfirm){
        await axios.delete(`http://localhost:5000/inventory/${id}`)
        .then(response =>{
            if(response.data.deletedCount > 0){
                const remaining = allCars.filter(cars => cars._id !== id);
                setAllCars(remaining)
            }
        })
    }
    }


    return (
        <div className='container'>
            <h2 className='py-3'>Manage Inventory</h2>
            <Link className='btn btn-primary mb-3' to={'/addinventory'}>Add Car - Inventory</Link>
            <div>
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Car Name</th>
                            <th>Basic Information</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    {
                        
                        allCars.map((car, index) => {
                            const { name, price, quantity, supplier_name } = car;
                            
                            
                            return (
                                <>
                                    <tbody key={car._id}>
                                        <tr>
                                            <td>{index+1}</td>
                                            <td>{name}</td>
                                            <td>
                                                Price: {price}$ <br />
                                                Quantity: {quantity} <br />
                                                Supplier : {supplier_name} 
                                            </td>
                                            <td>
                                                <Button variant="danger" onClick={() => handleDelete(car._id)}>Delete</Button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </>
                            )
                        })
                    }
                </Table>
            </div>
        </div>
    );
};

export default ManageInventory;