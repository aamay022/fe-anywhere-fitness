import React from 'react';
import {
  Card, CardImg, CardBody,
  CardTitle, CardSubtitle
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import './HomeCards.css'
const Cards = (props) => {
  return (
    <div className='card-container'>
      <Card className='m-1'>
        <CardImg top width="100%" src='https://images.unsplash.com/photo-1598136490941-30d885318abd?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nzd8fGZpdG5lc3N8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">Cardio</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">Break a sweat</CardSubtitle>
          {/* <Button>Sweat</Button> */}
        </CardBody>
      </Card>
      <Card className='m-1'>
        <CardImg top width="100%" src='https://images.unsplash.com/photo-1599058917727-824293170100?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTI2fHxmaXRuZXNzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">Endurance</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">Power through obstacles</CardSubtitle>
          {/* <Button>Endure</Button> */}
        </CardBody>
      </Card>

      <Card className='m-1'>
        <CardImg top width="100%" src='https://images.unsplash.com/photo-1598632640487-6ea4a4e8b963?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nzh8fGZpdG5lc3N8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">Core Training</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">Flex that core</CardSubtitle>
          {/* <Button>Flex</Button> */}
        </CardBody>
      </Card>
      <Card className='m-1'>
        <CardImg top width="100%" src='https://images.unsplash.com/photo-1598136490929-292a0a7890c2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTI3fHxmaXRuZXNzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">Strength Training</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">Feel powerful</CardSubtitle>
          {/* <Button>Lift</Button> */}
        </CardBody>
      </Card>
    </div>
  );
};

export default Cards;