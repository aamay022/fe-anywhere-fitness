import axios from 'axios';
import React, { useState, useEffect } from 'react'
import {
    Card, CardText, CardBody, CardLink,
    CardTitle, CardSubtitle, CardImg
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Anthony = (props) => {

    const [anthonyInfo, setAnthonyInfo] = useState([])

    useEffect(() => {
        axios.get('https://api.github.com/users/aamay022')
            .then(res => {
                setAnthonyInfo(res.data)
            })
            .catch(err => {
                console.error(err)
            })
    }, [])

    return (
        <>
            <Card className='mx-auto my-5' style={{ width: '40%', backgroundColor: 'lightgray' }}>
                <CardImg
                    src='https://avatars.githubusercontent.com/u/80369725?v=4'
                    alt='github user avatar'
                    className='w-50 mx-auto mt-5'
                />
                <CardBody>
                    <CardTitle>{anthonyInfo.name}</CardTitle>
                    <CardSubtitle>Github: <CardLink style={{ textDecoration: 'none', color: 'black' }} href='https://github.com/aamay022'>https://github.com/aamay022</CardLink></CardSubtitle>
                    <CardSubtitle>Locale: {anthonyInfo.location}</CardSubtitle>
                    <CardText>Anthony worked on the frontend with Reactstrap/Bootstrap to style the site.</CardText>
                </CardBody>
            </Card>
        </>
    )
}

export default Anthony