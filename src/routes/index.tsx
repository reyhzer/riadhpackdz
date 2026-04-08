import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'

export const Route = createFileRoute('/')({
  component: RiadhPackHome,
})

// ─── All Icons (keep your original ones) ─────────────────────────────────────
function IconBag() { /* paste your original IconBag here */ }
function IconWheat() { /* paste your original */ }
function IconFood() { /* paste */ }
function IconValve() { /* paste */ }
function IconCustom() { /* paste */ }
function IconAgri() { /* paste */ }
function IconIndustry() { /* paste */ }
function IconExport() { /* paste */ }
function IconQuality() { /* paste */ }
function IconPrice() { /* paste */ }
function IconDelay() { /* paste */ }
function IconPrint() { /* paste */ }
function IconScale() { /* paste */ }
function IconPhone() { /* paste */ }
function IconEmail() { /* paste */ }
function IconLocation() { /* paste */ }
function IconClock() { /* paste */ }

function IconWhatsApp() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-white">
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
        <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="white" className="w-12 h-12">
            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-white">Message envoyé !</h3>
        <p className="text-gray-400 mt-2">Nous vous contacterons très bientôt.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-gray-300 mb-2">Nom complet</label>
        <input type="text" name="name" required value={fields.name} onChange={handleChange}
          className="w-full bg-zinc-900 border border-zinc-700 rounded-2xl px-6 py-4 text-white focus:border-red-600" />
      </div>
      <div>
        <label className="block text-gray-300 mb-2">Email</label>
        <input type="email" name="email" required value={fields.email} onChange={handleChange}
          className="w-full bg-zinc-900 border border-zinc-700 rounded-2xl px-6 py-4 text-white focus:border-red-600" />
      </div>
      <div>
        <label className="block text-gray-300 mb-2">Votre message</label>
        <textarea name="message" required rows={6} value={fields.message} onChange={handleChange}
          placeholder="Quantité, type de sac, dimensions, impression..." 
          className="w-full bg-zinc-900 border border-zinc-700 rounded-2xl px-6 py-4 text-white focus:border-red-600 resize-none" />
      </div>
      <button type="submit" disabled={loading}
        className="w-full bg-red-600 hover:bg-red-700 py-4 rounded-2xl font-bold tracking-widest uppercase">
        {loading ? "Envoi en cours..." : "ENVOYER LE MESSAGE"}
      </button>
    </form>
  )
}

