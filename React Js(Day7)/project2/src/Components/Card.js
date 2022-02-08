import React from "react";
import { Card, Button } from "react-bootstrap";

function Cards(props) {
  return (
    <div className="alpha">
        <Card.Body>
        <Card.Img variant="top" src="https://i.pinimg.com/736x/0a/53/c3/0a53c3bbe2f56a1ddac34ea04a26be98.jpg" 
        style={{ width:'7%', float:'left' }}/>
          <Card.Title><h3 style={{float:'left', marginleft:'10px'}}>
            {props.title}</h3></Card.Title>
          <Card.Text>
           <p style={{marginLeft:'10px', float:'left'}}> {props.time}</p>
          </Card.Text>
          <Card.Text sttyle={{display:'flex'}}>
            <b>{props.comments}</b>
          </Card.Text>
        </Card.Body>
    </div>
  );
}

export default Cards;
