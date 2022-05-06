import axios from 'axios';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../../FireBase/firebase-config';

const AddInventory = () => {

    const { register, handleSubmit } = useForm();
    const [user] = useAuthState(auth);

    const onSubmit = async (data, e) => {
        await axios.post('http://localhost:5000/addmycar', data)
        toast.success('Car Added Successfully')
        e.target.reset()
    }

    return (
        <div className='vh-100'>
            <h2 className='py-3'>Add Car to the Inventory</h2>
            <div className='' >
                <form className='mx-auto d-flex flex-column w-50 gap-3' onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("email")} value={user.email} />
                    <input {...register("name")} placeholder="Car Name" required/>
                    <input {...register("img")} placeholder="Image Link" required/>
                    <input {...register("description")} placeholder="Description" required/>
                    <input {...register("price")} placeholder="Price" />
                    <input {...register("quantity")} placeholder="Quantity" required/>
                    <input {...register("supplier_name")} placeholder="Supplier Name" required/>
                    <input type="submit" className='btn btn-primary' value={'Add Car'} />
                </form>
                <ToastContainer/>
            </div>
        </div>
    );
};

export default AddInventory;
