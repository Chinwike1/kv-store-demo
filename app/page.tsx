import Product from '@/components/product'

async function fetchProducts() {
  try {
    const res = await fetch('http://localhost:4000/products', {
      // use  dynamic rendering
      cache: 'no-store',
    })
    const data = await res.json()
    return data
  } catch (error) {
    throw new Error('Could not fetch products')
  }
}

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
