import React from 'react'
import './MechanicalCards.css';
import ViewDetails from '../../popup/ViewDetails';

function MechanicalCards(props) {
  return (
    <div>
      <div className="mech_card">
        <div className="mech_content">
          <h3>{props.name}</h3>
          <h1>Reg Fee : {props.fee}</h1>
          <div className='mech_button'>
            <a><ViewDetails /></a>
            <a>Register Event</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MechanicalCards