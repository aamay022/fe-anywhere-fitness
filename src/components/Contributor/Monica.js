import React, { useState, useEffect } from 'react'
import axios from 'axios';
import {
    Card, CardText, CardBody, CardLink,
    CardTitle, CardSubtitle, CardImg
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Monica = (props) => {

    const [monicaInfo, setMonicaInfo] = useState([])

    useEffect(() => {
        axios.get('https://api.github.com/users/monicasalas86')
            .then(res => {
                setMonicaInfo(res.data)
            })
            .catch(err => {
                console.error(err)
            })
    }, [])

    return (
        <>
            <Card className='mx-auto my-5' style={{ width: '40%', backgroundColor: 'lightgray' }}>
                <CardImg
                    src='https://avatars.githubusercontent.com/u/86384558?v=4'
                    alt='github user avatar'
                    className='w-50 mx-auto mt-5'
                />
                <CardBody>
                    <CardTitle>{monicaInfo.name}</CardTitle>
                    <CardSubtitle>Github: <CardLink style={{ textDecoration: 'none', color: 'black' }} href='https://github.com/monicasalas86'>https://github.com/monicasalas86</CardLink></CardSubtitle>
                    <CardSubtitle>Location: {monicaInfo.location}</CardSubtitle>
                    <CardText>Monica worked on the frontend with Redux and routing the website.</CardText>
                </CardBody>
            </Card>
        </>
    )
}

export default Monica