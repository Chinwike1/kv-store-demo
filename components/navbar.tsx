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
    <nav className="bg-[#333333]">
      <ul className="flex h-16 justify-between text-white">
        {links.map((link) => (
          <Link
            key={link.route}
            className={cn(
              link.route === pathName && 'bg-[#0F0F10]',
              'flex h-full flex-1 items-center justify-center transition-colors hover:bg-[#272727]',
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
