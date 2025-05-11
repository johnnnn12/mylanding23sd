import React from 'react'

type FooterProps = {
  onTermsClick(): void
}

export default function Footer({ onTermsClick }: FooterProps) {
  return (
    <footer className="py-8 bg-dark text-center px-4">
      <form
        onSubmit={e => {
          e.preventDefault()
          alert('Subscribed!')
        }}
        className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto mb-4"
      >
        <input
          type="email"
          placeholder="Email address"
          required
          className="flex-1 p-2 bg-black text-primary border border-primary rounded"
        />
        <button type="submit" className="py-2 px-4 bg-primary text-black rounded">
          Subscribe
        </button>
      </form>
      <div className="space-x-4 text-sm text-primary">
        <a
          href="#"
          onClick={e => {
            e.preventDefault()
            onTermsClick()
          }}
          className="cursor-pointer"
        >
          Terms
        </a>
        <a
          href="https://instagram.com/talque"
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer"
        >
          Instagram
        </a>
      </div>
      <p className="mt-4 text-xs text-[#555]">Talque / Objects you wear.</p>
    </footer>
  )
}
