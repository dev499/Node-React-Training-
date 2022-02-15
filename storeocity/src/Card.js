import React from "react";
import "./Card.css";

function Card(props) {
  const { image, head, description, link } = props;
  return (
    <div className="container">
      <div className="box">
        <img src={image} alt="pitcha" className="header"/>
        <p>Category</p>
        <h5>
          <b />
          {head}
        </h5>
        <p>{description}</p>
        <a href={link}>
          <b />
          Read Full Story...
        </a>
      </div>
    </div>
  );
}

export default Card;