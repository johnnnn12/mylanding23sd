// src/components/Hero.tsx
import React from 'react'
import { motion } from 'framer-motion'

export default function Hero() {
  const scrollToCatalog = () => {
    const el = document.getElementById('catalog')
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section
      id="hero"
      className="h-screen bg-dark flex items-center justify-center text-center relative"
    >
      {/* Фон (указываем абсолютный путь от корня): */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: "url('/images/hero.jpg')" }}
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="relative space-y-4 z-10"
      >
        <h1 className="text-7xl font-bold">Talque</h1>
        <p className="text-2xl italic">"Worn Silence."</p>
        <p className="text-lg text-primary">Modern minimal apparel</p>
        <button
          onClick={scrollToCatalog}
          className="inline-block mt-4 px-6 py-3 border border-primary hover:bg-primary hover:text-black transition"
        >
          Enter Collection
        </button>
      </motion.div>
    </section>
  )
}
