import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaGithub, FaGoogle, FaRegUser, FaTwitter } from "react-icons/fa";
import './Login.css';
import { useContext } from 'react';
import { AuthContext } from '../../../context/AuthProvider';

const Login = () => {

    const {signIn, signInWithGoogle, signInWithGithub} = useContext(AuthContext);

    const handleSubmit = (event) => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        // Sign in with email & password
        signIn(email, password)
        .then( result => {
            const user = result.user;
            console.log(user);
            form.reset();
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
                        <p className='text-center fs-3'>Login</p>
                    </span>
                    <div className="wrap-input m-b-16">
                        <input className="input" type="email" name='email' placeholder="Email"/>
                        <span className="focus-input"></span>
                    </div>
                    <div className="wrap-input m-b-16">
                        <input className="input" type="password" name='password' placeholder="Password"/>
                        <span className="focus-input"></span>
                    </div>
                    <div className="container-login-form-btn m-t-17">
                        <div className="w-full text-center">
                            <Button className='container-login-form-btn' variant="primary" type="submit">
                                Login
                            </Button>
                        </div>
                    </div>
                    <div className="m-t-17">
                        <Link className='forget'>Forget Password?</Link>
                    </div>
                    <div className='text-center fs-6 mb-2 mt-3'>
                        <span>Sign In with social accounts</span>
                    </div>
                    <div className='text-center'>
                        <FaGithub onClick={handleGithubSignIn} className='me-3 font'/>
                        <FaGoogle onClick={handleGoogleSignIn} className='me-3 font'/>
                        <FaTwitter className='font'/>
                    </div>
                    <p className='m-t-17 text-center'>
                        Don't have an account yet?{' '}
                        <Link  to='/register' className='text-black'>
                            Sign up
                        </Link>
                    .
                    </p>
                </form>
            </div>
        </div> 
    );
};

export default Login;