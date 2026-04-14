import { createFileRoute } from '@tanstack/react-router'
import { products } from '../../data/products'

export const Route = createFileRoute('/products/$productId')({
  component: ProductPage,
})

function ProductPage() {
  const { productId } = Route.useParams()

  const product = products.find(p => p.id === productId)

  if (!product) {
    return <div className="pt-24 text-center">Produit introuvable</div>
  }

  return (
    <div className="pt-24 px-6 text-white max-w-3xl mx-auto">
      <img src={product.image} className="rounded-xl mb-6" />
      <h1 className="text-4xl mb-4">{product.name}</h1>
      <p className="text-gray-400">{product.description}</p>
    </div>
  )
}