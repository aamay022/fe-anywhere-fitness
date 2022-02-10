import React from "react";
import { Card, CardTitle, CardText } from 'reactstrap';

const DisplayClass = (props) => {

    const { course } = props;

    return (
        <Card className='course-container'>
            <CardTitle>{course.class_name}</CardTitle>
            <CardText>
                Location: {course.class_location}<br/>
                Type: {course.class_type}<br/>
                Duration: {course.class_duration}<br/>
                Intensity: {course.class_intensity}<br/>
                Maximum Occupancy: {course.class_max_attendees}
            </CardText>
        </Card>
    )

}

export default DisplayClass;