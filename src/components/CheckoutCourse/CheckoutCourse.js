import React from 'react';

const CheckoutCourse = ({name}) => {
    const{title, image_url, details} = name;
    return (
        
        <div className='shadow p-4 mb-4 rounded-3 w-50 m-auto'>
            <img className = "img-fluid rounded-3" src={image_url} alt="" />
            <h2>{title}</h2>
            <>{details.length > 250 ?
            <p>{details.slice(0, 250) + '...'} </p>
            :
            <p>{details}</p>
            
            }</>
        </div>
    );
};

export default CheckoutCourse;