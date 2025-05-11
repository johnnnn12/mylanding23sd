import React from 'react'

export default ({ children }: { children: React.ReactNode }) => (
  <div className="snap-y snap-mandatory overflow-auto h-screen">{children}</div>
)