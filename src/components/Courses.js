import React from 'react';
import Course from './Course';

const Courses = props => {
    const courses = props.courses.map(course => <Course key={course.id} {...course}/>);
    return (
        <div>
            {courses}
        </div>
    )

}



export default Courses;