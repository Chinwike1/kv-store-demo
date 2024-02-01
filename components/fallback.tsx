'use client'
import { populateProducts } from '@/app/actions/kv'

export default function Fallback() {
  return (
    <div className="flex flex-col items-center justify-center p-16">
      <p className="pb-4 text-center">Hmm, database must be empty.</p>
      <button
        className="mx-auto rounded-lg border-2 border-emerald-500 px-5 py-3 text-emerald-500 transition-colors hover:bg-emerald-500 hover:text-white"
        onClick={() => populateProducts()}
      >
        Populate KV store
      </button>
    </div>
  )
}
