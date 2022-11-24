import { React, useEffect } from 'react'
import { useLocation } from "react-router-dom";
import Cards from '../Cards';
import AdsEventData from '../../../data/departmentEvents/AdsEventData';
import Footer from '../../footer/Footer';
import Navbar from '../../navbar/Navbar';



function AdsEvents() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div className="event_cards text-[white] font-[Quicksand] bg-black ">
      <Navbar pg='ot' />
      <h1 className="event_heading">Events</h1>
      <div className="event_container">
        {AdsEventData.map((value, index) => {
          return (
            <Cards
              data={value}
              key={index}
            />
          );
        })}
      </div>
      <Footer />
    </div>
  );
}

export default AdsEvents