// ─── Main Component ──────────────────────────────────────────────────────────
function RiadhPackHome() {
  const [menuOpen, setMenuOpen] = useState(false)

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  const products = [
    { icon: <IconBag />, title: 'Sacs tissés en polypropylène', desc: 'Sacs standard haute résistance pour charges lourdes.', use: 'Tous secteurs', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80' },
    { icon: <IconWheat />, title: 'Sacs agricoles', desc: 'Résistants à l\'humidité et UV.', use: 'Agriculture', image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=600&q=80' },
    { icon: <IconFood />, title: 'Sacs alimentaires', desc: 'Conformes aux normes hygiène.', use: 'Agroalimentaire', image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=600&q=80' },
    { icon: <IconValve />, title: 'Sacs à valve', desc: 'Pour ciment, plâtre et poudres.', use: 'BTP & Industrie', image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80' },
    { icon: <IconCustom />, title: 'Sacs personnalisés', desc: 'Impression jusqu\'à 6 couleurs.', use: 'Marques & Export', image: 'https://images.unsplash.com/photo-1586769852044-692d6e3703f0?w=600&q=80' },
    { icon: <IconScale />, title: 'Grandes quantités', desc: 'Production industrielle.', use: 'Grossistes', image: 'https://images.unsplash.com/photo-1586769852836-bc069f19e1b8?w=600&q=80' },
  ]

  return (
    <div className="min-h-screen bg-black text-white" style={{ fontFamily: 'Open Sans, sans-serif' }}>

      {/* HEADER */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">
          <a href="#accueil">
            <img src="/logo_riadhpack.png" alt="Riadh Pack" className="h-16 w-auto" />
          </a>

          <nav className="hidden md:flex items-center gap-10">
            {['accueil', 'produits', 'apropos', 'contact'].map(id => (
              <button key={id} onClick={() => scrollTo(id)} className="text-white/80 hover:text-white uppercase tracking-widest text-sm font-semibold">
                {id === 'apropos' ? 'À propos' : id.charAt(0).toUpperCase() + id.slice(1)}
              </button>
            ))}
          </nav>

          <button onClick={() => scrollTo('contact')} className="bg-red-600 hover:bg-red-700 px-8 py-3 text-xs font-bold tracking-widest uppercase rounded-xl">
            DEMANDER UN DEVIS
          </button>

          <button className="md:hidden text-3xl" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? '✕' : '☰'}
          </button>
        </div>
      </header>

      {/* HERO */}
      <section id="accueil" className="relative min-h-screen flex items-center pt-20">
        <div className="absolute inset-0">
          <video autoPlay muted loop playsInline className="w-full h-full object-cover">
            <source src="/video.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/70" />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-6xl md:text-7xl font-bold leading-none mb-6">EMBALLAGE INDUSTRIEL<br />D'EXCELLENCE</h1>
          <p className="text-xl text-gray-300 mb-10">Fabricant algérien de sacs en polypropylène tissé</p>
          <button onClick={() => scrollTo('contact')} className="bg-white text-black px-10 py-5 rounded-2xl font-bold text-lg">Obtenir un devis</button>
        </div>
      </section>

      {/* ── À PROPOS SECTION (with sliding background restored) ── */}
<section id="apropos" className="relative py-28 overflow-hidden min-h-[700px] flex items-center">
  
  {/* Sliding Background Images */}
  <div className="absolute inset-0 z-0">
    <div className="slideshow absolute inset-0">
      <img src="/bg1.jpg" alt="" className="absolute inset-0 w-full h-full object-cover opacity-0 animate-slide" />
      <img src="/bg2.jpg" alt="" className="absolute inset-0 w-full h-full object-cover opacity-0 animate-slide" style={{ animationDelay: '4s' }} />
      <img src="/bg3.jpg" alt="" className="absolute inset-0 w-full h-full object-cover opacity-0 animate-slide" style={{ animationDelay: '8s' }} />
      <img src="/bg4.jpg" alt="" className="absolute inset-0 w-full h-full object-cover opacity-0 animate-slide" style={{ animationDelay: '12s' }} />
      <img src="/bg5.jpg" alt="" className="absolute inset-0 w-full h-full object-cover opacity-0 animate-slide" style={{ animationDelay: '16s' }} />
      <img src="/bg6.jpg" alt="" className="absolute inset-0 w-full h-full object-cover opacity-0 animate-slide" style={{ animationDelay: '20s' }} />
    </div>
    {/* Strong dark overlay for premium look */}
    <div className="absolute inset-0 bg-black/75"></div>
  </div>

  <div className="relative z-10 max-w-7xl mx-auto px-6">
    <div className="grid md:grid-cols-2 gap-20 items-center">
      
      {/* Left - Text */}
      <div className="space-y-10">
        <div>
          <p className="text-red-400 text-sm tracking-[3px] uppercase font-semibold mb-4">
            À PROPOS DE RIADH PACK
          </p>
          <h2 className="text-5xl md:text-6xl font-bold leading-none tracking-tight">
            Un fabricant algérien<br />de confiance depuis 2015
          </h2>
        </div>

        <div className="max-w-lg text-gray-300 text-lg leading-relaxed space-y-6">
          <p>
            Riadh Pack est spécialisée dans la fabrication de sacs en polypropylène tissé 
            pour les secteurs agricole, alimentaire et industriel.
          </p>
          <p>
            Implantés à Relizane dans la zone industrielle Belhacel, nous combinons 
            technologie moderne et savoir-faire local pour offrir des solutions 
            d'emballage de haute qualité à des prix compétitifs.
          </p>
        </div>

        <div className="flex gap-8 text-sm">
          <div className="flex items-center gap-3">
            <span className="text-red-500 text-2xl">★</span>
            <span className="font-medium">Qualité industrielle</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-red-500 text-2xl">★</span>
            <span className="font-medium">Production locale</span>
          </div>
        </div>
      </div>

      {/* Right - Image */}
      <div className="relative">
        <div className="aspect-video bg-zinc-900 rounded-3xl overflow-hidden shadow-2xl border border-white/10">
          <img 
            src="riadh pack 1.png" 
            alt="Riadh Pack - Usine Relizane" 
            className="w-full h-full object-cover"
          />
        </div>

        <div className="absolute -bottom-6 -right-6 bg-zinc-900 border border-white/10 px-8 py-6 rounded-3xl shadow-2xl">
          <div className="text-3xl font-bold text-white">Relizane</div>
          <div className="text-red-400 text-sm tracking-widest">Zone Industrielle Belhacel</div>
        </div>
      </div>

    </div>
  </div>
</section>

      {/* PRODUCTS */}
      <section id="produits" className="py-24 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-red-400 uppercase tracking-widest">NOTRE GAMME</p>
            <h2 className="text-5xl font-bold mt-3">Nos Produits</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((p, i) => (
              <div key={i} className="bg-zinc-900 rounded-3xl overflow-hidden border border-zinc-800 hover:border-red-600 transition-all">
                <img src={p.image} className="w-full h-64 object-cover" alt={p.title} />
                <div className="p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="text-red-500">{p.icon}</div>
                    <h3 className="text-xl font-bold">{p.title}</h3>
                  </div>
                  <p className="text-gray-400">{p.desc}</p>
                  <p className="text-red-400 text-sm mt-6 uppercase tracking-widest">{p.use}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-28 bg-zinc-950">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold">Demandez votre devis</h2>
            <p className="text-gray-400 mt-4">Remplissez le formulaire ci-dessous</p>
          </div>

          <div className="grid md:grid-cols-5 gap-12">
            <div className="md:col-span-2 space-y-10">
              <div className="flex gap-5">
                <IconPhone className="w-8 h-8 text-red-500 mt-1" />
                <div>
                  <div className="text-gray-400">Téléphone</div>
                  <a href="tel:+213560042526" className="text-xl">+213 560 04 25 26</a>
                </div>
              </div>
              <div className="flex gap-5">
                <IconEmail className="w-8 h-8 text-red-500 mt-1" />
                <div>
                  <div className="text-gray-400">Email</div>
                  <a href="mailto:riadh48000@hotmail.com" className="text-xl">riadh48000@hotmail.com</a>
                </div>
              </div>
              <div className="flex gap-5">
                <IconLocation className="w-8 h-8 text-red-500 mt-1" />
                <div>
                  <div className="text-gray-400">Adresse</div>
                  <div>Zone Industrielle Belhacel<br />Relizane – Algérie</div>
                </div>
              </div>
            </div>

            <div className="md:col-span-3 bg-zinc-900 p-10 rounded-3xl">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-12 border-t border-zinc-900">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <img src="/logo_riadhpack.png" alt="Riadh Pack" className="h-12 mx-auto mb-6" />
          <p className="text-gray-500">© 2026 Riadh Pack - Tous droits réservés</p>
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <a href="https://wa.me/213560042526" target="_blank" rel="noopener noreferrer"
        className="fixed bottom-8 right-8 bg-[#25D366] w-16 h-16 rounded-full flex items-center justify-center shadow-2xl z-50 hover:scale-110 transition">
        <IconWhatsApp />
      </a>
    </div>
  )
}
