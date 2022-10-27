import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseDetails from '../../Pages/Shared/CourseDetails/CourseDetails';

const Course = () => {
    const allCourses = useLoaderData();
    return (
        <div>
            <div>
                {
                    allCourses.map(course => <CourseDetails
                    key = {course._id}
                    course = {course}
                    ></CourseDetails>)
                }
            </div>
        </div>
    );
};

export default Course;