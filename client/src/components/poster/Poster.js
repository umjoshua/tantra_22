import React from 'react'
import IntroImage from '../../assets/intro.jpg';
import ParticlesComponent from '../particles/ParticlesComponent';
import './Poster.css'

function Poster() {
  return (
    <div className='hero'> 
      <ParticlesComponent className='part'/>
        <div className='mask'>
        <img src={IntroImage} alt="poster" className="intro_image"/> 
        </div>
        <div className="content">
            <p>Techfest Title</p>
        </div>
    </div>
  )
}

export default Poster