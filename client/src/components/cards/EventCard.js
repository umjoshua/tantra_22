import React from "react";
import { Link } from "react-router-dom";

import "./Cards.css";

function EventCard(props) {
  return (
    <div className="event_card">
      <img src={props.imgsrc} alt="workshop" />
      <h2 className="event_title">{props.title}</h2>
      <div className="event_details">
        <p>{props.text}</p>
        <div className="event_btns">
          <Link to={props.explore} className="btn">Explore</Link>
        </div>
      </div>
    </div>
  );
}

export default EventCard;
