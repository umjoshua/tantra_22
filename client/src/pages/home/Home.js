import { React } from 'react'
import Cards from '../../components/cards/Cards'
import Footer from '../../components/footer/Footer'
import Navbar from '../../components/navbar/Navbar'
import Poster from '../../components/poster/Poster'
import './home.css'

function Home() {
  return (
    <div className='bg-black text-[white] font-[Quicksand] home'>
      <Navbar />
      <section id="home">
        <Poster />
      </section>
      <section id="events">
        <Cards />
      </section>
      <section id="footer">
        <Footer />
      </section>
    </div>
  )
}

export default Home