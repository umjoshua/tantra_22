import React from 'react'
import MechanicalCards from './MechanicalCards';
import MechanicalEventData from '../../../data/departmentEvents/MechanicalEventData/MechanicalEventData.js'
import Footer from '../../footer/Footer';
import Navbar from '../../navbar/Navbar';


function MechanicalEvents() {
    return (
        <div className="event_cards">
          <Navbar/>
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
          <Footer/>
        </div>
      );
}

export default MechanicalEvents