// CatCard.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./CatCard.scss";

function CatCard({ card }) {
  const { cat } = card;

  return (
    <Link to={`/gigs?cat=${encodeURIComponent(cat)}`}>
      <div className="catCard">
        <img src={card.img} alt="" />
        <span className="title">{card.title}</span>
      </div>
    </Link>
  );
}

export default CatCard;
