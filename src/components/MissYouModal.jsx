import React, { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const slides = [
  { src: '/photos/9.jpeg', text: 'No matter what happens…' },
  { src: '/photos/10.jpeg', text: 'You are my home.' },
  { src: '/photos/11.jpeg', text: 'And I will always choose you.' },
]

const MissYouModal = ({ onClose }) => {
  const [current, setCurrent] = useState(0)
  const [showFinal, setShowFinal] = useState(false)

  /* auto‑advance slideshow */
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => {
        const next = (prev + 1) % slides.length
        return next
      })
    }, 4500)
    return () => clearInterval(timer)
  }, [])

  /* show final line after first full cycle */
  useEffect(() => {
    const timer = setTimeout(() => setShowFinal(true), 5000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <motion.div
      className="fixed inset-0 z-[200] flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Backdrop with pink glow */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(252,228,236,0.95) 0%, rgba(243,229,245,0.92) 50%, rgba(232,213,245,0.9) 100%)',
          backdropFilter: 'blur(12px)',
        }}
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      />

      {/* Floating sparkles in modal background */}
      {[...Array(10)].map((_, i) => (
        <motion.span
          key={i}
          className="absolute pointer-events-none select-none"
          style={{
            fontSize: `${Math.random() * 14 + 10}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            opacity: [0, 0.5, 0],
            scale: [0.5, 1.2, 0.5],
            y: [0, -20, 0],
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            delay: Math.random() * 3,
          }}
        >
          ✨
        </motion.span>
      ))}

      {/* Modal content */}
      <motion.div
        className="relative z-10 w-full max-w-md mx-auto text-center"
        initial={{ scale: 0.8, opacity: 0, y: 30 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.8, opacity: 0, y: 30 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 w-10 h-10 rounded-full bg-white/80 border-2 border-pink-200
                     flex items-center justify-center text-pink-400 text-lg cursor-pointer
                     hover:bg-pink-50 transition-colors z-20"
          style={{ boxShadow: '0 4px 12px rgba(244,143,177,0.25)' }}
        >
          ✕
        </button>

        {/* Slideshow */}
        <div
          className="relative w-full rounded-3xl overflow-hidden"
          style={{
            boxShadow: '0 20px 60px rgba(244,143,177,0.3), 0 8px 24px rgba(0,0,0,0.06)',
          }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              className="relative w-full"
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 1, ease: 'easeInOut' }}
            >
              <img
                src={slides[current].src}
                alt={slides[current].text}
                className="w-full h-auto rounded-3xl block"
                style={{ maxHeight: '70vh', objectFit: 'contain', margin: '0 auto' }}
                onError={(e) => {
                  e.target.style.display = 'none'
                  e.target.parentElement.style.background = 'linear-gradient(135deg, #fce4ec, #f3e5f5, #e8d5f5)'
                }}
              />

              {/* Gradient overlay for text */}
              <div
                className="absolute bottom-0 left-0 right-0 rounded-b-3xl"
                style={{
                  height: '40%',
                  background: 'linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 100%)',
                }}
              />

              {/* Text overlay */}
              <motion.p
                className="absolute bottom-8 left-0 right-0 font-vibes text-2xl md:text-3xl text-white px-6"
                style={{ textShadow: '0 2px 12px rgba(0,0,0,0.4)' }}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                {slides[current].text}
              </motion.p>
            </motion.div>
          </AnimatePresence>

          {/* Slide indicators */}
          <div className="absolute top-4 left-0 right-0 flex justify-center gap-2 z-10">
            {slides.map((_, i) => (
              <div
                key={i}
                className="w-2 h-2 rounded-full transition-all duration-300"
                style={{
                  background: i === current ? 'rgba(255,255,255,0.9)' : 'rgba(255,255,255,0.4)',
                  transform: i === current ? 'scale(1.3)' : 'scale(1)',
                }}
              />
            ))}
          </div>
        </div>

        {/* Final emotional text */}
        <AnimatePresence>
          {showFinal && (
            <motion.p
              className="font-dancing text-lg md:text-xl text-pink-500 mt-8 leading-relaxed"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: 'easeOut' }}
            >
              Whenever you miss me… just come back here.
              <br />
              <span className="text-pink-600 font-semibold">I'm always yours. 💗</span>
            </motion.p>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  )
}

export default MissYouModal
