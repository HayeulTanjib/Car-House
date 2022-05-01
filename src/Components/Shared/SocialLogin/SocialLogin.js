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
            <Button variant='primary' onClick={handleGoogleSignin}>Signin With Google</Button>
        </div>
    );
};

export default SocialLogin;