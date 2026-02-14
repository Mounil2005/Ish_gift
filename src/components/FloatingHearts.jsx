import React, { useMemo } from 'react'
import { motion } from 'framer-motion'

const hearts = ['💕', '💗', '💖', '💓', '💘', '💝', '🩷', '♥️', '🤍', '🩵']

const FloatingHearts = () => {
  const heartElements = useMemo(() => {
    return [...Array(20)].map((_, i) => ({
      id: i,
      emoji: hearts[Math.floor(Math.random() * hearts.length)],
      left: `${Math.random() * 100}%`,
      size: `${Math.random() * 18 + 14}px`,
      duration: Math.random() * 10 + 12,
      delay: Math.random() * 10,
      opacity: Math.random() * 0.3 + 0.1,
    }))
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-[2] overflow-hidden">
      {heartElements.map((heart) => (
        <motion.span
          key={heart.id}
          className="floating-heart"
          style={{
            left: heart.left,
            fontSize: heart.size,
            bottom: '-50px',
          }}
          animate={{
            y: [0, -window.innerHeight - 100],
            x: [0, Math.sin(heart.id) * 80, 0],
            rotate: [0, 360],
            opacity: [0, heart.opacity, heart.opacity, 0],
          }}
          transition={{
            duration: heart.duration,
            repeat: Infinity,
            delay: heart.delay,
            ease: 'linear',
          }}
        >
          {heart.emoji}
        </motion.span>
      ))}
    </div>
  )
}

export default FloatingHearts
