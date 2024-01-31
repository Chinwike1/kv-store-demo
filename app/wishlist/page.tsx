import Link from 'next/link'
import { fetchWishlist } from '../actions/kv'
import Product from '@/components/product'
import { Suspense } from 'react'

export const dynamic = 'force-dynamic'

export default async function Wishlist() {
  const wishlist = await fetchWishlist()

  return (
    <div>
      <h2 className="my-4 text-2xl font-semibold">Wishlist</h2>
      {wishlist.length > 0 ? (
        wishlist.map((item: any) => (
          <Suspense fallback={null}>
            <Product key={item.id} product={item} />
          </Suspense>
        ))
      ) : (
        <p className="py-16 text-center">
          Your wishlist is empty,{' '}
          <Link className="text-sky-500" href="/">
            vist the store.
          </Link>
        </p>
      )}
    </div>
  )
}
