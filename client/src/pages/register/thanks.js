import React from 'react';
import tickIcon from '../../assets/icons/tick.png'
import './style.css';
import {useNavigate} from 'react-router-dom';

function ThanksPage() {
    const navigate = useNavigate();
    return (
        <div >
            <div className='form_container flex flex-col justify-center items-center'>
                <img src={tickIcon}/>
                <h1>Thankyou for registering </h1>
                <button className='bg-teal-500 p-2 rounded mt-3' onClick={()=>{navigate('/')}}
                >Return to Home</button>
            </div>
        </div>
    )
}

export default ThanksPage