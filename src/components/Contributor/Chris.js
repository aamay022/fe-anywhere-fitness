import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {
    Card, CardText, CardBody, CardLink,
    CardTitle, CardSubtitle, CardImg
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Chris = (props) => {

    const [chrisInfo, setChrisInfo] = useState([])

    useEffect(() => {
        axios.get('https://api.github.com/users/SaltStalactite')
            .then(res => {
                setChrisInfo(res.data)
            })
            .catch(err => {
                console.error(err)
            })
    }, [])

    return (
        <>
            <Card className='mx-auto my-5' style={{ width: '40%', backgroundColor: 'lightgray' }}>
                <CardImg
                    src='https://avatars.githubusercontent.com/u/86366749?v=4'
                    alt='github user avatar'
                    className='w-50 mx-auto mt-5'
                />
                <CardBody>
                    <CardTitle>{chrisInfo.name}</CardTitle>
                    <CardSubtitle>Github: <CardLink style={{ textDecoration: 'none', color: 'black' }} href='https://github.com/SaltStalactite'>https://github.com/SaltStalactite</CardLink></CardSubtitle>
                    <CardSubtitle>Location: {chrisInfo.location}</CardSubtitle>
                    <CardText>Chris worked on the frontend with Reactstrap/Bootstrap to style the site.</CardText>
                </CardBody>
            </Card>
        </>
    )
}

export default Chris