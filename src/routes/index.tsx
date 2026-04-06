import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'

export const Route = createFileRoute('/')({
  component: RiadhPackHome,
})

// ─── Icons (inline SVG helpers) ──────────────────────────────────────────────

function IconBag() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007Z" />
    </svg>
  )
}

function IconWheat() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18M6.343 6.343C7.9 4.786 10.05 4 12 4s4.1.786 5.657 2.343M4.929 10.929A7.5 7.5 0 0 1 12 8.5a7.5 7.5 0 0 1 7.071 2.429M3.515 15.515A9 9 0 0 1 12 13a9 9 0 0 1 8.485 2.515" />
    </svg>
  )
}

function IconFood() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.871c1.355 0 2.697.056 4.024.166C17.155 8.51 18 9.473 18 10.608v2.513M15 8.25v-1.5m-6 1.5v-1.5m12 9.75-1.5.75a3.354 3.354 0 0 1-3 0 3.354 3.354 0 0 0-3 0 3.354 3.354 0 0 1-3 0 3.354 3.354 0 0 0-3 0 3.354 3.354 0 0 1-3 0L3 16.5m15-3.379a48.474 48.474 0 0 0-6-.371c-2.032 0-4.034.126-6 .371m12 0c.39.049.777.102 1.163.16 1.07.16 1.837 1.094 1.837 2.175v5.169c0 .621-.504 1.125-1.125 1.125H4.125A1.125 1.125 0 0 1 3 20.625v-5.17c0-1.08.768-2.014 1.837-2.174A47.78 47.78 0 0 1 6 13.12M12.265 3.11a.375.375 0 1 1-.53 0L12 2.845l.265.265Zm-3 0a.375.375 0 1 1-.53 0L9 2.845l.265.265Zm6 0a.375.375 0 1 1-.53 0L15 2.845l.265.265Z" />
    </svg>
  )
}

function IconValve() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
      <path strokeLinecap="round" strokeLinejoin="round" d="m21 7.5-2.25-1.313M21 7.5v2.25m0-2.25-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3 2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75 2.25-1.313M12 21.75V19.5m0 2.25-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25" />
    </svg>
  )
}

function IconCustom() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42" />
    </svg>
  )
}

function IconAgri() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 7.5l16.5-4.125M12 6.75c-2.708 0-5.363.224-7.948.655C2.999 7.58 2.25 8.507 2.25 9.574v9.176A2.25 2.25 0 0 0 4.5 21h15a2.25 2.25 0 0 0 2.25-2.25V9.574c0-1.067-.75-1.994-1.802-2.169A48.329 48.329 0 0 0 12 6.75Zm-1.683 6.443-.005.005-.006-.005.006-.005.005.005Zm-.005 2.127-.005-.006.005-.005.005.005-.005.006Zm-2.116-.006-.005.006-.006-.006.005-.005.006.005Zm-.005-2.116-.006-.005.006-.005.005.005-.005.005Zm6.38 4.344-.005.005-.006-.004.006-.006.005.005Zm-.005-2.116-.006-.005.006-.005.005.005-.005.005Zm2.116 0-.005-.006.005-.005.006.005-.006.006Zm.005 2.127-.006.006-.005-.006.005-.005.006.005Z" />
    </svg>
  )
}

function IconIndustry() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z" />
    </svg>
  )
}

function IconExport() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6.115 5.19l.319 1.913A6 6 0 0 0 8.11 10.36L9.75 12l-.387.775c-.217.433-.132.956.21 1.298l1.348 1.348c.21.21.329.497.329.795v1.089c0 .426.24.815.622 1.006l.153.076c.433.217.956.132 1.298-.21l.723-.723a8.7 8.7 0 0 0 2.288-4.042 1.087 1.087 0 0 0-.358-1.099l-1.33-1.108c-.251-.21-.582-.299-.905-.245l-1.17.195a1.125 1.125 0 0 1-.98-.314l-.295-.295a1.125 1.125 0 0 1 0-1.591l.13-.132a1.125 1.125 0 0 1 1.3-.21l.603.302a.809.809 0 0 0 1.086-1.086L14.25 7.5l1.256-.837a4.5 4.5 0 0 1 1.528-.68l1.378-.345a1.809 1.809 0 0 0 1.364-1.787 1.809 1.809 0 0 0-1.364-1.785l-1.378-.345a4.5 4.5 0 0 0-3.526.499L9.754 4.003C8.791 4.61 8.04 5.49 7.587 6.52L7.5 6.75" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </svg>
  )
}

