import React from 'react'
//import IntroImage from '../../assets/intro.jpg';
import PosterImage from '../../assets/poster.png'
import ParticlesComponent from '../particles/ParticlesComponent';
import './Poster.css'

function Poster() {
  return (
    <div className='hero'> 
      <ParticlesComponent className='part'/>
        <div className='mask'>
        <img src={PosterImage} alt="poster" className="intro_image"/> 
        </div>
        <div className="content">
            <p>TANTRA"22</p>
        </div>
    </div>
  )
}

export default Poster