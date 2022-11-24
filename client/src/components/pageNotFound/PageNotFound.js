import React from 'react'
import PageNotFoundIcon from '../../assets/404.svg';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import './PageNotFound.css';

function PageNotFound() {
  return (
    <div className='page_not_found'>
        <img src={PageNotFoundIcon} alt="404 Not Found"/>
        <h1>Page Not Found</h1>
        <p>Sorry can't find the page you are looking for! Click Here to go back to homepage</p>
        <button>Home<ArrowBackIcon/></button>
    </div>
  )
}

export default PageNotFound