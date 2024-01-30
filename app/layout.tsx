import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils'
import Navbar from '@/components/navbar'

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '700'] })

export const metadata: Metadata = {
  title: 'KV Demo',
  description: "A demo e-commerce application powered by Vercel's KV Store",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          poppins.className,
          process.env.NODE_ENV !== 'production' && 'debug-screens',
          'mx-auto min-h-screen xl:mt-8 xl:w-2/4',
        )}
      >
        <Navbar />
        <div className="container mx-auto p-8">{children}</div>
      </body>
    </html>
  )
}
