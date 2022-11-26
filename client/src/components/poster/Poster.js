import React from 'react'
//import IntroImage from '../../assets/intro.jpg';
import PosterImage from '../../assets/poster.png'
import ParticlesComponent from '../particles/ParticlesComponent';
import './Poster.css'

function Poster() {
  return (
    <div className='hero'>
      {/* <div className='absolute top-[90px]'><ParticlesComponent className='part' /></div> */}
      <div className='particle_div'><ParticlesComponent className='part' /></div>
      <div id="tsparticles"></div>
      <div className='fill'>
      <img src={PosterImage} alt="poster" className="intro_image" />
      </div>
      <div className="content">
        <p className='tantra'>TANTRA"22</p>
        <p className='eventdate'>DECEMBER 05, 2022</p>
      </div>

    </div>
  )
}

export default Poster