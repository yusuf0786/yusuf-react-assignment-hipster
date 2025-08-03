"use client"

import { useState, useEffect } from "react"

interface Product {
  id: number
  title: string
  price: number
  description: string
  image: string
  category: string
}

// Fallback data based on the API structure
const fallbackProducts: Product[] = [
  {
    id: 1,
    title: "Fjallraven - Foldsack No. 1 Backpack",
    price: 109.95,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    image: "/placeholder.svg?height=200&width=200&text=Backpack",
    category: "men's clothing",
  },
  {
    id: 2,
    title: "Mens Casual Premium Slim Fit T-Shirt",
    price: 22.3,
    description:
      "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing",
    image: "/placeholder.svg?height=200&width=200&text=T-Shirt",
    category: "men's clothing",
  },
  {
    id: 3,
    title: "Mens Cotton Jacket",
    price: 55.99,
    description:
      "Great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing",
    image: "/placeholder.svg?height=200&width=200&text=Jacket",
    category: "men's clothing",
  },
  {
    id: 4,
    title: "Mens Casual Slim Fit",
    price: 15.99,
    description:
      "The color could be slightly different between on the screen and in practice. Please note that body builds vary by person",
    image: "/placeholder.svg?height=200&width=200&text=Casual",
    category: "men's clothing",
  },
  {
    id: 5,
    title: "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
    price: 695,
    description:
      "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl",
    image: "/placeholder.svg?height=200&width=200&text=Jewelry",
    category: "jewelery",
  },
  {
    id: 6,
    title: "Solid Gold Petite Micropave",
    price: 168,
    description:
      "Satisfaction Guaranteed. Return or exchange any order within 30 days. Designed and sold by Hafeez Center in the United States",
    image: "/placeholder.svg?height=200&width=200&text=Gold",
    category: "jewelery",
  },
]

export function useProducts() {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [usingFallback, setUsingFallback] = useState(false)

  useEffect(() => {
    async function fetchProducts() {
      try {
        setLoading(true)
        setError(null)

        // Try to fetch from the API with a timeout
        const controller = new AbortController()
        const timeoutId = setTimeout(() => controller.abort(), 10000) // 10 second timeout

        const response = await fetch("https://fakestoreapi.com/products?limit=6", {
          signal: controller.signal,
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        })

        clearTimeout(timeoutId)

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }

        const data = await response.json()

        if (Array.isArray(data) && data.length > 0) {
          setProducts(data)
          setUsingFallback(false)
        } else {
          throw new Error("Invalid data received from API")
        }
      } catch (err) {
        console.warn("Failed to fetch from API, using fallback data:", err)

        // Use fallback data when API fails
        setProducts(fallbackProducts)
        setUsingFallback(true)

        if (err instanceof Error) {
          if (err.name === "AbortError") {
            setError("Request timed out - using offline data")
          } else {
            setError(`API unavailable - using offline data (${err.message})`)
          }
        } else {
          setError("Network error - using offline data")
        }
      } finally {
        setLoading(false)
      }
    }

    fetchProducts()
  }, [])

  return { products, loading, error, usingFallback }
}
