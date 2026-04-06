import { createFileRoute } from '@tanstack/react-router'
import { useState, useEffect } from 'react'

export const Route = createFileRoute('/')({
  component: RiadhPackHome,
})

// (ALL YOUR ICONS + COMPONENTS REMAIN UNCHANGED)

/* ─── Main Component ─── */

function RiadhPackHome() {
  const [menuOpen, setMenuOpen] = useState(false)

  // 🔥 CLEAN SCROLL ANIMATION
  useEffect(() => {
    const elements = document.querySelectorAll('#about-text, #about-image');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-x-0', 'scale-100');
        }
      });
    }, { threshold: 0.3 });

    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const navLinks = [
    { href: '#accueil', label: 'Accueil' },
    { href: '#produits', label: 'Produits' },
    { href: '#apropos', label: 'À propos' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <div className="min-h-screen">

      {/* KEEP EVERYTHING SAME ABOVE */}

      {/* ── À PROPOS (UPDATED ONLY) ── */}
      <section id="apropos" className="py-28 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-20 items-center">

            {/* TEXT */}
            <div 
              id="about-text"
              className="space-y-10 opacity-0 -translate-x-24 transition-all duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)]"
            >
              <div>
                <p className="text-red-600 text-sm uppercase mb-4">
                  À PROPOS DE RIADH PACK
                </p>
                <h2 className="text-5xl font-bold">
                  Un fabricant algérien<br />de confiance
                </h2>
              </div>

              <div className="text-gray-600 space-y-4">
                <p>
                  Riadh Pack est spécialisée dans la fabrication de sacs en polypropylène tissé.
                </p>
                <p>
                  Nous combinons technologie moderne et savoir-faire local.
                </p>
              </div>
            </div>

            {/* IMAGE */}
            <div 
              id="about-image"
              className="relative opacity-0 translate-x-24 scale-95 transition-all duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] delay-300"
            >
              <img 
                src="riadh pack 1.png" 
                className="w-full rounded-3xl shadow-2xl object-cover"
              />
            </div>

          </div>
        </div>
      </section>

      {/* KEEP EVERYTHING SAME BELOW */}

    </div>
  )
}