function IconQuality() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
    </svg>
  )
}

function IconPrice() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
    </svg>
  )
}

function IconDelay() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </svg>
  )
}

function IconPrint() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0 1 10.56 0m-10.56 0L6.34 18m10.94-4.171c.24.03.48.062.72.096m-.72-.096L17.66 18m0 0 .229 2.523a1.125 1.125 0 0 1-1.12 1.227H7.231c-.662 0-1.18-.568-1.12-1.227L6.34 18m11.318 0h1.091A2.25 2.25 0 0 0 21 15.75V9.456c0-1.081-.768-2.015-1.837-2.175a48.055 48.055 0 0 0-1.913-.247M6.34 18H5.25A2.25 2.25 0 0 1 3 15.75V9.456c0-1.081.768-2.015 1.837-2.175a48.041 48.041 0 0 1 1.913-.247m10.5 0a48.536 48.536 0 0 0-10.5 0m10.5 0V3.375c0-.621-.504-1.125-1.125-1.125h-8.25c-.621 0-1.125.504-1.125 1.125v3.659M18 10.5h.008v.008H18V10.5Zm-3 0h.008v.008H15V10.5Z" />
    </svg>
  )
}

function IconScale() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605" />
    </svg>
  )
}

function IconPhone() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
    </svg>
  )
}

function IconEmail() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
    </svg>
  )
}

function IconLocation() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
    </svg>
  )
}

function IconClock() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </svg>
  )
}

function IconWhatsApp() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 text-white">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
    </svg>
  )
}

// ─── Contact Form ─────────────────────────────────────────────────────────────

function encode(data: Record<string, string>) {
  return Object.entries(data)
    .map(([key, val]) => `${encodeURIComponent(key)}=${encodeURIComponent(val)}`)
    .join('&')
}

function ContactForm() {
  const [fields, setFields] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setFields({ ...fields, [e.target.name]: e.target.value })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    await fetch('/contact-form.html', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...fields }),
    })
    setLoading(false)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="white" className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
          </svg>
        </div>
        <h3 style={{ fontFamily: 'Montserrat, sans-serif' }} className="text-xl font-bold mb-2">Message envoyé !</h3>
        <p className="text-gray-600">Nous reviendrons vers vous dans les meilleurs délais.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <input type="hidden" name="form-name" value="contact" />
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1" htmlFor="name">Nom complet</label>
        <input
          id="name"
          type="text"
          name="name"
          required
          value={fields.name}
          onChange={handleChange}
          placeholder="Votre nom"
          className="w-full border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:border-black transition-colors"
        />
      </div>
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1" htmlFor="email">Adresse email</label>
        <input
          id="email"
          type="email"
          name="email"
          required
          value={fields.email}
          onChange={handleChange}
          placeholder="votre@email.com"
          className="w-full border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:border-black transition-colors"
        />
      </div>
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1" htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={fields.message}
          onChange={handleChange}
          placeholder="Décrivez votre besoin, quantité, type de sac..."
          className="w-full border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:border-black transition-colors resize-none"
        />
      </div>
      <button
        type="submit"
        disabled={loading}
        className="w-full bg-black text-white py-3 text-sm font-bold tracking-widest uppercase hover:bg-gray-900 transition-colors disabled:opacity-60 cursor-pointer"
        style={{ fontFamily: 'Montserrat, sans-serif' }}
      >
        {loading ? 'Envoi en cours...' : 'Envoyer le message'}
      </button>
    </form>
  )
}

// ─── Main Component ──────────────────────────────────────────────────────────

