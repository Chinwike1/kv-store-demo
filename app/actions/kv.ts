'use server'
import { kv } from '@vercel/kv'
import { revalidatePath } from 'next/cache'
import { ProductType, products } from '@/data/products'
import { redirect } from 'next/navigation'

export async function populateProducts() {
  products.forEach((product: ProductType) => {
    kv.hset(`product:${product.id}`, product)
  })
  revalidatePath('/')
}

export async function fetchProducts() {
  try {
    const products = await Promise.all([
      kv.hgetall('product:1'),
      kv.hgetall('product:2'),
      kv.hgetall('product:3'),
      kv.hgetall('product:4'),
    ])

    // KV miss
    if (products[0] === null) {
      console.log('KV miss')
      // db query here
    }

    return products
  } catch (error) {
    throw new Error('Error fetching products')
  }
}

export async function addToWishlist(product: ProductType) {
  try {
    await kv.zadd(`user:${1}:wishlist`, {
      score: Date.now(),
      member: 'product:' + product.id,
    })
  } catch (error) {
    console.log(error)
    throw new Error('Could not add product')
  }

  revalidatePath('/wishlist')
  redirect('/wishlist')
}

export async function fetchWishlist() {
  try {
    const wishlist = await kv.zrange(`user:${1}:wishlist`, 0, -1)
    const res = wishlist.map((item) => kv.hgetall(`${item}`))
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

export async function clearWishlist() {
  try {
    await kv.del(`user:${1}:wishlist`)
  } catch (error) {
    throw new Error('Error clearing wishlist')
  }

  revalidatePath('/wishlist')
}
