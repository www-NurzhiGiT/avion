import React from "react";
import "../style/Card.scss";
import { useNavigate } from "react-router-dom";

const Card = (props) => {
  const navigate = useNavigate();

  const onCardClick = () => {
    navigate(`/product/${props.id}`);
  };

  return (
    <div className="card" onClick={onCardClick}>
      <img src={props.image} alt="" />
      <div>
        <h3>{props.title}</h3>
        <p>{props.price}</p>
      </div>
    </div>
  );
};

export default Card;
