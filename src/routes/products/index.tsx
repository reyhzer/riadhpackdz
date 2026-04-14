import { createFileRoute, Link } from '@tanstack/react-router'
import { products } from '../../data/products'

export const Route = createFileRoute('/products/')({
  component: Products,
})

function Products() {
  return (
    <div className="pt-24 px-6 text-white">
      <h1 className="text-4xl mb-8 text-center">Produits</h1>

      <div className="grid md:grid-cols-3 gap-6">
        {products.map(p => (
          <Link key={p.id} to={`/products/${p.id}`}>
            <div className="border p-4 hover:bg-white hover:text-black transition">
              <img src={p.image} className="mb-4 rounded" />
              <h2>{p.name}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}