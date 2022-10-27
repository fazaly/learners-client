import React from 'react';
import { Link } from 'react-router-dom';
import { FaStar  } from 'react-icons/fa';
import { Button, Image } from 'react-bootstrap';
import Pdf from 'react-to-pdf';

const CourseDetails = ({course}) => {
    const ref = React.createRef();
    const {title, image_url, details, instructor, _id, rating} = course;
    return (
        <div className='shadow p-4 mb-4 rounded-3 mt-3'>
            <img className = "img-fluid rounded-3" src={image_url} alt="" />
            <h2 className='mt-3'>{title}</h2>
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
                <Pdf targetRef={ref} filename="course-example.pdf">
                                {({ toPdf }) => <Button className="bg-info ms-3 px-2 mt-5" onClick={toPdf}>Download</Button>}
                </Pdf>
                <div className='text-white' ref={ref}>
                    <span>r</span>
                </div>
            </div>
        </div>
    );
};

export default CourseDetails;