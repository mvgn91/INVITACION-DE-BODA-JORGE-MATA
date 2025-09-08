import React, { Suspense, lazy } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

// Lazy loading para componentes pesados
const Hero = lazy(() => import('./components/Hero'))
const Countdown = lazy(() => import('./components/Countdown'))
const CeremonyDetails = lazy(() => import('./components/CeremonyDetails'))
const DressCode = lazy(() => import('./components/DressCode'))
const Reception = lazy(() => import('./components/Reception'))
const GiftRegistry = lazy(() => import('./components/GiftRegistry'))
const RSVP = lazy(() => import('./components/RSVP'))

// Componente de carga optimizado
const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-[50vh]">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-burgundy-500"></div>
  </div>
)

function App() {
  return (
    <div className="min-h-screen bg-white text-burgundy-800 font-poppins">
      <Header />
      <Suspense fallback={<LoadingSpinner />}>
        <Hero />
      </Suspense>
      <Suspense fallback={<div className="h-32"></div>}>
        <Countdown />
      </Suspense>
      <Suspense fallback={<div className="h-32"></div>}>
        <CeremonyDetails />
      </Suspense>
      <Suspense fallback={<div className="h-32"></div>}>
        <DressCode />
      </Suspense>
      <Suspense fallback={<div className="h-32"></div>}>
        <Reception />
      </Suspense>
      <Suspense fallback={<div className="h-32"></div>}>
        <GiftRegistry />
      </Suspense>
      <Suspense fallback={<div className="h-32"></div>}>
        <RSVP />
      </Suspense>
      <Footer />
      <ScrollToTop />
    </div>
  )
}

export default App
