import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Countdown from './components/Countdown'
import CeremonyDetails from './components/CeremonyDetails'
import Reception from './components/Reception'
import RSVP from './components/RSVP'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

function App() {
  return (
    <div className="min-h-screen bg-white text-burgundy-800 font-poppins">
      <Header />
      <Hero />
      <Countdown />
      <CeremonyDetails />
      <Reception />
      <RSVP />
      <Footer />
      <ScrollToTop />
    </div>
  )
}

export default App
