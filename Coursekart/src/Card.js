import React from "react";
import "./Card.css";

function Card(props) {
  const { image, head, description, link, rating, price } = props;
  return (
    <div className="container">
      <div className="box">
        <img src={image} alt="pitcha" />
        <h5>
          <b />
          {head}
        </h5>
        <p>{description}</p>
        <p>{rating}</p>
        <a href={link}>
          <b />
          {price}
        </a>
      </div>
    </div>
  );
}

export default Card;
