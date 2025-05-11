import React, { useState } from 'react'
import { motion } from 'framer-motion'

type Item = { id: string; img: string }
const data: Record<string, Item[]> = {
  Glasses: Array.from({ length: 6 }, (_, i) => ({
    id: `Glasses ${i + 1}`,
    img: `/images/glasses${i + 1}.jpg`
  })),
  Bracelets: Array.from({ length: 4 }, (_, i) => ({
    id: `Bracelet ${i + 1}`,
    img: `/images/bracelet${i + 1}.jpg`
  })),
  Scarves: Array.from({ length: 12 }, (_, i) => ({
    id: `Scarf ${i + 1}`,
    img: `/images/scarf${i + 1}.jpg`
  })),
  Rings: Array.from({ length: 8 }, (_, i) => ({
    id: `Ring ${i + 1}`,
    img: `/images/ring${i + 1}.jpg`
  }))
}

export default function Catalog({
  onPreOrder,
  onImageClick
}: {
  onPreOrder(item: string): void
  onImageClick(src: string): void
}) {
  const tabs = Object.keys(data)
  const [active, setActive] = useState(tabs[0])

  return (
    <section id="catalog" className="py-16 bg-black px-4">
      <h2 className="text-3xl text-center mb-6">Catalog</h2>
      <div className="flex justify-center space-x-4 mb-8">
        {tabs.map(tab => (
          <button
            key={tab}
            onClick={() => setActive(tab)}
            className={`py-2 px-4 ${
              active === tab ? 'border-b-2 border-primary' : 'text-gray-500'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div
        className={`grid gap-6 px-4 ${
          active === 'Glasses'
            ? 'grid-cols-1 sm:grid-cols-3'
            : active === 'Bracelets'
            ? 'grid-cols-1 sm:grid-cols-2'
            : active === 'Scarves'
            ? 'grid-cols-1 sm:grid-cols-3'
            : 'grid-cols-1 sm:grid-cols-4'
        }`}
      >
        {data[active].map(item => (
          <div
            key={item.id}
            className="relative cursor-pointer"
            onClick={() => onImageClick(item.img)}
          >
            <motion.img
              src={item.img}
              alt={item.id}
              className="w-full h-60 object-cover"
              whileHover={{ filter: 'brightness(1.3)' }}
            />
            <motion.div
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-primary opacity-0 transition"
            >
              <p className="mb-2">Cuts Wind / Not Sound</p>
              <button
                onClick={e => {
                  e.stopPropagation()
                  onPreOrder(item.id)
                }}
                className="mt-2 px-4 py-2 border border-primary hover:bg-primary hover:text-black"
              >
                Pre-Order
              </button>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  )
}
