import { React, useEffect, useState } from 'react';
import { useLocation } from "react-router-dom";
import Cards from '../../components/cards/Cards'
import Footer from '../../components/footer/Footer'
import Navbar from '../../components/navbar/Navbar'
import Poster from '../../components/poster/Poster'
import preloader from '../../assets/preloader.mp4';


function Home() {
  const { state } = useLocation();
  let load = false;
  if (state != null) {
    load = true;
  }
  const [loaded, setLoaded] = useState(load);
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div>
      {loaded ? <div className='bg-black text-[white] font-[Quicksand] home'>
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
      </div> : <video autoPlay muted style={{ height: "100vh", width: "100%", objectFit: "cover" }} onEnded={() => { setLoaded(true) }}>
        <source src={preloader} type="video/mp4" />Browser not supported! Redirecting..
      </video>}
    </div>
  )
}

export default Home