import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'

export const Route = createFileRoute('/contact')({
  component: Contact,
})

function Contact() {
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    setTimeout(() => {
      alert('Message envoyé ✅')
      setLoading(false)
    }, 1000)
  }

  return (
    <div className="pt-24 px-6 max-w-xl mx-auto text-white">
      <h1 className="text-4xl mb-8 text-center">Contact</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input placeholder="Nom" className="w-full p-4 bg-zinc-900" />
        <input placeholder="Email" className="w-full p-4 bg-zinc-900" />
        <textarea placeholder="Message" className="w-full p-4 bg-zinc-900" />

        <button className="border px-6 py-3 w-full">
          {loading ? 'Envoi...' : 'Envoyer'}
        </button>
      </form>
    </div>
  )
}