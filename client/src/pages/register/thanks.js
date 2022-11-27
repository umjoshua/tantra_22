import React from 'react';
import tickIcon from '../../assets/icons/tick.png'
import { useNavigate } from 'react-router-dom';

function ThanksPage() {
    const navigate = useNavigate();
    return (
        <div className='w-screen h-screen bg flex justify-center items-center'>
            <div className='form_container flex flex-col justify-center items-center bg-white w-max p-10 rounded-xl '>
                <img src={tickIcon} />
                <h1>Thank you for registering </h1>
                <button className='bg-teal-500 p-2 rounded mt-3 font-bold' onClick={() => { navigate(-2) }}
                >Back</button>
                <button className='bg-teal-500 p-2 rounded mt-3 font-bold' onClick={() => { navigate('/', { state: { load: true } }) }}
                >Return to Home</button>
            </div>
        </div>
    )
}

export default ThanksPage