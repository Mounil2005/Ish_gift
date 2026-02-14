import React, { useState, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import LoadingScreen from './components/LoadingScreen.jsx'
import LandingPage from './components/LandingPage.jsx'
import LoveLetter from './components/LoveLetter.jsx'
import ReasonsILoveYou from './components/ReasonsILoveYou.jsx'
import PhotoSection from './components/PhotoSection.jsx'
import ValentineProposal from './components/ValentineProposal.jsx'
import FinalSection from './components/FinalSection.jsx'
import FloatingHearts from './components/FloatingHearts.jsx'
import MusicToggle from './components/MusicToggle.jsx'

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        {loading ? (
          <LoadingScreen key="loading" />
        ) : (
          <main key="main">
            <FloatingHearts />
            <MusicToggle />
            <LandingPage />
            <LoveLetter />
            <ReasonsILoveYou />
            <PhotoSection />
            <ValentineProposal />
            <FinalSection />
          </main>
        )}
      </AnimatePresence>
    </div>
  )
}

export default App
