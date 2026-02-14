import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Sparkles from './Sparkles.jsx'
import MissYouModal from './MissYouModal.jsx'

/* ── placeholder data ── */
const polaroids = [
  { id: 1, src: '/photos/1.jpeg', caption: 'The smile that changed everything.', rotate: -3 },
  { id: 2, src: '/photos/2.jpeg', caption: 'My favorite chaos partner.', rotate: 2 },
  { id: 3, src: '/photos/3.jpeg', caption: 'Proof that I\'m the lucky one.', rotate: -1.5 },
  { id: 4, src: '/photos/4.jpeg', caption: 'Always choosing you.', rotate: 2.5 },
  { id: 5, src: '/photos/5.jpeg', caption: 'This laugh >>>', rotate: -2 },
  { id: 6, src: '/photos/6.jpeg', caption: 'My safe place.', rotate: 1.5 },
  { id: 7, src: '/photos/7.jpeg', caption: 'You + Me = Always.', rotate: -2.5 },
  { id: 8, src: '/photos/8.jpeg', caption: 'Every version of you is my favorite.', rotate: 1 },
]

/* heights to mimic pinterest stagger */
const heights = ['340px', '390px', '320px', '370px', '350px', '400px', '330px', '380px']

const PhotoSection = () => {
  const [selected, setSelected] = useState(null)
  const [missYouOpen, setMissYouOpen] = useState(false)

  return (
    <section
      className="relative overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #ffeef5 0%, #f9e6ff 50%, #ffeef5 100%)',
        paddingTop: '120px',
        paddingBottom: '100px',
      }}
    >
      <Sparkles count={14} color="#f8bbd0" />

      {/* Background floating hearts */}
      {[...Array(6)].map((_, i) => (
        <motion.span
          key={i}
          className="absolute text-pink-200 opacity-10 select-none pointer-events-none"
          style={{
            fontSize: `${Math.random() * 30 + 18}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{ y: [0, -25, 0], rotate: [0, 10, -10, 0] }}
          transition={{ duration: Math.random() * 5 + 5, repeat: Infinity, delay: Math.random() * 3 }}
        >
          💗
        </motion.span>
      ))}

      {/* ── Centered Container for all content ── */}
      <div className="relative z-10 w-full">
        {/* ── Section Header ── */}
        <div className="text-center px-4" style={{ marginBottom: '80px' }}>
          <motion.h2
            className="font-vibes text-4xl md:text-6xl text-pink-600 mb-5"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Our Little Moments 💞
          </motion.h2>
          <motion.p
            className="font-dancing text-xl md:text-2xl text-pink-400 tracking-wide"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            viewport={{ once: true }}
          >
            Some moments are too beautiful to ever fade…
          </motion.p>
        </div>

        {/* ── Polaroid Gallery – Centered Grid ── */}
        <div className="w-full flex justify-center px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8" style={{ maxWidth: '700px', width: '100%' }}>
            {polaroids.map((p, i) => (
              <PolaroidCard
                key={p.id}
                data={p}
                height={heights[i]}
                index={i}
                onClick={() => setSelected(p)}
              />
            ))}
          </div>
        </div>

        {/* ── "Open When You Miss Me" button ── */}
        <div className="text-center" style={{ marginTop: '100px' }}>
          <motion.button
            onClick={() => setMissYouOpen(true)}
            className="px-10 py-4 bg-white/80 backdrop-blur-sm rounded-full font-dancing text-xl text-pink-500
                       border-2 border-pink-200 cursor-pointer outline-none
                       hover:bg-pink-50 transition-all duration-300 relative overflow-hidden"
            style={{ boxShadow: '0 8px 32px rgba(244,143,177,0.2)' }}
            whileHover={{
              scale: 1.06,
              boxShadow: '0 12px 40px rgba(244,143,177,0.4)',
            }}
            whileTap={{ scale: 0.97 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* sparkle ring on hover */}
            <motion.div
              className="absolute inset-0 rounded-full pointer-events-none"
              animate={{
                boxShadow: [
                  '0 0 15px rgba(244,143,177,0.15)',
                  '0 0 30px rgba(244,143,177,0.3)',
                  '0 0 15px rgba(244,143,177,0.15)',
                ],
              }}
              transition={{ duration: 2.5, repeat: Infinity }}
            />
            Open When You Miss Me 🤍
          </motion.button>
        </div>
      </div>

      {/* ── Full‑screen image modal ── */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* backdrop */}
            <motion.div
              className="absolute inset-0 bg-black/60 backdrop-blur-md"
              onClick={() => setSelected(null)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* card */}
            <motion.div
              className="relative z-10 bg-white rounded-3xl p-4 md:p-6 max-w-lg w-full"
              style={{ boxShadow: '0 24px 80px rgba(244,143,177,0.35)' }}
              initial={{ scale: 0.7, opacity: 0, y: 40 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.7, opacity: 0, y: 40 }}
              transition={{ type: 'spring', stiffness: 260, damping: 22 }}
            >
              <img
                src={selected.src}
                alt={selected.caption}
                className="w-full rounded-2xl object-cover"
                style={{ maxHeight: '65vh' }}
              />
              <p className="font-dancing text-xl md:text-2xl text-pink-600 text-center mt-4">
                "{selected.caption}"
              </p>

              {/* close button */}
              <button
                onClick={() => setSelected(null)}
                className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-white border-2 border-pink-200
                           flex items-center justify-center text-pink-400 text-lg cursor-pointer
                           hover:bg-pink-50 transition-colors"
                style={{ boxShadow: '0 4px 12px rgba(244,143,177,0.25)' }}
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hidden emotional modal */}
      <AnimatePresence>
        {missYouOpen && <MissYouModal onClose={() => setMissYouOpen(false)} />}
      </AnimatePresence>
    </section>
  )
}

/* ═══════════════ Polaroid Card ═══════════════ */
const PolaroidCard = ({ data, height, index, onClick }) => {
  const [hoverHeart, setHoverHeart] = useState(false)

  return (
    <motion.div
      className="cursor-pointer relative"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.12, duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true, margin: '-40px' }}
      onClick={onClick}
      onMouseEnter={() => setHoverHeart(true)}
      onMouseLeave={() => setHoverHeart(false)}
    >
      <motion.div
        className="bg-white rounded-2xl p-3 pb-5 relative"
        style={{
          boxShadow: '0 8px 30px rgba(244,143,177,0.15), 0 2px 8px rgba(0,0,0,0.04)',
          rotate: `${data.rotate}deg`,
        }}
        whileHover={{
          rotate: 0,
          scale: 1.03,
          boxShadow: '0 16px 50px rgba(244,143,177,0.3), 0 4px 12px rgba(0,0,0,0.06)',
        }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
      >
        {/* Tape decoration */}
        <div
          className="absolute -top-3 left-1/2 -translate-x-1/2 w-12 h-5 rounded-sm opacity-60 z-10"
          style={{
            background: 'linear-gradient(135deg, rgba(255,228,225,0.9), rgba(248,187,208,0.7))',
            transform: `translateX(-50%) rotate(${Math.random() * 6 - 3}deg)`,
          }}
        />

        {/* Image */}
        <div className="overflow-hidden rounded-xl" style={{ height }}>
          <img
            src={data.src}
            alt={data.caption}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.style.display = 'none'
              e.target.parentElement.style.background = 'linear-gradient(135deg, #fce4ec, #f3e5f5, #e8d5f5)'
              e.target.parentElement.innerHTML = '<div style="display:flex;align-items:center;justify-content:center;height:100%;font-size:3rem;opacity:0.3">📸</div>'
            }}
          />
        </div>

        {/* Caption */}
        <p className="font-dancing text-base md:text-lg text-pink-600 text-center mt-3 px-2 leading-snug">
          "{data.caption}"
        </p>

        {/* Hover heart */}
        <AnimatePresence>
          {hoverHeart && (
            <motion.span
              className="absolute -top-2 -right-2 text-2xl pointer-events-none"
              initial={{ opacity: 0, scale: 0, y: 5 }}
              animate={{ opacity: 1, scale: 1, y: -10 }}
              exit={{ opacity: 0, scale: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              💗
            </motion.span>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  )
}

export default PhotoSection
