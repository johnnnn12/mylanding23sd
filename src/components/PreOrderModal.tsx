import React, { useState } from 'react'

export default ({ item, onClose }: { item: string; onClose(): void }) => {
  const [region, setRegion] = useState('USA')
  const [size, setSize] = useState('M')
  const [method, setMethod] = useState<'card'|'wallet'>('card')
  const [step, setStep] = useState(0)

  const finish = () => {
    setStep(2)
    setTimeout(onClose, 2000)
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center p-4">
      <div className="bg-dark p-8 rounded-lg max-w-md w-full space-y-4">
        <button className="text-gray-500 absolute top-4 right-4" onClick={onClose}>×</button>
        <h3 className="text-xl font-semibold">Pre-Order: {item}</h3>

        {step===0 && (
          <div className="space-y-4">
            <div>
              <label>Region:</label>
              <select value={region} onChange={e=>setRegion(e.target.value)} className="w-full bg-black p-2">
                <option>USA</option>
                <option>EU</option>
                <option>Asia</option>
              </select>
            </div>
            <div>
              <label>Size:</label>
              <select value={size} onChange={e=>setSize(e.target.value)} className="w-full bg-black p-2">
                <option>S</option>
                <option>M</option>
                <option>L</option>
              </select>
            </div>
            <div>
              <label>Payment Method:</label>
              <div className="flex space-x-4">
                <button onClick={()=>setMethod('card')} className={`${method==='card'? 'underline':''}`}>Card</button>
                <button onClick={()=>setMethod('wallet')} className={`${method==='wallet'? 'underline':''}`}>Wallet</button>
              </div>
            </div>
            <button onClick={()=>setStep(1)} className="w-full py-2 bg-primary text-black">Continue</button>
          </div>
        )}

        {step===1 && (
          <div className="space-y-4">
            {method==='card' ? (
              <input type="text" placeholder="Card Number" className="w-full p-2 bg-black" />
            ) : (
              <input type="text" placeholder="Wallet ID" className="w-full p-2 bg-black" />
            )}
            <button onClick={finish} className="w-full py-2 bg-primary text-black">Submit Payment</button>
          </div>
        )}

        {step===2 && (
          <div className="text-green-400 text-center">
            Thank you! Your pre-order is confirmed.
          </div>
        )}
      </div>
    </div>
  )
}