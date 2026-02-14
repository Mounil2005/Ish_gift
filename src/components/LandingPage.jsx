import React from 'react'
import { motion } from 'framer-motion'
import Sparkles from './Sparkles.jsx'

const LandingPage = () => {
  const scrollToLetter = () => {
    document.getElementById('love-letter')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden animated-gradient px-4">
      {/* Sparkles in background */}
      <Sparkles count={20} color="#f48fb1" />

      {/* Decorative floating elements */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-pink-200 opacity-20 select-none"
          style={{
            fontSize: `${Math.random() * 40 + 30}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: Math.random() * 4 + 3,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        >
          {['🌸', '✨', '💫', '🦋', '🎀'][i % 5]}
        </motion.div>
      ))}

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-3xl mx-auto">
        {/* Small decorative text */}
        <motion.p
          className="text-pink-400 text-sm md:text-base tracking-[0.3em] uppercase font-poppins mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          ✦ a little something for you ✦
        </motion.p>

        {/* Main heading */}
        <motion.h1
          className="font-vibes text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-pink-700 leading-tight mb-2"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.6, ease: 'easeOut' }}
        >
          For The Most Beautiful
        </motion.h1>
        <motion.h1
          className="font-vibes text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-pink-600 leading-tight mb-3"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.9, ease: 'easeOut' }}
        >
          Girl In My World
        </motion.h1>

        {/* Heart decoration */}
        <motion.div
          className="text-4xl md:text-5xl my-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <span className="pulse-heart">💕</span>
        </motion.div>

        {/* Name */}
        <motion.p
          className="font-dancing text-2xl md:text-3xl text-pink-500 mt-2 mb-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.8 }}
        >
          ~ My Bakudi, Ishita ~
        </motion.p>

        {/* Subheading */}
        <motion.p
          className="text-pink-400 text-lg md:text-xl font-poppins font-light mt-2 mb-10 tracking-wide"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.8 }}
        >
          This is just for you…
        </motion.p>

        {/* CTA Button */}
        <motion.button
          onClick={scrollToLetter}
          className="relative px-14 py-5 bg-gradient-to-r from-pink-400 to-pink-500 
                     text-white text-xl md:text-2xl font-dancing tracking-wider
                     rounded-full cursor-pointer border-none outline-none
                     hover:from-pink-500 hover:to-pink-600
                     transition-all duration-300"
          style={{
            boxShadow: '0 8px 32px rgba(244, 143, 177, 0.4)',
          }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.8, ease: 'easeOut' }}
          whileHover={{
            scale: 1.05,
            boxShadow: '0 12px 40px rgba(244, 143, 177, 0.6)',
          }}
          whileTap={{ scale: 0.97 }}
        >
          <motion.span
            animate={{ y: [0, -3, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="inline-block"
          >
            Open My Heart 💌
          </motion.span>

          {/* Glow ring */}
          <motion.div
            className="absolute inset-0 rounded-full"
            animate={{
              boxShadow: [
                '0 0 20px rgba(244, 143, 177, 0.3)',
                '0 0 40px rgba(244, 143, 177, 0.5)',
                '0 0 20px rgba(244, 143, 177, 0.3)',
              ],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.button>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <motion.span
          className="text-pink-300 text-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          ↓
        </motion.span>
      </motion.div>
    </section>
  )
}

export default LandingPage
