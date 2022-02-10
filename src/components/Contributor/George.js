import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {
    Card, CardText, CardBody, CardLink,
    CardTitle, CardSubtitle, CardImg
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const George = (props) => {

    const [georgeInfo, setGeorgeInfo] = useState([])

    useEffect(() => {
        axios.get('https://api.github.com/users/cavazosgeorge')
            .then(res => {
                setGeorgeInfo(res.data)
            })
            .catch(err => {
                console.error(err)
            })
    }, [])

    return (

        <>
            <Card className='mx-auto my-5' style={{ width: '40%', backgroundColor: 'lightgray' }}>
                <CardImg
                    src='https://avatars.githubusercontent.com/u/65411983?v=4'
                    alt='github user avatar'
                    className='w-50 mx-auto mt-5'
                />
                <CardBody>
                    <CardTitle>{georgeInfo.name}</CardTitle>
                    <CardSubtitle>Github: <CardLink style={{ textDecoration: 'none', color: 'black' }} href='https://github.com/cavazosgeorge'>https://github.com/cavazosgeorge</CardLink></CardSubtitle>
                    <CardSubtitle>Location: {georgeInfo.location}</CardSubtitle>
                    <CardText>George worked on creating the backend for the application using Node.js.</CardText>
                </CardBody>
            </Card>
        </>
    )
}

export default George