import React from 'react';
import { Button } from 'react-bootstrap';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../FireBase/firebase-config';
import Loading from '../Loading/Loading';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    const handleGoogleSignin = () => {
        signInWithGoogle()
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