import React from 'react'
import { motion } from 'framer-motion'

export default () => (
  <div className="fixed inset-0 bg-black flex items-center justify-center">
    <motion.h1
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.8, delay: 1.2 }}
      className="text-4xl font-bold text-primary"
    >wait</motion.h1>
  </div>
)