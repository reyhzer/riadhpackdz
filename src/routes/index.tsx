import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'

const accentRed = '#E30613'

export const Route = createFileRoute('/')({
  component: RiadhPackHome,
})

// ─── Icons (keep all your icons as they are) ──────────────────────────────────────────────
// ... (all your Icon functions stay exactly the same - I won't repeat them to save space)

function IconBag() { /* ... */ }
function IconWheat() { /* ... */ }
function IconFood() { /* ... */ }
function IconValve() { /* ... */ }
function IconCustom() { /* ... */ }
function IconAgri() { /* ... */ }
function IconIndustry() { /* ... */ }
function IconExport() { /* ... */ }
function IconQuality() { /* ... */ }
function IconPrice() { /* ... */ }
function IconDelay() { /* ... */ }
function IconPrint() { /* ... */ }
function IconScale() { /* ... */ }
function IconPhone() { /* ... */ }
function IconEmail() { /* ... */ }
function IconLocation() { /* ... */ }
function IconClock() { /* ... */ }
function IconWhatsApp() { /* ... */ }

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
        <h3 style={{ fontFamily: 'Montserrat, sans-serif' }} className="text-xl font-bold mb-2 text-white">Message envoyé !</h3>
        <p className="text-gray-400">Nous reviendrons vers vous dans les meilleurs délais.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <input type="hidden" name="form-name" value="contact" />
      <div>
        <label className="block text-sm font-semibold text-gray-300 mb-1" htmlFor="name">Nom complet</label>
        <input id="name" type="text" name="name" required value={fields.name} onChange={handleChange}
          className="w-full bg-zinc-900 border border-zinc-700 text-white px-4 py-3 rounded-lg focus:outline-none focus:border-red-600" />
      </div>
      <div>
        <label className="block text-sm font-semibold text-gray-300 mb-1" htmlFor="email">Adresse email</label>
        <input id="email" type="email" name="email" required value={fields.email} onChange={handleChange}
          className="w-full bg-zinc-900 border border-zinc-700 text-white px-4 py-3 rounded-lg focus:outline-none focus:border-red-600" />
      </div>
      <div>
        <label className="block text-sm font-semibold text-gray-300 mb-1" htmlFor="message">Message</label>
        <textarea id="message" name="message" required rows={5} value={fields.message} onChange={handleChange}
          className="w-full bg-zinc-900 border border-zinc-700 text-white px-4 py-3 rounded-lg focus:outline-none focus:border-red-600 resize-none" 
          placeholder="Décrivez votre besoin, quantité, type de sac..." />
      </div>
      <button type="submit" disabled={loading}
        className="w-full bg-red-600 hover:bg-red-700 text-white py-4 rounded-xl font-bold tracking-widest uppercase transition-all disabled:opacity-70">
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

  const products = [
    { icon: <IconBag />, title: 'Sacs tissés en polypropylène', desc: 'Sacs standard haute résistance pour charges lourdes.', use: 'Tous secteurs industriels', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80' },
    { icon: <IconWheat />, title: 'Sacs agricoles', desc: 'Pour graines, engrais, compost. Résistants UV et humidité.', use: 'Agriculture & élevage', image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=600&q=80' },
    { icon: <IconFood />, title: 'Sacs alimentaires', desc: 'Pour farine, sucre, semoule. Normes hygiène alimentaire.', use: 'Agroalimentaire', image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=600&q=80' },
    { icon: <IconValve />, title: 'Sacs à valve', desc: 'Pour ciment, plâtre, poudres industrielles.', use: 'BTP & Industrie', image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80' },
    { icon: <IconCustom />, title: 'Sacs personnalisés', desc: 'Impression jusqu\'à 6 couleurs avec votre logo.', use: 'Marques & Export', image: 'https://images.unsplash.com/photo-1586769852044-692d6e3703f0?w=600&q=80' },
    { icon: <IconScale />, title: 'Grandes quantités', desc: 'Production industrielle pour commandes en gros.', use: 'Grossistes & Exportateurs', image: 'https://images.unsplash.com/photo-1586769852836-bc069f19e1b8?w=600&q=80' },
  ]

  return (
    <div className="min-h-screen bg-black text-white" style={{ fontFamily: 'Open Sans, sans-serif' }}>
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">
          <a href="#accueil" className="flex items-center">
            <img src="/logo_riadhpack.png" alt="Riadh Pack" className="h-16 w-auto" />
          </a>

          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map(link => (
              <a key={link.href} href={link.href} className="text-white/80 hover:text-white text-sm font-semibold tracking-widest uppercase transition-colors" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                {link.label}
              </a>
            ))}
            <a href="#contact" className="bg-red-600 hover:bg-red-700 text-white px-8 py-3.5 text-xs font-bold tracking-widest uppercase rounded-xl transition-all">
              DEMANDER UN DEVIS
            </a>
          </nav>

          <button className="md:hidden text-white" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? '✕' : '☰'}
          </button>
        </div>
      </header>

      {/* Hero - Already good with white text */}
      <section id="accueil" className="relative flex items-center justify-center min-h-screen pt-20">
        <div className="absolute inset-0 overflow-hidden">
          <video autoPlay muted loop playsInline className="w-full h-full object-cover">
            <source src="/video.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/70 to-black/90"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <p className="text-red-400 text-sm tracking-[3px] uppercase mb-6 font-semibold">FABRICANT ALGÉRIEN • DEPUIS 2015</p>
          <h1 className="text-white text-6xl md:text-7xl lg:text-8xl font-bold leading-none tracking-tighter mb-8">EMBALLAGE INDUSTRIEL<br />D'EXCELLENCE</h1>
          <p className="text-gray-300 text-xl md:text-2xl max-w-3xl mx-auto mb-12">Sacs en polypropylène tissé de haute qualité pour l'agriculture, l'agroalimentaire et l'industrie.</p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <a href="#contact" className="bg-white text-black px-12 py-5 text-lg font-bold tracking-widest uppercase hover:bg-gray-100 rounded-2xl transition-all">OBTENIR UN DEVIS</a>
            <a href="https://wa.me/213560042526" className="border-2 border-white text-white px-10 py-5 text-lg font-bold tracking-widest uppercase hover:bg-white hover:text-black rounded-2xl flex items-center gap-3 transition-all">
              <IconWhatsApp /> WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* À Propos - White text + darker overlay */}
      <section id="apropos" className="relative py-28 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="slideshow">
            <img src="/bg1.jpg" alt="" />
            <img src="/bg2.jpg" alt="" />
            <img src="/bg3.jpg" alt="" />
            <img src="/bg4.jpg" alt="" />
            <img src="/bg5.jpg" alt="" />
            <img src="/bg6.jpg" alt="" />
          </div>
          <div className="absolute inset-0 bg-black/70"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div className="space-y-10">
              <div>
                <p className="text-red-400 text-sm tracking-[0.2em] uppercase font-semibold mb-4">À PROPOS DE RIADH PACK</p>
                <h2 className="text-white text-5xl md:text-6xl font-bold leading-none">Un fabricant algérien<br />de confiance</h2>
              </div>
              <div className="max-w-lg text-white/90 text-lg leading-relaxed space-y-6">
                <p>Riadh Pack est spécialisée dans la fabrication de sacs en polypropylène tissé pour les secteurs agricole, alimentaire et industriel.</p>
                <p>Implantés à Relizane dans la zone industrielle Belhacel, nous combinons technologie moderne et savoir-faire local.</p>
              </div>
              <div className="flex gap-8 text-sm">
                <div className="flex items-center gap-2"><span className="text-red-400 text-xl">★</span><span className="text-white">Qualité industrielle</span></div>
                <div className="flex items-center gap-2"><span className="text-red-400 text-xl">★</span><span className="text-white">Production locale</span></div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-video bg-zinc-900 rounded-3xl overflow-hidden shadow-2xl">
                <img src="riadh pack 1.png" alt="Usine Riadh Pack" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-5 -right-5 bg-white px-8 py-5 rounded-2xl shadow-xl">
                <div className="text-2xl font-bold text-black">Relizane</div>
                <div className="text-gray-600 text-sm">Zone Industrielle Belhacel</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTS - Fixed & Dark */}
      <section id="produits" className="py-24 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-red-400 text-sm tracking-widest uppercase mb-3">NOTRE GAMME</p>
            <h2 className="text-white text-5xl font-bold tracking-tight">Nos Produits Premium</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, i) => (
              <div key={i} className="bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden group hover:border-red-600/50 transition-all duration-500">
                <div className="h-64 overflow-hidden">
                  <img src={product.image} alt={product.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="text-red-500">{product.icon}</div>
                    <h3 className="text-white text-xl font-bold">{product.title}</h3>
                  </div>
                  <p className="text-gray-400 text-[15px] leading-relaxed">{product.desc}</p>
                  <p className="text-red-400 text-xs tracking-widest mt-6 uppercase">{product.use}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rest of your sections (Sectors, Why Us, etc.) can stay or be updated similarly. Let me know if you want the full dark version for all sections. */}

      {/* Contact & Footer - already updated in previous parts */}
      {/* ... keep the rest as you had or tell me if you want me to adjust more sections */}

    </div>
  )
}
