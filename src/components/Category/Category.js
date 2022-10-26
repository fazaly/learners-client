import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseDetails from '../../Pages/Shared/CourseDetails/CourseDetails';

const Category = () => {

    const courses = useLoaderData();

    return (
        <div>
            <h2>Categoty has courses : {courses.length}</h2>
            {
                courses.map(course => <CourseDetails
                
                    key = {course._id}
                    course = {course}
                
                ></CourseDetails>)
            }
        </div>
    );
};

export default Category;