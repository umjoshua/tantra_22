import React from 'react'
import Cards from '../../components/cards/Cards'
import Footer from '../../components/footer/Footer'
import Navbar from '../../components/navbar/Navbar'
import Poster from '../../components/poster/Poster'

function Home() {
  return (
    <div className='bg-black text-[white] font-[Quicksand]'>
        <Navbar/>
        <Poster/>
        <Cards/>
        <Footer/>
    </div>
  )
}

export default Home