'use server'
import { kv } from '@vercel/kv'
import { type Product } from '@/components/product'

export async function populateProducts() {
  try {
    const res = await fetch('http://localhost:4000/products')
    const products = await res.json()

    products.forEach((product: Product) => {
      kv.hset(`product:${product.id}`, product)
    })
  } catch (error) {
    throw new Error('An error occurred')
  }
}

export async function fetchProducts() {
  try {
    const products = await Promise.all([
      kv.hgetall('product:1'),
      kv.hgetall('product:2'),
      kv.hgetall('product:3'),
      kv.hgetall('product:4'),
    ])

    // if KV miss, fetch from DB
    if (products[0] === null) {
      console.log('KV miss')
      const res = await fetch('http://localhost:4000/products', {
        // use  dynamic rendering
        cache: 'no-store',
      })
      const data = await res.json()
      return data
    }

    return products
  } catch (error) {
    throw new Error('Error fetching products')
  }
}

export async function addToWishlist(product: Product) {
  try {
    await kv.zadd(`user:${3}:wishlist`, {
      score: Date.now(),
      member: 'product:' + product.id,
    })
  } catch (error) {
    console.log(error)
    throw new Error('Could not add product')
  }
}

export async function fetchWishlist() {
  try {
    const wishlist = await kv.zrange('user:3:wishlist', 0, -1)
    const res = wishlist.map(async (item) => kv.hgetall(`${item}`))
    const products = await Promise.all(res)

    if (products.length === 0) {
      console.log('KV Miss')
      // fetch from db
    }
    return products
  } catch (error) {
    throw new Error('Could not fetch wishlist')
  }
}
