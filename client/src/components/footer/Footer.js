import React from 'react'
import LocationCityIcon from '@mui/icons-material/LocationCity';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import SchoolIcon from '@mui/icons-material/School';


import './Footer.css'

function Footer() {
    return (
        <div className='footer'>
            <div className='footer_container'>
                <div className='left'>
                    <div className='location'>
                        <LocationCityIcon />
                        <div>
                            <a href="https://maps.app.goo.gl/kuiSu981HsBggDBN8?g_st=ic" target='_blank' rel="noopener noreferrer">
                                <p>Jyothi Nagar, Chemperi (P.O)</p>
                                <p>Kannur 670632, Kerala, India</p>
                            </a>
                        </div>
                    </div>
                    <div className='location'>
                        <PhoneIcon /> <p><a href="tel://+919074597252" > +91 9074597252</a></p>
                    </div>
                    <div className='location'>
                        <EmailIcon /> <p><a href='https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=tantra.22tech@gmail.com' target='_blank' rel="noopener noreferrer">tantra.22tech@gmail.com</a></p>
                    </div>

                </div>


                <div className='right'>
                    <h4>Reach Us....</h4>
                    <div className='social'>
                        <a href="https://www.instagram.com/tantra._22/" target='_blank' rel="noopener noreferrer"><InstagramIcon /></a>
                        <a href="https://www.linkedin.com/in/tantra-techfest-1a2381258/" target='_blank' rel="noopener noreferrer"><LinkedInIcon /></a>
                        <a href="https://vjec.ac.in/" target='_blank' rel="noopener noreferrer"><SchoolIcon /></a>
                    </div>
                </div>
                <div className='right'>
                    <h4>About Us....</h4>

                    <div className='social'>
                        <p>Tantra 22 is the annual intercollege technical fest with the objective of providing a platform for tech-oriented students to showcase their technical innovation and gain extensive knowledge. Our mission is to blend technology, creativity, and innovation to produce an experience that is unparalleled.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer