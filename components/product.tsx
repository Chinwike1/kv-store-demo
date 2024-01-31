'use client'
import Image from 'next/image'
import { LongArrowRight } from './icons'
import { addToWishlist } from '@/app/actions/kv'
import { ProductType } from '@/data/products'
import { usePathname } from 'next/navigation'

export default function Product({ product }: { product: ProductType }) {
  const pathname = usePathname()

  return (
    <div className="gap-5 border-b border-t border-slate-400 py-4 md:flex">
      <div className="relative h-80 flex-1 rounded-lg bg-slate-300">
        <Image
          className="w-full bg-cover object-contain"
          alt={product.name}
          fill={true}
          src={product.thumbnail}
        />
      </div>
      <div className="flex flex-1 flex-col justify-center gap-3 self-center">
        <h2 className="mt-4 text-xl font-bold">{product.name}</h2>
        <span className="font-bold">{'$' + product.price}</span>
        {pathname === '/' && (
          <button
            onClick={() => addToWishlist(product)}
            className="group flex items-center hover:text-emerald-500"
          >
            <span>Add to wishlist</span>
            <LongArrowRight className="ml-4 h-8 w-8 transition-colors ease-out group-hover:fill-emerald-500" />
          </button>
        )}
      </div>
    </div>
  )
}
