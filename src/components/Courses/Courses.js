import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';

const Courses = () => {

    const readMore = useLoaderData();
    const {category_id, instructor, details, image_url, rating, title} = readMore;

    return (
        <Card className='align-items-center mt-4 me-5 ms-5 p-5 mb-5'>  
            <Card.Img className='rounded' variant="top" style = {{width: '100%'}} src={image_url} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                {details}
                </Card.Text>
                <Link to = {`/checkout/${category_id}`}>
                    <Button className = "bg-warning me-3 text-white fs-5" variant="">Get Premium Access</Button>
                </Link>
                <Link to='/course' className='btn btn-primary'>Back to Course</Link>
            </Card.Body>
        </Card>
    );
};

export default Courses;