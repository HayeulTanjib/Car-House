import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import auth from '../../../FireBase/firebase-config';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import SocialLogin from '../../Shared/SocialLogin/SocialLogin';
import Loading from '../../Shared/Loading/Loading';
import { Link } from 'react-router-dom';



const Register = () => {
    const emailRef = useRef("");
    const passwordRef = useRef("");

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});


   const handleRegisterForm = (e) => {
       e.preventDefault();
       const email = emailRef.current.value;
       const password = passwordRef.current.value;
       createUserWithEmailAndPassword(email, password);
       //clear input
       e.target.reset();
   }

   if(loading){
      <Loading/>
   }

    return (
        <div className='vh-100 mt-5'>
            <h2 className='py-3'>Register</h2>
            <Form className="w-50 mx-auto" onSubmit={handleRegisterForm}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" className='shadow-none' required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" minLength="6" className='shadow-none' required />
                </Form.Group>
                {error && <p className='text-danger'>{error.message}</p>}
                <Button className="mb-3" variant="primary" type="submit">
                    Register
                </Button>
                <div>
                <p className='text-center'>Already Member? <Button className='btn btn-warning my-2 py-0'><Link className='text-decoration-none text-dark' to="/login">Login Here</Link> </Button></p>
            </div>
            </Form>
            <SocialLogin/>
        </div>
    );
};

export default Register;