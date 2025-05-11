import React, { useState, useEffect } from 'react'
import Preloader from './components/Preloader'
import Hero from './components/Hero'
import Catalog from './components/Catalog'
import PreOrderModal from './components/PreOrderModal'
import TermsModal from './components/TermsModal'
import ImageModal from './components/ImageModal'
import Manifesto from './components/Manifesto'
import Footer from './components/Footer'
import SmoothScroll from './components/SmoothScroll'

export default () => {
  const [loading, setLoading] = useState(true)
  const [orderItem, setOrderItem] = useState<string | null>(null)
  const [termsOpen, setTermsOpen] = useState(false)
  const [lightbox, setLightbox] = useState<string | null>(null)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000)
    return () => clearTimeout(timer)
  }, [])

  if (loading) return <Preloader />

  return (
    <SmoothScroll>
      <Hero />
      <Catalog
        onPreOrder={setOrderItem}
        onImageClick={setLightbox}
      />
      <Manifesto />
      <Footer
        onTermsClick={() => setTermsOpen(true)}
      />

      {orderItem && (
        <PreOrderModal
          item={orderItem}
          onClose={() => setOrderItem(null)}
        />
      )}

      {termsOpen && <TermsModal onClose={() => setTermsOpen(false)} />}
      {lightbox && <ImageModal src={lightbox} onClose={() => setLightbox(null)} />}
    </SmoothScroll>
  )
}