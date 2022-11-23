import { React, useEffect } from 'react'
import { useLocation } from "react-router-dom";
import MechanicalCards from './MechanicalCards';
import MechanicalEventData from '../../../data/departmentEvents/MechanicalEventData.js'
import Footer from '../../footer/Footer';
import Navbar from '../../navbar/Navbar';



function MechanicalEvents() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div className="event_cards text-[white] font-[Quicksand]">
      <Navbar pg='ot' />
      <h1 className="event_heading">Events</h1>
      <div className="event_container">
        {MechanicalEventData.map((value, index) => {
          return (
            <MechanicalCards
              key={index}
              name={value.name}
              description={value.description}
              fee={value.fee}
            />
          );
        })}
      </div>
      <Footer />
    </div>
  );
}

export default MechanicalEvents