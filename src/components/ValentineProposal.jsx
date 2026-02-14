import React, { useState, useCallback, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import confetti from 'canvas-confetti'
import Sparkles from './Sparkles.jsx'

const ValentineProposal = () => {
  const [answered, setAnswered] = useState(false)
  const [noButtonPos, setNoButtonPos] = useState(null)
  const [noAttempts, setNoAttempts] = useState(0)
  const containerRef = useRef(null)

  const noMessages = [
    "Are you sure? 🥺",
    "Really? Think again... 💔",
    "You can't click me! 😜",
    "Nope, try again! 🙈",
    "I'm too fast for you! 💨",
    "Not happening! 😤💕",
    "Nice try, Bakudi! 💗",
    "You know you want to say yes! 🥰",
  ]

  const handleYes = () => {
    setAnswered(true)

    // Epic confetti celebration
    const duration = 5000
    const end = Date.now() + duration

    // Heart-shaped confetti burst
    const heartColors = ['#f48fb1', '#f8bbd0', '#e91e63', '#ff80ab', '#ffd54f', '#e8d5f5']

    // Initial big burst
    confetti({
      particleCount: 150,
      spread: 100,
      origin: { y: 0.6 },
      colors: heartColors,
      shapes: ['circle'],
      scalar: 1.2,
    })

    // Side cannons
    setTimeout(() => {
      confetti({ particleCount: 80, angle: 60, spread: 60, origin: { x: 0, y: 0.7 }, colors: heartColors })
      confetti({ particleCount: 80, angle: 120, spread: 60, origin: { x: 1, y: 0.7 }, colors: heartColors })
    }, 300)

    // Continuous celebration
    const frame = () => {
      confetti({
        particleCount: 4,
        angle: 60,
        spread: 55,
        origin: { x: 0, y: 0.7 },
        colors: heartColors,
      })
      confetti({
        particleCount: 4,
        angle: 120,
        spread: 55,
        origin: { x: 1, y: 0.7 },
        colors: heartColors,
      })
      if (Date.now() < end) {
        requestAnimationFrame(frame)
      }
    }
    frame()
  }

  const handleNoHover = useCallback(() => {
    setNoAttempts((prev) => prev + 1)
    const container = containerRef.current
    if (container) {
      const rect = container.getBoundingClientRect()
      const maxX = rect.width - 150
      const maxY = rect.height - 60
      setNoButtonPos({
        x: Math.random() * maxX - maxX / 2,
        y: Math.random() * maxY - maxY / 2,
      })
    }
  }, [])

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex flex-col items-center justify-center py-20 px-4 overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #fdf6f0 0%, #f3e5f5 50%, #fce4ec 100%)',
      }}
    >
      <Sparkles count={18} color="#ffd54f" />

      <AnimatePresence mode="wait">
        {!answered ? (
          <motion.div
            key="question"
            className="relative z-10 text-center max-w-lg mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5 }}
          >
            {/* Lead-in text */}
            <motion.p
              className="font-poppins text-lg md:text-xl text-pink-400 mb-14 tracking-wide"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Wait… I have something important to ask…
            </motion.p>

            {/* The big question */}
            <motion.h2
              className="font-vibes text-5xl md:text-7xl text-pink-600 mb-4"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 1, ease: 'easeOut' }}
              viewport={{ once: true }}
            >
              Will You Be
            </motion.h2>
            <motion.h2
              className="font-vibes text-5xl md:text-7xl text-pink-700 mb-3"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 1, ease: 'easeOut' }}
              viewport={{ once: true }}
            >
              My Valentine?
            </motion.h2>

            <motion.div
              className="text-5xl my-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <span className="pulse-heart">💘</span>
            </motion.div>

            {/* Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center gap-8 mt-8 relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.8 }}
              viewport={{ once: true }}
              style={{ minHeight: '160px' }}
            >
              {/* YES Button */}
              <motion.button
                onClick={handleYes}
                className="px-16 py-5 bg-gradient-to-r from-pink-400 to-rose-500 
                           text-white text-xl font-dancing tracking-wider
                           rounded-full cursor-pointer border-none outline-none
                           transition-all duration-300 z-10"
                style={{
                  boxShadow: '0 8px 32px rgba(233, 30, 99, 0.3)',
                }}
                whileHover={{
                  scale: 1.1,
                  boxShadow: '0 12px 40px rgba(233, 30, 99, 0.5)',
                }}
                whileTap={{ scale: 0.95 }}
                animate={{
                  boxShadow: [
                    '0 8px 32px rgba(233, 30, 99, 0.3)',
                    '0 12px 40px rgba(233, 30, 99, 0.5)',
                    '0 8px 32px rgba(233, 30, 99, 0.3)',
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                YES 💕
              </motion.button>

              {/* NO Button - runs away */}
              <motion.button
                onMouseEnter={handleNoHover}
                onTouchStart={handleNoHover}
                className="px-16 py-5 bg-white/80 backdrop-blur-sm
                           text-pink-400 text-xl font-dancing tracking-wider
                           rounded-full cursor-pointer border-2 border-pink-200
                           z-10"
                style={{
                  boxShadow: '0 4px 16px rgba(244, 143, 177, 0.15)',
                  ...(noButtonPos ? { position: 'absolute' } : {}),
                }}
                animate={noButtonPos ? {
                  x: noButtonPos.x,
                  y: noButtonPos.y,
                } : {}}
                transition={{
                  type: 'tween',
                  duration: 0.15,
                  ease: 'easeOut',
                }}
              >
                NO 🙈
              </motion.button>
            </motion.div>

            {/* Funny message after attempts */}
            {noAttempts > 0 && (
              <motion.p
                key={noAttempts}
                className="mt-6 font-poppins text-sm md:text-base text-pink-400 z-10"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                {noMessages[Math.min(noAttempts - 1, noMessages.length - 1)]}
              </motion.p>
            )}
          </motion.div>
        ) : (
          /* ===== CELEBRATION STATE ===== */
          <motion.div
            key="celebration"
            className="relative z-10 text-center max-w-2xl mx-auto"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            {/* Celebration hearts - positioned further out */}
            {[...Array(12)].map((_, i) => (
              <motion.span
                key={i}
                className="absolute text-3xl md:text-4xl pointer-events-none"
                style={{
                  left: `${50 + Math.cos((i / 12) * Math.PI * 2) * 55}%`,
                  top: `${50 + Math.sin((i / 12) * Math.PI * 2) * 55}%`,
                  transform: 'translate(-50%, -50%)',
                  zIndex: 0,
                }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{
                  opacity: [0, 1, 0.7],
                  scale: [0, 1.5, 1],
                }}
                transition={{ delay: i * 0.1, duration: 0.8 }}
              >
                {['💖', '💗', '💕', '💓', '💘', '💝', '✨', '🌸', '🦋', '🎀', '💐', '🥰'][i]}
              </motion.span>
            ))}

            <motion.div
              className="text-7xl md:text-8xl mb-6 relative z-10"
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 5, -5, 0],
              }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              🥰
            </motion.div>

            <motion.h2
              className="font-vibes text-4xl md:text-6xl text-pink-600 mb-4 glow-text relative z-10"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              You just made me the
            </motion.h2>
            <motion.h2
              className="font-vibes text-4xl md:text-6xl text-pink-700 mb-6 glow-text relative z-10"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              happiest person alive!
            </motion.h2>

            <motion.p
              className="font-dancing text-2xl md:text-3xl text-pink-500 mt-4 relative z-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
            >
              I love you, Bakudi 💖
            </motion.p>

            <motion.div
              className="mt-8 text-5xl relative z-10"
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              💖
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default ValentineProposal
