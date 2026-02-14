import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const MusicToggle = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [hasInteracted, setHasInteracted] = useState(false)
  const audioRef = useRef(null)

  useEffect(() => {
    // Create audio element with a royalty-free romantic melody
    // Using a data URI for a simple tone, user can replace with their own music file
    audioRef.current = new Audio()
    audioRef.current.loop = true
    audioRef.current.volume = 0.3

    // Try to load a local music file first
    audioRef.current.src = '/music/background.mp3'

    return () => {
      if (audioRef.current) {
        audioRef.current.pause()
        audioRef.current = null
      }
    }
  }, [])

  const toggleMusic = () => {
    setHasInteracted(true)
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play().catch(() => {
          // Audio play failed, likely no file
          console.log('Add a music file at public/music/background.mp3')
        })
      }
      setIsPlaying(!isPlaying)
    }
  }

  return (
    <motion.button
      className="fixed top-5 right-5 z-50 w-12 h-12 md:w-14 md:h-14 rounded-full 
                 bg-white/80 backdrop-blur-sm border-2 border-pink-200 
                 flex items-center justify-center cursor-pointer
                 hover:bg-pink-50 hover:border-pink-300 transition-all duration-300"
      style={{
        boxShadow: '0 4px 20px rgba(244, 143, 177, 0.3)',
      }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      onClick={toggleMusic}
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.5, duration: 0.6 }}
      title={isPlaying ? 'Mute Music' : 'Play Music'}
    >
      <AnimatePresence mode="wait">
        {isPlaying ? (
          <motion.span
            key="playing"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            exit={{ scale: 0, rotate: 180 }}
            className="text-xl md:text-2xl"
          >
            🎵
          </motion.span>
        ) : (
          <motion.span
            key="muted"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            exit={{ scale: 0, rotate: 180 }}
            className="text-xl md:text-2xl"
          >
            🔇
          </motion.span>
        )}
      </AnimatePresence>

      {/* Pulsing ring when playing */}
      {isPlaying && (
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-pink-300"
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.5, 0, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      )}
    </motion.button>
  )
}

export default MusicToggle
