import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'

export const Route = createFileRoute('/')({
  component: RiadhPackHome,
})

// Icons (keep all your existing icons here - shortened for space)
function IconBag() { /* your code */ }
function IconWheat() { /* your code */ }
function IconFood() { /* your code */ }
function IconValve() { /* your code */ }
function IconCustom() { /* your code */ }
function IconAgri() { /* your code */ }
function IconIndustry() { /* your code */ }
function IconExport() { /* your code */ }
function IconQuality() { /* your code */ }
function IconPrice() { /* your code */ }
function IconDelay() { /* your code */ }
function IconPrint() { /* your code */ }
function IconScale() { /* your code */ }
function IconPhone() { /* your code */ }
function IconEmail() { /* your code */ }
function IconLocation() { /* your code */ }
function IconClock() { /* your code */ }

function IconWhatsApp() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 text-white">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
    </svg>
  )
}

// Contact Form
function encode(data: Record<string, string>) {
  return Object.entries(data).map(([key, val]) => `${encodeURIComponent(key)}=${encodeURIComponent(val)}`).join('&')
}

function ContactForm() {
  const [fields, setFields] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFields({ ...fields, [e.target.name]: e.target.value })
  }

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
        <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="white" className="w-12 h-12">
            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-white mb-2">Merci !</h3>
        <p className="text-gray-400">Votre message a été envoyé avec succès.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-gray-300 mb-2 font-medium">Nom complet</label>
        <input type="text" name="name" required value={fields.name} onChange={handleChange}
          className="w-full bg-zinc-900 border border-zinc-700 rounded-2xl px-6 py-4 text-white focus:border-red-600 outline-none" />
      </div>
      <div>
        <label className="block text-gray-300 mb-2 font-medium">Email</label>
        <input type="email" name="email" required value={fields.email} onChange={handleChange}
          className="w-full bg-zinc-900 border border-zinc-700 rounded-2xl px-6 py-4 text-white focus:border-red-600 outline-none" />
      </div>
      <div>
        <label className="block text-gray-300 mb-2 font-medium">Votre message</label>
        <textarea name="message" required rows={6} value={fields.message} onChange={handleChange}
          placeholder="Quantité, type de sac, dimensions, impression..."
          className="w-full bg-zinc-900 border border-zinc-700 rounded-2xl px-6 py-4 text-white focus:border-red-600 outline-none resize-none" />
      </div>
      <button type="submit" disabled={loading}
        className="w-full bg-red-600 hover:bg-red-700 py-4 rounded-2xl text-white font-bold tracking-widest uppercase text-lg transition-all disabled:opacity-70">
        {loading ? "Envoi en cours..." : "Envoyer le message"}
      </button>
    </form>
  )
}

function RiadhPackHome() {
  const [menuOpen, setMenuOpen] = useState(false)

  const scrollTo = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const offset = 80
      const bodyRect = document.body.getBoundingClientRect().top
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition - bodyRect - offset

      window.scrollTo({ top: offsetPosition, behavior: 'smooth' })
    }
    setMenuOpen(false)
  }

  const navLinks = [
    { href: '#accueil', label: 'Accueil' },
    { href: '#produits', label: 'Produits' },
    { href: '#apropos', label: 'À propos' },
    { href: '#contact', label: 'Contact' },
  ]

  const products = [ /* your 6 products array - same as before */ 
    // ... paste your products array here
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      {/* HEADER */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">
          <a href="#accueil" className="flex items-center">
            <img src="/logo_riadhpack.png" alt="Riadh Pack" className="h-16 w-auto object-contain" />
          </a>

          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map(link => (
              <button key={link.href} onClick={() => scrollTo(link.href.slice(1))} 
                className="text-white/80 hover:text-white text-sm font-semibold tracking-widest uppercase transition-colors">
                {link.label}
              </button>
            ))}
            <button onClick={() => scrollTo('contact')}
              className="bg-red-600 hover:bg-red-700 px-8 py-3.5 text-xs font-bold tracking-widest uppercase rounded-xl transition-all">
              DEMANDER UN DEVIS
            </button>
          </nav>

          <button className="md:hidden text-3xl text-white" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? '✕' : '☰'}
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-black border-t border-white/10 px-6 py-8 text-center space-y-6">
            {navLinks.map(link => (
              <button key={link.href} onClick={() => scrollTo(link.href.slice(1))} className="block w-full text-lg py-2">
                {link.label}
              </button>
            ))}
            <button onClick={() => scrollTo('contact')} className="w-full bg-red-600 py-4 rounded-2xl font-bold">
              DEMANDER UN DEVIS
            </button>
          </div>
        )}
      </header>

      {/* All other sections (Hero, A Propos, Products...) stay the same */}

      {/* CONTACT SECTION - FIXED */}
      <section id="contact" className="py-28 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-red-400 uppercase tracking-widest text-sm mb-3">Nous contacter</p>
            <h2 className="text-5xl font-bold text-white">Demandez votre devis</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-16 max-w-5xl mx-auto">
            {/* Contact Info */}
            <div className="space-y-10">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-zinc-900 rounded-2xl flex items-center justify-center text-red-500">
                  <IconPhone />
                </div>
                <div>
                  <div className="text-gray-400 text-sm">Téléphone</div>
                  <a href="tel:+213560042526" className="text-white text-lg">+213 560 04 25 26</a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-zinc-900 rounded-2xl flex items-center justify-center text-red-500">
                  <IconEmail />
                </div>
                <div>
                  <div className="text-gray-400 text-sm">Email</div>
                  <a href="mailto:riadh48000@hotmail.com" className="text-white text-lg">riadh48000@hotmail.com</a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-zinc-900 rounded-2xl flex items-center justify-center text-red-500">
                  <IconLocation />
                </div>
                <div>
                  <div className="text-gray-400 text-sm">Adresse</div>
                  <div className="text-white">Zone Industrielle Belhacel<br />Relizane – Algérie</div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="bg-zinc-900 p-10 rounded-3xl border border-zinc-800">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black pt-16 pb-10 border-t border-zinc-900">
        <div className="max-w-7xl mx-auto px-6 text-center md:text-left">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-4">
              <img src="/logo_riadhpack.png" alt="Riadh Pack" className="h-12" />
              <div className="text-2xl font-bold">RIADH PACK</div>
            </div>
            <p className="text-gray-500 text-sm">© 2026 Riadh Pack - Fabricant Algérien de Sacs Tissés</p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <a href="https://wa.me/213560042526" target="_blank" rel="noopener noreferrer"
        className="fixed bottom-8 right-8 bg-[#25D366] w-16 h-16 rounded-full flex items-center justify-center shadow-2xl z-50 hover:scale-110 transition-all">
        <IconWhatsApp />
      </a>
    </div>
  )
}
