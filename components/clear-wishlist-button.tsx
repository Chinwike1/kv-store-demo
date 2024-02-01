'use client'

import { clearWishlist } from '@/app/actions/kv'

export default function ClearWishlistButton() {
  return (
    <div className="flex">
      <button
        onClick={() => clearWishlist()}
        className="mx-auto my-5 w-fit rounded-lg border-2 border-rose-400 px-5 py-3 text-rose-400 transition-colors hover:bg-rose-400 hover:text-white"
      >
        Clear Wishlist
      </button>
    </div>
  )
}
