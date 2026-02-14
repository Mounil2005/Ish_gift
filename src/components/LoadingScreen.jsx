import React from 'react'
import { motion } from 'framer-motion'

const LoadingScreen = () => {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center animated-gradient"
      exit={{ opacity: 0, scale: 1.1 }}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
    >
      {/* Floating mini hearts in background */}
      {[...Array(12)].map((_, i) => (
        <motion.span
          key={i}
          className="absolute text-pink-300 opacity-30"
          style={{
            fontSize: `${Math.random() * 20 + 12}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.5, 0.2],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: Math.random() * 2 + 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        >
          💗
        </motion.span>
      ))}

      {/* Main loading heart */}
      <motion.div
        className="text-7xl md:text-8xl loading-heart"
        animate={{
          scale: [1, 1.2, 1, 1.15, 1],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        💖
      </motion.div>

      {/* Loading text */}
      <motion.p
        className="mt-8 text-xl md:text-2xl font-dancing text-pink-600 tracking-wide"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        Preparing something special for you...
      </motion.p>

      {/* Loading dots animation */}
      <div className="flex gap-2 mt-6">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="w-3 h-3 bg-pink-400 rounded-full"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              delay: i * 0.2,
            }}
          />
        ))}
      </div>

      {/* Subtle name reveal */}
      <motion.p
        className="mt-6 text-lg font-vibes text-pink-500 tracking-widest"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0.7, 1] }}
        transition={{ delay: 1.5, duration: 2 }}
      >
        for Ishita ✨
      </motion.p>
    </motion.div>
  )
}

export default LoadingScreen
