import React from 'react'
import { motion } from 'framer-motion'
import Sparkles from './Sparkles.jsx'

const FinalSection = () => {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #fce4ec 0%, #f8bbd0 40%, #f48fb1 100%)',
      }}
    >
      {/* Sparkles */}
      <Sparkles count={25} color="#ffffff" />

      {/* Floating elements */}
      {[...Array(10)].map((_, i) => (
        <motion.span
          key={i}
          className="absolute select-none pointer-events-none"
          style={{
            fontSize: `${Math.random() * 28 + 16}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            opacity: 0.15,
          }}
          animate={{
            y: [0, -25, 0],
            x: [0, Math.sin(i) * 15, 0],
            rotate: [0, 360],
          }}
          transition={{
            duration: Math.random() * 6 + 5,
            repeat: Infinity,
            delay: Math.random() * 3,
          }}
        >
          {['💕', '✨', '💫', '🌟', '💗', '🤍', '🦋', '🌸', '🎀', '💖'][i]}
        </motion.span>
      ))}

      <div className="relative z-10 text-center max-w-3xl mx-auto">
        {/* Pulsing heart */}
        <motion.div
          className="text-6xl md:text-8xl mb-8"
          animate={{
            scale: [1, 1.15, 1, 1.1, 1],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          ❤️
        </motion.div>

        {/* Main heading with glow */}
        <motion.h1
          className="font-vibes text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white mb-4 glow-text"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          viewport={{ once: true }}
          style={{
            textShadow: '0 0 30px rgba(255, 255, 255, 0.5), 0 0 60px rgba(255, 255, 255, 0.2)',
          }}
        >
          Happy Valentine's Day
        </motion.h1>

        <motion.h2
          className="font-vibes text-4xl sm:text-5xl md:text-6xl text-white/90 mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          viewport={{ once: true }}
          style={{
            textShadow: '0 0 20px rgba(255, 255, 255, 0.4)',
          }}
        >
          My Bakudi ❤️
        </motion.h2>

        {/* Decorative divider */}
        <motion.div
          className="flex items-center justify-center my-8 gap-4"
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="h-[1px] w-20 bg-gradient-to-r from-transparent to-white/50" />
          <span className="text-white/70 text-lg">✦ ♥ ✦</span>
          <div className="h-[1px] w-20 bg-gradient-to-l from-transparent to-white/50" />
        </motion.div>

        {/* Sub text */}
        <motion.p
          className="font-dancing text-2xl md:text-3xl text-white/80 mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          viewport={{ once: true }}
        >
          With all my heart, always.
        </motion.p>

        <motion.p
          className="font-poppins text-base md:text-lg text-white/60 tracking-widest mt-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          viewport={{ once: true }}
        >
          ♡ forever & always, yours ♡
        </motion.p>

        {/* Hearts row */}
        <motion.div
          className="flex items-center justify-center gap-3 mt-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          viewport={{ once: true }}
        >
          {['💕', '💗', '💖', '💓', '💗', '💕'].map((h, i) => (
            <motion.span
              key={i}
              className="text-2xl md:text-3xl"
              animate={{
                y: [0, -8, 0],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            >
              {h}
            </motion.span>
          ))}
        </motion.div>

        {/* Final note */}
        <motion.p
          className="mt-16 font-poppins text-xs text-white/40 tracking-[0.2em]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          viewport={{ once: true }}
        >
          made with love, just for you, Ishita ♥
        </motion.p>
      </div>
    </section>
  )
}

export default FinalSection
