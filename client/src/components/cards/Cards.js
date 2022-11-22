import React from "react";

import "./Cards.css";
import WorkCard from "./EventCard";
import CardsData from "../../data/cardsData/CardsData";

function Cards() {
  return (
    <div className="event_cards">
      <h1 className="event_heading">Events</h1>
      <div className="event_container">
        {CardsData.map((value, index) => {
          return (
            <WorkCard
              key={index}
              imgsrc={value.imgsrc}
              title={value.title}
              text={value.text}
              view={value.view}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Cards;