function RiadhPackHome() {
  const [menuOpen, setMenuOpen] = useState(false)

  const navLinks = [
    { href: '#accueil', label: 'Accueil' },
    { href: '#produits', label: 'Produits' },
    { href: '#apropos', label: 'À propos' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <div className="min-h-screen" style={{ fontFamily: 'Open Sans, sans-serif' }}>

            {/* ── IMPROVED HEADER - Clean White like JP Extrusiontech ── */}
      <header
        className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100"
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#accueil" className="flex items-center">
            <img
              src="/logo_riadhpack.png"
              alt="Riadh Pack"
              className="h-14 md:h-16 w-auto object-contain"
            />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-800 hover:text-black text-sm font-semibold tracking-widest uppercase transition-colors"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="bg-red-600 hover:bg-red-700 text-white px-7 py-3 text-xs font-bold tracking-widest uppercase transition-all rounded-md"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              DEMANDER UN DEVIS
            </a>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-gray-800 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
              {menuOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              }
            </svg>
          </button>
        </div>

        {/* Mobile Nav */}
        {menuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 px-6 py-6 flex flex-col gap-5 shadow-md">
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-gray-800 hover:text-black text-base font-semibold tracking-widest uppercase py-2"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="bg-red-600 hover:bg-red-700 text-white px-6 py-4 text-center text-sm font-bold tracking-widest uppercase rounded-md mt-4"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              DEMANDER UN DEVIS
            </a>
          </div>
        )}
      </header>
      {/* ── HERO ── */}
      <section
        id="accueil"
        className="relative flex items-center justify-center min-h-screen"
        style={{ paddingTop: '64px' }}
      >
        {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
  <video autoPlay muted loop playsInline className="w-full h-full object-cover">
    <source src="/video.mp4" type="video/mp4" />
  </video>
  <div className="absolute inset-0 bg-black/50"></div>
</div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <div className="animate-fade-in-up">
            <p
              className="text-gray-400 text-xs tracking-widest uppercase mb-6"
              style={{ fontFamily: 'Montserrat, sans-serif', letterSpacing: '0.25em' }}
            >
              Fabricant Algérien · Zone Industrielle Belhacel, Relizane
            </p>
            <h1
              className="text-white text-4xl md:text-6xl font-bold leading-tight mb-6"
              style={{ fontFamily: 'Montserrat, sans-serif', lineHeight: '1.1' }}
            >
              Solutions d'emballage<br />
              <span className="text-gray-300">industriel de confiance</span>
            </h1>
            <p className="text-gray-400 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
              Fabricant de sacs en polypropylène tissé pour les secteurs agricole, alimentaire et industriel. Qualité industrielle, prix direct usine.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="bg-white text-black px-8 py-4 text-sm font-bold tracking-widest uppercase hover:bg-gray-100 transition-colors"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                Demander un devis
              </a>
              <a
                href="https://wa.me/213560042526"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 border border-white text-white px-8 py-4 text-sm font-bold tracking-widest uppercase hover:bg-white hover:text-black transition-colors"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                </svg>
                Contacter via WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="rgba(255,255,255,0.5)" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
          </svg>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <section className="bg-black text-white py-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: '10+', label: "Années d'expérience" },
              { value: '5+', label: 'Types de produits' },
              { value: '4', label: 'Secteurs servis' },
              { value: '100%', label: 'Fabrication locale' },
            ].map((stat) => (
              <div key={stat.label}>
                <div
                  className="text-3xl md:text-4xl font-bold text-white mb-1"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                >
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="apropos" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p
                className="text-xs tracking-widest uppercase text-gray-400 mb-3"
                style={{ fontFamily: 'Montserrat, sans-serif', letterSpacing: '0.2em' }}
              >
                À propos de nous
              </p>
              <h2
                className="text-3xl md:text-4xl font-bold text-black mb-6"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                À propos de Riadh Pack
              </h2>
              <div className="section-divider section-divider-left mb-8" />
              <p className="text-gray-600 leading-relaxed mb-6 text-base">
                Riadh Pack est une entreprise algérienne spécialisée dans la fabrication de sacs tissés en polypropylène et de solutions d'emballage industriel. Implantée dans la zone industrielle Belhacel à Relizane, nous accompagnons les entreprises avec des produits fiables et de haute qualité.
              </p>
              <p className="text-gray-600 leading-relaxed text-base">
                Notre outil de production moderne nous permet de répondre aux commandes en grande quantité avec des délais compétitifs, tout en garantissant une qualité constante adaptée aux exigences des secteurs agricole, agroalimentaire et industriel.
              </p>
            </div>
            <div className="relative">
              <div
                className="w-full h-80 md:h-96"
                style={{
                  backgroundImage: `url('riadh pack 1.png')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />
              <div
                className="absolute bottom-0 right-0 bg-black text-white p-6"
                style={{ transform: 'translate(20px, 20px)' }}
              >
                <div
                  className="text-2xl font-bold"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                >
                  Relizane
                </div>
                <div className="text-gray-400 text-sm mt-1">Algérie</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PRODUCTS ── */}
      <section id="produits" className="py-24" style={{ background: '#f5f5f5' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p
              className="text-xs tracking-widest uppercase text-gray-400 mb-3"
              style={{ fontFamily: 'Montserrat, sans-serif', letterSpacing: '0.2em' }}
            >
              Notre gamme
            </p>
            <h2
              className="text-3xl md:text-4xl font-bold text-black mb-4"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              Nos produits
            </h2>
            <div className="section-divider" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <IconBag />,
                title: 'Sacs tissés en polypropylène',
                desc: 'Sacs standard haute résistance pour charges lourdes. Idéaux pour le stockage et le transport de matières en vrac.',
                use: 'Tous secteurs industriels',
                image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
              },
              {
                icon: <IconWheat />,
                title: 'Sacs agricoles',
                desc: 'Conçus pour les graines, engrais, compost et produits agricoles. Résistants à l\'humidité et aux UV.',
                use: 'Agriculture & élevage',
                image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=600&q=80',
              },
              {
                icon: <IconFood />,
                title: 'Sacs alimentaires',
                desc: 'Pour farine, sucre, semoule et autres denrées alimentaires. Conformes aux normes d\'hygiène alimentaire.',
                use: 'Industrie agroalimentaire',
                image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=600&q=80',
              },
              {
                icon: <IconValve />,
                title: 'Sacs à valve',
                desc: 'Spécialement conçus pour le ciment, la chaux, le plâtre et autres poudres industrielles à remplissage automatique.',
                use: 'BTP & industrie chimique',
                image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80',
              },
              {
                icon: <IconCustom />,
                title: 'Sacs personnalisés avec logo',
                desc: 'Impression flexographique jusqu\'à 6 couleurs. Personnalisation complète : couleur, taille, impression, renforcement.',
                use: 'Marques & exportateurs',
                image: 'https://images.unsplash.com/photo-1586769852044-692d6e3703f0?w=600&q=80',
              },
              {
                icon: <IconScale />,
                title: 'Commandes en grande quantité',
                desc: 'Capacité de production industrielle pour répondre aux commandes en gros avec des délais optimisés.',
                use: 'Grossistes & exportateurs',
                image: 'https://images.unsplash.com/photo-1586769852836-bc069f19e1b8?w=600&q=80',
              },
            ].map((product) => (
              <div
                key={product.title}
                className="bg-white group overflow-hidden"
                style={{ border: '1px solid #e5e5e5' }}
              >
                <div className="overflow-hidden h-48">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="text-black">{product.icon}</div>
                    <h3
                      className="font-bold text-black text-base"
                      style={{ fontFamily: 'Montserrat, sans-serif' }}
                    >
                      {product.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{product.desc}</p>
                  <div
                    className="text-xs font-semibold tracking-widest uppercase text-gray-400"
                    style={{ fontFamily: 'Montserrat, sans-serif' }}
                  >
                    {product.use}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTORS ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p
              className="text-xs tracking-widest uppercase text-gray-400 mb-3"
              style={{ fontFamily: 'Montserrat, sans-serif', letterSpacing: '0.2em' }}
            >
              Nos marchés
            </p>
            <h2
              className="text-3xl md:text-4xl font-bold text-black mb-4"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              Secteurs d'activité
            </h2>
            <div className="section-divider" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: <IconAgri />, title: 'Agriculture', desc: 'Semences, engrais, récoltes, aliments pour bétail' },
              { icon: <IconFood />, title: 'Agroalimentaire', desc: 'Farine, sucre, semoule, sel, produits céréaliers' },
              { icon: <IconIndustry />, title: 'Industrie', desc: 'Ciment, chaux, plâtre, sable, produits chimiques' },
              { icon: <IconExport />, title: 'Exportateurs', desc: 'Conditionnement pour marchés internationaux' },
            ].map((sector) => (
              <div
                key={sector.title}
                className="text-center p-8 group hover:bg-black transition-colors duration-300"
                style={{ border: '1px solid #e5e5e5' }}
              >
                <div className="flex justify-center text-black group-hover:text-white mb-4 transition-colors">{sector.icon}</div>
                <h3
                  className="font-bold text-black group-hover:text-white text-base mb-2 transition-colors"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                >
                  {sector.title}
                </h3>
                <p className="text-gray-500 group-hover:text-gray-300 text-sm transition-colors">{sector.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section className="py-24" style={{ background: '#111111' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p
              className="text-xs tracking-widest uppercase text-gray-500 mb-3"
              style={{ fontFamily: 'Montserrat, sans-serif', letterSpacing: '0.2em' }}
            >
              Nos avantages
            </p>
            <h2
              className="text-3xl md:text-4xl font-bold text-white mb-4"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              Pourquoi choisir Riadh Pack ?
            </h2>
            <div className="section-divider" style={{ background: '#fff' }} />
          </div>
          <div className="grid md:grid-cols-5 gap-6">
            {[
              { icon: <IconQuality />, title: 'Qualité industrielle', desc: 'Matériaux PP de haute densité, résistance à la traction garantie' },
              { icon: <IconPrice />, title: 'Prix direct usine', desc: 'Sans intermédiaire, tarifs compétitifs pour commandes en gros' },
              { icon: <IconDelay />, title: 'Délais rapides', desc: 'Production optimisée pour respecter vos délais de livraison' },
              { icon: <IconPrint />, title: 'Impression flexo', desc: 'Jusqu\'à 6 couleurs, impression haute définition sur sacs' },
              { icon: <IconScale />, title: 'Grande capacité', desc: 'Production industrielle à grande échelle, grandes séries' },
            ].map((item) => (
              <div
                key={item.title}
                className="text-center p-6 group"
                style={{ border: '1px solid #2a2a2a' }}
              >
                <div className="flex justify-center text-white mb-4">{item.icon}</div>
                <h3
                  className="font-bold text-white text-sm mb-2"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                >
                  {item.title}
                </h3>
                <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CAPABILITIES ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80"
                alt="Capacités de production"
                className="w-full h-80 object-cover"
                style={{ border: '1px solid #e5e5e5' }}
              />
            </div>
            <div>
              <p
                className="text-xs tracking-widest uppercase text-gray-400 mb-3"
                style={{ fontFamily: 'Montserrat, sans-serif', letterSpacing: '0.2em' }}
              >
                Capacités
              </p>
              <h2
                className="text-3xl md:text-4xl font-bold text-black mb-6"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                Production industrielle à grande échelle
              </h2>
              <div className="section-divider section-divider-left mb-8" />
              <div className="space-y-5">
                {[
                  { title: 'Production à grande échelle', desc: 'Capacité industrielle adaptée aux volumes importants' },
                  { title: 'Commandes en gros', desc: 'Conditions avantageuses pour les grandes quantités' },
                  { title: 'Personnalisation complète', desc: 'Dimensions, couleurs, impressions selon vos spécifications' },
                  { title: 'Livraison fiable', desc: 'Logistique maîtrisée à travers tout le territoire algérien' },
                ].map((cap) => (
                  <div key={cap.title} className="flex gap-4 items-start">
                    <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <h4
                        className="font-bold text-black text-sm mb-1"
                        style={{ fontFamily: 'Montserrat, sans-serif' }}
                      >
                        {cap.title}
                      </h4>
                      <p className="text-gray-500 text-sm">{cap.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="py-24" style={{ background: '#f5f5f5' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p
              className="text-xs tracking-widest uppercase text-gray-400 mb-3"
              style={{ fontFamily: 'Montserrat, sans-serif', letterSpacing: '0.2em' }}
            >
              Processus
            </p>
            <h2
              className="text-3xl md:text-4xl font-bold text-black mb-4"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              Comment ça fonctionne
            </h2>
            <div className="section-divider" />
          </div>
          <div className="grid md:grid-cols-4 gap-6 relative">
            {[
              { step: '01', title: 'Demande de devis', desc: 'Contactez-nous avec vos besoins : type de sac, quantité, dimensions, impression.' },
              { step: '02', title: 'Analyse des besoins', desc: 'Notre équipe analyse votre demande et vous propose une solution adaptée avec délais.' },
              { step: '03', title: 'Production', desc: 'Fabrication selon vos spécifications avec contrôle qualité à chaque étape.' },
              { step: '04', title: 'Livraison rapide', desc: 'Expédition et livraison sur toute l\'Algérie dans les délais convenus.' },
            ].map((step, i) => (
              <div key={step.step} className="bg-white p-8" style={{ border: '1px solid #e5e5e5' }}>
                <div
                  className="text-5xl font-bold text-gray-100 mb-4"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                >
                  {step.step}
                </div>
                <h3
                  className="font-bold text-black text-base mb-3"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                >
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
                {i < 3 && (
                  <div className="hidden md:block absolute top-1/2 -translate-y-1/2 text-gray-300" style={{ left: `calc(${(i + 1) * 25}% - 12px)` }}>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p
              className="text-xs tracking-widest uppercase text-gray-400 mb-3"
              style={{ fontFamily: 'Montserrat, sans-serif', letterSpacing: '0.2em' }}
            >
              Nous contacter
            </p>
            <h2
              className="text-3xl md:text-4xl font-bold text-black mb-4"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              Demandez votre devis
            </h2>
            <div className="section-divider" />
            <p className="text-gray-500 max-w-xl mx-auto mt-6 text-sm">
              Pour toute demande de devis, d'information ou de commande, remplissez le formulaire ci-dessous ou contactez-nous directement.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              <div className="space-y-8 mb-10">
                {[
                  { icon: <IconPhone />, label: 'Téléphone', value: '+213 560 04 25 26', href: 'tel:+213560042526' },
                  { icon: <IconEmail />, label: 'Email', value: 'riadh48000@hotmail.com', href: 'mailto:riadh48000@hotmail.com' },
                  { icon: <IconLocation />, label: 'Adresse', value: 'Zone industrielle Belhacel, Relizane – Algérie', href: null },
                  { icon: <IconClock />, label: 'Horaires', value: 'Dimanche à Jeudi, 08h00 – 17h00', href: null },
                ].map((info) => (
                  <div key={info.label} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-black flex items-center justify-center flex-shrink-0 text-white">
                      {info.icon}
                    </div>
                    <div>
                      <div
                        className="text-xs font-bold tracking-widest uppercase text-gray-400 mb-1"
                        style={{ fontFamily: 'Montserrat, sans-serif' }}
                      >
                        {info.label}
                      </div>
                      {info.href ? (
                        <a href={info.href} className="text-black hover:text-gray-600 text-sm font-medium transition-colors">
                          {info.value}
                        </a>
                      ) : (
                        <span className="text-black text-sm font-medium">{info.value}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <a
                href="https://wa.me/213560042526"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[#25D366] text-white px-6 py-4 text-sm font-bold tracking-widest uppercase hover:opacity-90 transition-opacity"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                </svg>
                Contacter via WhatsApp
              </a>
            </div>

            {/* Form */}
            <div className="bg-white p-8" style={{ border: '1px solid #e5e5e5' }}>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-black text-white pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span
                  className="text-white text-xl font-bold"
                  style={{ fontFamily: 'Montserrat, sans-serif', letterSpacing: '0.08em' }}
                >
                  RIADH
                </span>
                <span
                  className="text-gray-400 text-xl font-light"
                  style={{ fontFamily: 'Montserrat, sans-serif', letterSpacing: '0.08em' }}
                >
                  PACK
                </span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Fabricant algérien de sacs tissés en polypropylène et solutions d'emballage industriel. Qualité, fiabilité et volume.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4
                className="text-white font-bold text-xs tracking-widest uppercase mb-5"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                Liens rapides
              </h4>
              <ul className="space-y-3">
                {[
                  { href: '#accueil', label: 'Accueil' },
                  { href: '#apropos', label: 'À propos' },
                  { href: '#produits', label: 'Produits' },
                  { href: '#contact', label: 'Contact' },
                ].map(link => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white text-sm transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4
                className="text-white font-bold text-xs tracking-widest uppercase mb-5"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                Contact
              </h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li><a href="tel:+213560042526" className="hover:text-white transition-colors">+213 560 04 25 26</a></li>
                <li><a href="mailto:riadh48000@hotmail.com" className="hover:text-white transition-colors">riadh48000@hotmail.com</a></li>
                <li>Zone industrielle Belhacel<br />Relizane – Algérie</li>
                <li>Dim–Jeu : 08h00 – 17h00</li>
              </ul>
            </div>
          </div>

          <div
            className="border-t border-gray-800 pt-8 text-center text-gray-600 text-xs"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            © 2024 Riadh Pack. Tous droits réservés.
          </div>
        </div>
      </footer>

      {/* ── FLOATING WHATSAPP ── */}
      <a
        href="https://wa.me/213560042526"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float"
        aria-label="Contacter via WhatsApp"
      >
        <IconWhatsApp />
      </a>
    </div>
  )
}
