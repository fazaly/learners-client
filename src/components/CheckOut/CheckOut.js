import React from 'react';
import {useLoaderData } from 'react-router-dom';
import CheckoutCourse from '../CheckoutCourse/CheckoutCourse';

const CheckOut = () => {

    const courseName = useLoaderData();
    console.log(courseName)
    return (
        <div>
            <h2 className='fw-bold text-center mb-4'>Your Checkout Course</h2>
            {
                courseName.map(name => <CheckoutCourse
                
                key = {name._id}
                name = {name}
                
                >
                </CheckoutCourse>)  
            }
        </div>
    )

    
};

export default CheckOut;