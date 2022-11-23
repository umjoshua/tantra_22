import React from 'react'
import './MechanicalCards.css'

function MechanicalCards(props) {
  return (
    <div>
        <div className="mech_card">
            <div className="mech_content">
                <h3>{props.name}</h3>
                <p>{props.description}</p>
                <h1>Reg Fee : {props.fee}</h1>
                <div className='mech_button'>
                <a href='#'>View Details</a>
                <a href="#">Register</a>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default MechanicalCards