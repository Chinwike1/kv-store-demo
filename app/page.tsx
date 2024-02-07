import { Suspense } from 'react'
import { fetchProducts } from './actions/kv'
import Product from '@/components/product'
import Fallback from '@/components/fallback'

export const dynamic = 'force-dynamic'

export default async function Home() {
  const products = await fetchProducts()
  console.log(products)

  return (
    <main className="text-white">
      <h2 className="my-4 text-2xl font-semibold">Products</h2>
      {products[0] !== null ? (
        products.map((product: any) => (
          <Suspense key={product.id} fallback={null}>
            <Product product={product} />
          </Suspense>
        ))
      ) : (
        <Fallback />
      )}
    </main>
  )
}
