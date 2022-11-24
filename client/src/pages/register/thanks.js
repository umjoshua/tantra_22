import React from 'react';
import tickIcon from '../../assets/icons/tick.png'
import './style.css';

function ThanksPage() {
    return (
        <div >
            <div className='form_container flex flex-col justify-center items-center'>
                <img src={tickIcon}/>
                <h1>Thankyou for registering </h1>
                <button className='mt-3'>Return to Home</button>
            </div>
        </div>
    )
}

export default ThanksPage