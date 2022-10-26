import React from 'react';
import { useContext } from 'react';
import { Button } from 'react-bootstrap';
import toast from 'react-hot-toast';
import { FaRegUser, FaGithub, FaGoogle, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider';

const Register = () => {

    const {createUser, updateUserProfile, verifyEmail, signInWithGoogle, signInWithGithub} = useContext(AuthContext);

    // handle submit for finding name, photoURL, email & password
    const handleSubmit = (event) => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const photoURL = form.photoURL.value;
        const password = form.password.value;
        // console.log(name, email, photoURL, password);

        // create User for email & password
        createUser(email, password)
        .then( result => {
            const user = result.user;
            console.log(user);
            form.reset();
            handleUpdateUserProfile(name, photoURL);
            handleEmailVerification();
        })
        .catch( error => {
            console.error(error);
        })
    }

    // update user name & photoURL
    const handleUpdateUserProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }
        updateUserProfile(profile)
        .then( result => {
            toast.success('update user name & photo URL');
        })
        .catch( error => {
            console.error(error);
        })
    }

    // verify email
    const handleEmailVerification = () => {
        verifyEmail()
        .then( result => {
            toast.success("Please check your email for verification link");
        })
        .catch( error => {
            console.error(error);
        })
    }


    // Google Sign In
    const handleGoogleSignIn = () => {
        signInWithGoogle()
        .then( (result) => {
            const user = result.user;
            console.log(user);
        })
        .catch(error => {
            console.error(error);
        })
    }

    // Github Sign In
    const handleGithubSignIn = () => {
        signInWithGithub()
        .then( (result) => {
            const user = result.user;
            console.log(user);
        })
        .catch(error => {
            console.error(error);
        })
    }

    return (
        <div className="container-login">
            <div className="wrap-login p-t-50 p-b-90 p-l-50 p-r-50">
                <form onSubmit={handleSubmit} className="login-form flex-sb flex-w" action="" method="post">
                    <span className="login-form-title">
                        <FaRegUser className='user'/>
                        <p className='text-center fs-3'>Create a new account</p>
                    </span>
                    <div className="wrap-input m-b-16">
                        <input className="input" type="text" name='name' placeholder="Name" required/>
                    </div>
                    <div className="wrap-input m-b-16">
                        <input className="input" type="text" name='photoURL' placeholder="Photo URL"/>
                    </div>
                    <div className="wrap-input m-b-16">
                        <input className="input" type="email" name='email' placeholder="Email" required/>
                        <span className="focus-input"></span>
                    </div>
                    <div className="wrap-input m-b-16">
                        <input className="input" type="password" name='password' placeholder="Password"/>
                        <span className="focus-input"></span>
                    </div>
                    <div className="container-login-form-btn m-t-17">
                        <div className="w-full text-center">
                            <Button className='container-login-form-btn' variant="primary" type="submit">
                                Register
                            </Button>
                        </div>
                    </div>
                    <div className='text-center fs-6 mb-2 mt-3'>
                        <span>Sign Up with social accounts</span>
                    </div>
                    <div className='text-center'>
                        <FaGithub onClick={handleGithubSignIn} className='me-3 font'/>
                        <FaGoogle onClick={handleGoogleSignIn} className='me-3 font'/>
                        <FaTwitter className='font'/>
                    </div>
                    <p className='m-t-17 text-center'>
                        Already have an account yet?{' '}
                        <Link to='/login' className='hover:underline text-gray-600'>
                            Sign In
                        </Link>
                    .
                    </p>
                </form>
            </div>
        </div> 
    );
};

export default Register;