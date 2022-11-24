import React from 'react'
import LocationCityIcon from '@mui/icons-material/LocationCity';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import { useLoadScript } from '@react-google-maps/api';

import './Footer.css'
import Map from '../maps/Maps';
import { Link } from 'react-router-dom';

function Footer() {
const {isLoaded} = useLoadScript({googleMapsApiKey: process.env.GOOGLE_MAP_API_KEY})
  return (
    <div className='footer'>
        <div className='footer_container'>
            <div className='left'>
                <div className='location'>
                    <LocationCityIcon/>
                    <div>
                        <p>Jyothi Nagar, Chemperi (P.O)</p>
                        <p>Kannur 670632, Kerala, India</p>
                    </div>
                </div>
                <div className='location'>
                    <PhoneIcon/> <p>9074597252</p>
                </div>
                <div className='location'>
                    <EmailIcon/> <p><a href='mailto:tantra.22tech@gmail.com'>tantra.22tech@gmail.com </a></p>
                </div>

            </div>


            <div className='right'>
                <h4>Reach Us....</h4>
                <div className='map'>{isLoaded && <Map/>}</div>
                
                <div className='social'> 
                   <a href="https://www.instagram.com/tantra._22/" target='_blank'><InstagramIcon/></a>
                  <a href="https://www.linkedin.com/in/tantra-techfest-1a2381258/" target='_blank'><LinkedInIcon/></a> 
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer