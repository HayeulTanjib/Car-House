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
            const { data } = await axios.get('https://gentle-bayou-59489.herokuapp.com/inventory')
            setAllCars(data)

        }
        getAllCar();
    }, [])



    useEffect(() => {
        const addMyCar = async () => {
            const url = (`https://gentle-bayou-59489.herokuapp.com/addmycar?email=${user?.email}`)
            const { data } = await axios.get(url)
            setMyCar(data)
        }
        addMyCar();
    }, [])



    const handleDelete = async (id) => {
        let deleteConfirm = window.confirm('Are You sure to Delete?');
        if (deleteConfirm) {
            await axios.delete(`https://gentle-bayou-59489.herokuapp.com/inventory/${id}`)
                .then(response => {
                    if (response.data.deletedCount > 0) {
                        const remaining = allCars.filter(cars => cars._id !== id);
                        setAllCars(remaining)
                    }
                })
        }
    }
    return [myCar, handleDelete]

}

export default useCarDelete;