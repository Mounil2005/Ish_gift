import React, { useState, useEffect, useRef, useMemo } from 'react'
import { motion, useInView } from 'framer-motion'
import Sparkles from './Sparkles.jsx'

const letterText = `My Dearest Bakudi,

From the moment you walked into my life, everything felt lighter, softer, happier.

You don't even realize how much you mean to me.
Your smile fixes my worst days.
Your voice is my comfort.
Your presence feels like home.

Every little thing about you... the way you laugh, the way you care, even your cute anger... makes me fall for you all over again.

If I had to choose again, in every lifetime,
I would still choose you.

You are my favorite hello and my hardest goodbye.
You are my today, and all of my tomorrows.

Forever yours,
with all the love in this world and beyond. ❤️`

const LoveLetter = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [displayedText, setDisplayedText] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [hasStarted, setHasStarted] = useState(false)

  /* pre-compute random values so they never change */
  const bgHearts = useMemo(() => {
    return [...Array(6)].map((_, i) => ({
      id: i,
      fontSize: `${14 + i * 4}px`,
      left: `${10 + i * 15}%`,
      top: `${8 + i * 14}%`,
      duration: 8 + i * 1.5,
      delay: i * 0.8,
    }))
  }, [])

  useEffect(() => {
    if (isInView && !hasStarted) {
      setHasStarted(true)
      setIsTyping(true)
    }
  }, [isInView, hasStarted])

  useEffect(() => {
    if (!isTyping) return

    let index = 0
    const interval = setInterval(() => {
      if (index < letterText.length) {
        setDisplayedText(letterText.slice(0, index + 1))
        index++
      } else {
        setIsTyping(false)
        clearInterval(interval)
      }
    }, 35)

    return () => clearInterval(interval)
  }, [isTyping])

  return (
    <section
      id="love-letter"
      className="relative min-h-screen flex items-center justify-center py-20 px-4"
      style={{
        background: 'linear-gradient(180deg, #fdf6f0 0%, #fce4ec 50%, #f3e5f5 100%)',
      }}
    >
      {/* Background floating hearts */}
      {bgHearts.map((h) => (
        <motion.span
          key={h.id}
          className="absolute text-pink-200 opacity-15 select-none pointer-events-none"
          style={{
            fontSize: h.fontSize,
            left: h.left,
            top: h.top,
          }}
          animate={{
            y: [0, -30, 0],
            rotate: [0, 15, -15, 0],
          }}
          transition={{
            duration: h.duration,
            repeat: Infinity,
            delay: h.delay,
          }}
        >
          💗
        </motion.span>
      ))}

      <Sparkles count={10} color="#ffd54f" />

      {/* Letter Card */}
      <motion.div
        ref={ref}
        className="relative z-10 w-full max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        viewport={{ once: true, margin: '-50px' }}
      >
        {/* Section title */}
        <motion.h2
          className="font-vibes text-4xl md:text-5xl text-pink-600 text-center pt-6 pb-10"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          A Letter For You 💌
        </motion.h2>

        {/* The letter card */}
        <div
          className="paper-card rounded-3xl p-10 md:p-14 relative overflow-hidden"
          style={{
            boxShadow: '0 20px 60px rgba(244, 143, 177, 0.2), 0 8px 24px rgba(0, 0, 0, 0.06)',
            border: '1px solid rgba(244, 143, 177, 0.15)',
          }}
        >
          {/* Decorative corner elements */}
          <div className="absolute top-3 left-3 text-pink-200 text-xl opacity-25 pointer-events-none">🌸</div>
          <div className="absolute top-3 right-3 text-pink-200 text-xl opacity-25 pointer-events-none">🌸</div>
          <div className="absolute bottom-3 left-3 text-pink-200 text-xl opacity-25 rotate-180 pointer-events-none">🌸</div>
          <div className="absolute bottom-3 right-3 text-pink-200 text-xl opacity-25 rotate-180 pointer-events-none">🌸</div>

          {/* Top decorative line */}
          <div className="flex items-center justify-center mb-6 gap-3">
            <div className="h-[1px] w-16 bg-gradient-to-r from-transparent to-pink-300" />
            <span className="text-pink-400 text-sm">♥</span>
            <div className="h-[1px] w-16 bg-gradient-to-l from-transparent to-pink-300" />
          </div>

          {/* Letter text with typewriter effect */}
          <div className="font-dancing text-xl md:text-2xl text-gray-700 leading-relaxed whitespace-pre-line px-4 md:px-6">
            {displayedText}
            {isTyping && (
              <span className="typewriter-cursor text-pink-500 font-bold ml-1">|</span>
            )}
          </div>

          {/* Bottom decorative line */}
          <div className="flex items-center justify-center mt-8 gap-3">
            <div className="h-[1px] w-20 bg-gradient-to-r from-transparent to-pink-300" />
            <span className="text-pink-400 text-xs">✦ ♥ ✦</span>
            <div className="h-[1px] w-20 bg-gradient-to-l from-transparent to-pink-300" />
          </div>
        </div>

        {/* Sealed with love */}
        <motion.p
          className="text-center mt-6 font-poppins text-sm text-pink-400 tracking-widest"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          viewport={{ once: true }}
        >
          ♡ sealed with love ♡
        </motion.p>
      </motion.div>
    </section>
  )
}

export default LoveLetter
