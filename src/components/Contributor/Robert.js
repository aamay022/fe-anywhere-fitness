import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {
    Card, CardText, CardBody, CardLink,
    CardTitle, CardSubtitle, CardImg
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Robert = (props) => {

    const [robertInfo, setRobertInfo] = useState([])

    useEffect(() => {
        axios.get('https://api.github.com/users/RobertVonDerBecke')
            .then(res => {
                setRobertInfo(res.data)
            })
            .catch(err => {
                console.error(err)
            })
    }, [])

    return (
        <>
            <Card className='mx-auto my-5' style={{ width: '40%', backgroundColor: 'lightgray' }}>
                <CardImg
                    src='https://avatars.githubusercontent.com/u/64812950?v=4'
                    alt='github user avatar'
                    className='w-50 mx-auto mt-5'
                />
                <CardBody>
                    <CardTitle>{robertInfo.name}</CardTitle>
                    <CardSubtitle>Github: <CardLink style={{ textDecoration: 'none', color: 'black' }} href='https://github.com/RobertVonDerBecke'>https://github.com/RobertVonDerBecke</CardLink></CardSubtitle>
                    <CardSubtitle>Location: {robertInfo.location}</CardSubtitle>
                    <CardText>Robert worked on the frontend.</CardText>
                </CardBody>
            </Card>
        </>
    )
}

export default Robert