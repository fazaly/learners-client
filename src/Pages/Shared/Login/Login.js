import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaRegUser } from "react-icons/fa";
import './Login.css';

const Login = () => {
    return (
        <div className="container-login">
            <div className="wrap-login p-t-50 p-b-90 p-l-50 p-r-50">
                <form className="login-form flex-sb flex-w" action="" method="post">
                    <span className="login-form-title">
                        <FaRegUser className='user'/>
                    </span>
                    <div className="wrap-input m-b-16">
                        <input className="input" type="email" name='email' placeholder="Email"/>
                        <span className="focus-input"></span>
                    </div>
                    <div className="wrap-input m-b-16">
                        <input className="input" type="password" placeholder="Password"/>
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
                        <Link className='text-black'>Forget Password?</Link>
                    </div>
                    <p className='m-t-17 text-center'>
                        Don't have an account yet?{' '}
                        <Link to='/register' className='hover:underline text-gray-600'>
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