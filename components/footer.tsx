import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <footer className="my-7 flex justify-center text-white">
      <span>
        Made by{' '}
        <Link
          target="_blank"
          className="font-semibold underline"
          href="https://chinwike.space"
        >
          Anthony
        </Link>
      </span>
    </footer>
  )
}
