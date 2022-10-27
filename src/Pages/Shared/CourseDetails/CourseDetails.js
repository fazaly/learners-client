import React from 'react';
import { Link } from 'react-router-dom';
import { FaStar  } from 'react-icons/fa';
import { Image } from 'react-bootstrap';

const CourseDetails = ({course}) => {
    const {title, image_url, details, instructor, _id, rating} = course;
    return (
        <div className='shadow p-4 mb-4 rounded-3 mt-3'>
            <img className = "img-fluid rounded-3" src={image_url} alt="" />
            <h2>{title}</h2>
            <>{details.length > 250 ?
            <p>{details.slice(0, 250) + '...'} <Link to = {`/courses/${_id}`}>Read More</Link></p>
            :
            <p>{details}</p>
            
            }</>
            <div className='d-flex'>
                <Image 
                roundedCircle
                className='me-3'
                src={instructor.img}
                style = {{height: '80px'}}
                ></Image>
                <div>
                    <p className='mb-0'>{instructor.name}</p>
                    <p><small>Course Duration: {instructor.duration}</small></p>
                    <div className='d-flex'>
                        <div className='align-items-center'>
                            <FaStar className='text-warning me-2'></FaStar>
                            <FaStar className='text-warning me-2'></FaStar>
                            <FaStar className='text-warning me-2'></FaStar>
                            <FaStar className='text-warning me-2'></FaStar>
                            <FaStar className='text-warning me-2'></FaStar>
                        <span>{rating?.number}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseDetails;