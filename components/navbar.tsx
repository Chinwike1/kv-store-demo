'use client'

import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

const links = [
  {
    name: 'Products',
    route: '/',
  },
  {
    name: 'Wishlist',
    route: '/wishlist',
  },
]

export default function Navbar() {
  const pathName = usePathname()

  return (
    <nav className=" bg-[#2A529F]">
      <ul className="flex h-16 justify-between text-white">
        {links.map((link) => (
          <Link
            key={link.route}
            className={cn(
              link.route === pathName && 'bg-[#0C3074]',
              'flex h-full flex-1 items-center justify-center transition-colors',
            )}
            href={link.route}
          >
            <li>{link.name}</li>
          </Link>
        ))}
      </ul>
    </nav>
  )
}
