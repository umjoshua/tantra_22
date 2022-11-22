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
                    <PhoneIcon/> <p>9876543210</p>
                </div>
                <div className='location'>
                    <EmailIcon/> <p>someone@gmail.com</p>
                </div>

            </div>


            <div className='right'>
                <h4>Reach Us....</h4>
                <div className='map'>{isLoaded && <Map/>}</div>
                
                <div className='social'>
                    <FacebookIcon/>
                    <InstagramIcon/>
                    <LinkedInIcon/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer