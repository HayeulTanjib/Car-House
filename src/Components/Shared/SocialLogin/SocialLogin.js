import React from 'react';
import { Button } from 'react-bootstrap';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../FireBase/firebase-config';
import Loading from '../Loading/Loading';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    const location = useLocation();

    const handleGoogleSignin = () => {
        signInWithGoogle()
    }

    const from = location.state?.from?.pathname || "/";
    if (user) {
        navigate(from, { replace: true });
    }

    if(loading){
       return <Loading/>
    }
    return (
        <div>
            <div className='d-flex container justify-content-center align-items-center py-3'>
                <hr className='w-25' />
                <p className='mx-2'>or</p>
                <hr className='w-25' />
            </div>
            <>
            {error ? <p className='text-danger'>{error.message}</p> : "" }
            </>
            <div>
            <button className='btn btn-outline-dark px-5' onClick={handleGoogleSignin}> <i class="fa-brands fa-google me-2"></i> Signin With Google</button>
            </div>
        </div>
    );
};

export default SocialLogin;