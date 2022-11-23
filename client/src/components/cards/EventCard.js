import React from "react";
import { Link, useNavigate } from "react-router-dom";

import "./Cards.css";

function EventCard(props) {
  let navigate = useNavigate();

  return (
    <div className="event_card">
      <img src={props.imgsrc} alt="workshop" />
      <h2 className="event_title">{props.title}</h2>
      <div className="event_details">
        <p>{props.text}</p>
        <div className="event_btns">
          <button className="btn" onClick={() => navigate(props.explore)}>Explore</button>
        </div>
      </div>
    </div>
  );
}

export default EventCard;
