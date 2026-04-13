import { HeadContent, Scripts, createRootRoute, Outlet } from '@tanstack/react-router'
import '../styles.css'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: 'Riadh Pack – Solutions d\'emballage industriel' },
      {
        name: 'description',
        content: 'Riadh Pack, fabricant algérien de sacs tissés en polypropylène et solutions d\'emballage industriel pour les secteurs agricole, alimentaire et industriel.',
      },
    ],
  }),
  component: RootComponent,   // ← Use 'component', not 'shellComponent'
})

function RootComponent() {
  return (
    <html lang="fr">
      <head>
        <HeadContent />
      </head>
      <body className="bg-white text-gray-900 antialiased">
        {/* Global Header / Navigation */}
        <header className="bg-black text-white sticky top-0 z-50">
          <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
            <div className="flex items-center gap-4">
              {/* Add your logo here - put the image in public/ folder */}
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-black font-bold text-xl">
                RP
              </div>
              <div>
                <h1 className="text-2xl font-bold tracking-tight">Riadh Pack</h1>
                <p className="text-sm text-gray-400 -mt-1">SACS TISSÉS</p>
              </div>
            </div>

            <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
              <a href="/" className="hover:text-green-400 transition">Accueil</a>
              <a href="/#products" className="hover:text-green-400 transition">Produits</a>
              <a href="/#about" className="hover:text-green-400 transition">À propos</a>
              <a 
                href="https://wa.me/2135XXXXXXXX"   // ← REPLACE WITH YOUR REAL NUMBER
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-500 px-6 py-3 rounded-2xl font-semibold transition"
              >
                📲 Demander un devis
              </a>
            </nav>

            {/* Mobile menu button - you can improve this later */}
            <button className="md:hidden text-2xl">☰</button>
          </div>
        </header>

        {/* Main content area - this renders your homepage and other pages */}
        <main>
          <Outlet />
        </main>

        {/* Simple footer */}
        <footer className="bg-black text-white py-12 text-center text-sm">
          <div className="max-w-6xl mx-auto px-6">
            © 2026 Riadh Pack — Fabricant Algérien à Relizane (Zone Industrielle Belhacel)<br />
            Solutions d'emballage industriel en polypropylène tissé
          </div>
        </footer>

        <Scripts />
      </body>
    </html>
  )
}