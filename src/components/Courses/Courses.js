import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';

const Courses = () => {

    const readMore = useLoaderData();
    const {category_id, instructor, details, image_url, rating, title} = readMore

    return (
        <Card>  
            <Card.Img variant="top" style = {{width: '600px'}} src={image_url} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                {details}
                
                </Card.Text>
                <Link to = {`/category/${category_id}`}>
                <Button className = "text-white fs-5" variant="info">All the news in this category</Button>
                </Link>
            </Card.Body>
        </Card>
    );
};

export default Courses;