import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {
    Card, CardText, CardBody, CardLink,
    CardTitle, CardSubtitle, CardImg
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const TraNequa = (props) => {

    const [traNequaInfo, setTraNequaInfo] = useState([])

    useEffect(() => {
        axios.get('https://api.github.com/users/TraNequaFauntleroy')
            .then(res => {
                setTraNequaInfo(res.data)
            })
            .catch(err => {
                console.error(err)
            })
    }, [])

    return (
        <>
            <Card className='mx-auto my-5' style={{ width: '40%', backgroundColor: 'lightgray' }}>
                <CardImg
                    src='https://avatars.githubusercontent.com/u/86528475?v=4'
                    alt='github user avatar'
                    className='w-50 mx-auto mt-5'
                />
                <CardBody>
                    <CardTitle>{traNequaInfo.name}</CardTitle>
                    <CardSubtitle>Github: <CardLink style={{ textDecoration: 'none', color: 'black' }} href='https://github.com/TraNequaFauntleroy'>https://github.com/TraNequaFauntleroy</CardLink></CardSubtitle>
                    <CardSubtitle>Location: {traNequaInfo.location}</CardSubtitle>
                    <CardText>TraNequa worked on creating the backend for the aplication using Node.js.</CardText>
                </CardBody>
            </Card>
        </>
    )
}

export default TraNequa