import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../FireBase/firebase-config';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useLocation, useNavigate } from 'react-router-dom';
import SocialLogin from '../../Shared/SocialLogin/SocialLogin';


const Login = () => {
    const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending, passwordResetError] = useSendPasswordResetEmail(auth);


    const navigate = useNavigate();
    const location = useLocation();

    const emailRef = useRef("");
    const passwordRef = useRef("");

    const handleLoginForm = (e) => {
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password)
    }

    const handlePasswordReset = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast.success("Password Reset Email Sent");
        }
        else{
            toast.error("Enter Your Email 1st");
        }
    }


    const from = location.state?.from?.pathname || "/";
    if (user) {
        navigate(from, { replace: true });
    }


    return (
        <div>
            <h2 className='py-3'>Login</h2>
            <Form className="w-50 mx-auto" onSubmit={handleLoginForm}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>
                {error && <p className='text-danger'>{error.message}</p>}
                
                <Button variant="primary" type="submit">
                    Login
                </Button>
                <p>Forgot Password? <button onClick={handlePasswordReset} className='py-0 btn btn-danger'>Reset Password</button></p>
            </Form>
            <SocialLogin />
            <ToastContainer />
        </div>
    );
};

export default Login;