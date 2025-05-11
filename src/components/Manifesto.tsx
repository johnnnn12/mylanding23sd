import React from 'react'
import { motion, useViewportScroll, useTransform } from 'framer-motion'

export default () => {
  const { scrollY } = useViewportScroll()
  const scale = useTransform(scrollY, [0, 300], [1, 1.5])
  return (
    <section id="manifesto" className="py-24 bg-dark text-center">
      <motion.p style={{ scale }} className="text-3xl font-semibold text-primary">
        “We remove. We simplify. We frame.”
      </motion.p>
      <motion.p style={{ scale }} className="mt-4 text-2xl">
        “Talque is structure, not surface.”
      </motion.p>
    </section>
  )
}