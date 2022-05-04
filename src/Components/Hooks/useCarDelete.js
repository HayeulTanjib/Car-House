import axios from 'axios';
import { useState, useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../FireBase/firebase-config';

const useCarDelete = () => {

    const [allCars, setAllCars] = useState([]);    
    const [myCar, setMyCar] = useState([])
    const [user] = useAuthState(auth);

    useEffect(() => {
        const getAllCar = async () => {
            const { data } = await axios.get('http://localhost:5000/inventory')
            setAllCars(data)
           
        }
        getAllCar();
    }, [])

 

    useEffect(() => {
        const addMyCar = async () => {
            const url = (`http://localhost:5000/addmycar?email=${user?.email}`)
            const { data } = await axios.get(url)
            setMyCar(data)
        }
        addMyCar();
    }, [])



    const handleDelete = async(id) => {
        let deleteConfirm = window.confirm('Are You sure to Delete?');
        if (deleteConfirm) {
            await axios.delete(`http://localhost:5000/inventory/${id}`)
                .then(response => {
                    if (response.data.deletedCount > 0) {
                        const remaining = allCars.filter(cars => cars._id !== id);
                        setAllCars(remaining)
                    }
                })
        }
    }
    return [ myCar, handleDelete]

}

export default useCarDelete;