import React from 'react'

export default ({ src, onClose }: { src: string; onClose(): void }) => (
  <div
    className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center p-4 cursor-zoom-out"
    onClick={onClose}
  >
    <img
      src={src}
      alt=""
      className="max-w-[80vw] max-h-[80vh] object-contain"
      style={{ aspectRatio: '4/3' }}
    />
  </div>
)