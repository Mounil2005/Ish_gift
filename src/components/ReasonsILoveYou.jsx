import React, { useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import confetti from 'canvas-confetti'
import Sparkles from './Sparkles.jsx'

const reasons = [
  "Your smile that lights up my entire world 🌟",
  "The way you laugh... it's my favorite sound 💫",
  "How incredibly caring and loving you are 🤗",
  "Your cute anger that I secretly adore 😤💕",
  "The way you say my name... it hits different 🥰",
  "Your random mood swings that keep life exciting 🎭",
  "The way you support me through everything 💪",
  "Absolutely everything about you, Bakudi ✨",
  "How you make ordinary moments feel magical 🦋",
  "Your beautiful eyes that I could get lost in 👀💖",
  "The way you care about the little things 🌸",
  "How safe and warm I feel with you 🏠",
  "Your silly jokes that always make me laugh 😂",
  "The way you love... so deeply and so purely 💗",
  "Your voice... especially when you're sleepy 🌙",
  "How you make me want to be a better person 🌹",
  "The way your face lights up when you're happy 🌻",
  "Your hugs that feel like coming home 🤍",
  "How you're my best friend and my soulmate 💞",
  "Because you're you... and that's more than enough 💝",
]

const ReasonsILoveYou = () => {
  const [currentReason, setCurrentReason] = useState(null)
  const [clickCount, setClickCount] = useState(0)
  const [usedIndices, setUsedIndices] = useState([])
  const [heartPops, setHeartPops] = useState([])

  const getRandomReason = useCallback(() => {
    let available = reasons.map((_, i) => i).filter((i) => !usedIndices.includes(i))
    if (available.length === 0) {
      setUsedIndices([])
      available = reasons.map((_, i) => i)
    }
    const randomIndex = available[Math.floor(Math.random() * available.length)]
    return randomIndex
  }, [usedIndices])

  const handleClick = () => {
    const newCount = clickCount + 1
    setClickCount(newCount)

    const index = getRandomReason()
    setUsedIndices((prev) => [...prev, index])
    setCurrentReason(reasons[index])

    // Add heart pop effect
    const newHearts = [...Array(5)].map((_, i) => ({
      id: Date.now() + i,
      x: Math.random() * 200 - 100,
      y: Math.random() * -150 - 50,
    }))
    setHeartPops(newHearts)
    setTimeout(() => setHeartPops([]), 1000)

    // Confetti after every 5 clicks
    if (newCount % 5 === 0) {
      const duration = 2000
      const end = Date.now() + duration

      const frame = () => {
        confetti({
          particleCount: 3,
          angle: 60,
          spread: 55,
          origin: { x: 0, y: 0.7 },
          colors: ['#f48fb1', '#f8bbd0', '#fce4ec', '#e8d5f5', '#ffd54f'],
        })
        confetti({
          particleCount: 3,
          angle: 120,
          spread: 55,
          origin: { x: 1, y: 0.7 },
          colors: ['#f48fb1', '#f8bbd0', '#fce4ec', '#e8d5f5', '#ffd54f'],
        })
        if (Date.now() < end) {
          requestAnimationFrame(frame)
        }
      }
      frame()
    }
  }

  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center py-20 px-4 overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #f3e5f5 0%, #fce4ec 50%, #fdf6f0 100%)',
      }}
    >
      <Sparkles count={12} color="#e8d5f5" />

      {/* Title */}
      <motion.h2
        className="font-vibes text-4xl md:text-6xl text-pink-600 text-center mb-4 z-10"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Why I Love You
      </motion.h2>

      <motion.p
        className="text-pink-400 text-lg md:text-xl font-poppins mb-10 z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        viewport={{ once: true }}
      >
        <span className="pulse-heart">💖</span>
      </motion.p>

      {/* Reason display card */}
      <div className="relative z-10 w-full max-w-xl mx-auto mb-12" style={{ minHeight: '220px' }}>
        <AnimatePresence mode="wait">
          {currentReason ? (
            <motion.div
              key={currentReason}
              className="bg-white/90 backdrop-blur-md rounded-[2rem] p-10 md:p-14 text-center relative overflow-hidden"
              style={{
                boxShadow: '0 20px 60px rgba(244, 143, 177, 0.25), 0 8px 24px rgba(0, 0, 0, 0.06)',
                border: '2px solid rgba(244, 143, 177, 0.2)',
              }}
              initial={{ opacity: 0, scale: 0.7, y: 30, rotateX: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0, rotateX: 0 }}
              exit={{ opacity: 0, scale: 0.7, y: -30, rotateX: -15 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              {/* Decorative corner hearts */}
              <span className="absolute top-3 left-4 text-pink-200 text-lg opacity-40">💗</span>
              <span className="absolute top-3 right-4 text-pink-200 text-lg opacity-40">💗</span>
              <span className="absolute bottom-3 left-4 text-pink-200 text-lg opacity-40">💗</span>
              <span className="absolute bottom-3 right-4 text-pink-200 text-lg opacity-40">💗</span>
              
              {/* Subtle inner glow */}
              <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-pink-100/30 via-transparent to-purple-100/20 pointer-events-none" />
              
              <p className="font-dancing text-2xl md:text-4xl text-pink-700 leading-relaxed relative z-10">
                "{currentReason}"
              </p>

              {/* Click counter */}
              <p className="mt-5 text-xs font-poppins text-pink-300 tracking-wider relative z-10">
                reason #{clickCount} of ∞
              </p>
            </motion.div>
          ) : (
            <motion.div
              className="bg-white/50 backdrop-blur-sm rounded-[2rem] p-10 md:p-14 text-center border-2 border-dashed border-pink-200"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <p className="font-dancing text-xl md:text-2xl text-pink-300">
                ✨ Click the button below to discover... ✨
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Heart pop effects */}
        <AnimatePresence>
          {heartPops.map((heart) => (
            <motion.span
              key={heart.id}
              className="absolute left-1/2 top-1/2 text-2xl pointer-events-none z-20"
              initial={{ opacity: 1, x: 0, y: 0, scale: 0 }}
              animate={{
                opacity: 0,
                x: heart.x,
                y: heart.y,
                scale: 1.5,
              }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              💗
            </motion.span>
          ))}
        </AnimatePresence>
      </div>

      {/* Click button */}
      <motion.button
        onClick={handleClick}
        className="relative z-10 px-14 py-5 bg-gradient-to-r from-pink-400 to-purple-400 
                   text-white text-xl md:text-2xl font-dancing tracking-wider
                   rounded-full cursor-pointer border-none outline-none
                   hover:from-pink-500 hover:to-purple-500
                   transition-all duration-300"
        style={{
          boxShadow: '0 10px 40px rgba(244, 143, 177, 0.4)',
        }}
        whileHover={{
          scale: 1.05,
          boxShadow: '0 12px 40px rgba(244, 143, 177, 0.5)',
        }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        viewport={{ once: true }}
      >
        <motion.span
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="inline-block"
        >
          Click to See a Reason 💗
        </motion.span>
      </motion.button>

      {/* Hint */}
      {clickCount > 0 && clickCount < 5 && (
        <motion.p
          className="mt-4 text-sm font-poppins text-pink-300 z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          keep clicking for a surprise... ✨
        </motion.p>
      )}
    </section>
  )
}

export default ReasonsILoveYou
