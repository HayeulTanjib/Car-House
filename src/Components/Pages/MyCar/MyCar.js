import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../FireBase/firebase-config';

const MyCar = () => {

    const [myCar, setMyCar] = useState([])
    const [user] = useAuthState(auth);

    useEffect(() => {
        const addMyCar = async() => {
            const url = (`http://localhost:5000/addmycar?email=${user?.email}`)
            console.log(url);
            const {data} = await axios.get(url)
            setMyCar(data)
        }
        addMyCar();
    },[])

    console.log(myCar);

    return (
        <div className='vh-100'>
            <h2>My Car {myCar.length} </h2>
            <div>
            {
                myCar.map(car => <p>{car.name}</p>)
            }
            </div>
        </div>
    );
};

export default MyCar;