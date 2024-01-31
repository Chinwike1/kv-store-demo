import { fetchWishlist } from '../actions/kv'
import Product from '@/components/product'

export const dynamic = 'force-dynamic'

export default async function Wishlist() {
  const wishlist = await fetchWishlist()

  return (
    <div>
      <h2 className="my-4 text-2xl font-semibold">Wishlist</h2>
      {wishlist.map((product: any) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  )
}
