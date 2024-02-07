import Link from 'next/link'
import { fetchWishlist } from '../actions/kv'
import Product from '@/components/product'
import { Suspense } from 'react'
import ClearWishlistButton from '@/components/clear-wishlist-button'

export const dynamic = 'force-dynamic'

export default async function Wishlist() {
  const wishlist = await fetchWishlist()

  return (
    <div className="text-white">
      <h2 className="my-4 text-2xl font-semibold">Wishlist</h2>
      {wishlist.length > 0 ? (
        wishlist.map((item: any) => (
          <Suspense key={item.id} fallback={null}>
            <Product product={item} />
          </Suspense>
        ))
      ) : (
        <p className="py-16 text-center">
          Your wishlist is empty,{' '}
          <Link className="text-emerald-500 hover:underline" href="/">
            take a look around.
          </Link>
        </p>
      )}
      {wishlist.length > 0 && <ClearWishlistButton />}
    </div>
  )
}
