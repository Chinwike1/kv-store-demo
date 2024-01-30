import Image from 'next/image'
import { HeartOutline, LongArrowRight } from './icons'

type Product = {
  name: string
  thumbnail: string
  price: string
}

export default function Product({ product }: { product: Product }) {
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
        <HeartOutline className="h-5 w-5 cursor-pointer transition-colors duration-500 ease-in-out hover:fill-black" />
        <button className="group flex items-center hover:text-emerald-500">
          <span>Move to cart</span>
          <LongArrowRight className="ml-4 h-8 w-8 transition-colors ease-out group-hover:fill-emerald-500" />
        </button>
      </div>
    </div>
  )
}
