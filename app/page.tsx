import Product from '@/components/product'
import { fetchProducts, populateProducts } from './actions/kv'

export const dynamic = 'force-dynamic'

export default async function Home() {
  const products = await fetchProducts()

  return (
    <main>
      <h2 className="my-4 text-2xl font-semibold">Products</h2>
      {products.map((product: any) => (
        <Product key={product.id} product={product} />
      ))}
    </main>
  )
}
