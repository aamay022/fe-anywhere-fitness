import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {
    Card, CardText, CardBody, CardLink,
    CardTitle, CardSubtitle, CardImg
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Irvin = (props) => {

    const [irvingInfo, setIrvingInfo] = useState([])

    useEffect(() => {
        axios.get('https://api.github.com/users/IrvinA')
            .then(res => {
                setIrvingInfo(res.data)
            })
            .catch(err => {
                console.error(err)
            })
    }, [])

    return (
        <>
            <Card className='mx-auto my-5' style={{ width: '40%', backgroundColor: 'lightgray' }}>
                <CardImg
                    src='https://avatars.githubusercontent.com/u/87495756?v=4'
                    alt='github user avatar'
                    className='w-50 mx-auto mt-5'
                />
                <CardBody>
                    <CardTitle>{irvingInfo.name}</CardTitle>
                    <CardSubtitle>Github: <CardLink style={{ textDecoration: 'none', color: 'black' }} href='https://github.com/IrvinA'>https://github.com/IrvinA</CardLink></CardSubtitle>
                    <CardText>Irvin worked on the fronted with Redux and routing the website.</CardText>
                </CardBody>
            </Card>
        </>
    )
}

export default Irvin