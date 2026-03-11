import { useEffect, useState } from 'react'
import api from '../lib/api'
import { products as fallbackProducts, categories as fallbackCategories } from '../data/products'

const normalizeProduct = (product, index) => ({
  ...product,
  id: product._id || product.id || `product-${index}`,
  image: product.image || '',
  bg: product.bg || fallbackProducts[index % fallbackProducts.length]?.bg || '#fef3c7',
  emoji: product.emoji || fallbackProducts[index % fallbackProducts.length]?.emoji || '🪔',
})

export function useProducts() {
  const [products, setProducts] = useState([])
  const [categories, setCategories] = useState(fallbackCategories)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [source, setSource] = useState('api')

  useEffect(() => {
    let ignore = false

    async function loadProducts() {
      try {
        setLoading(true)
        const response = await api.get('/products')
        const apiProducts = (response.data?.data || []).map(normalizeProduct)

        if (ignore) return

        setProducts(apiProducts)
        setCategories(['All', ...new Set(apiProducts.map((product) => product.category))])
        setError('')
        setSource(response.data?.source || 'api')
      } catch (requestError) {
        if (ignore) return

        setProducts(fallbackProducts.map(normalizeProduct))
        setCategories(fallbackCategories)
        setError('Backend catalog is unavailable right now. Showing local fallback data.')
        setSource('fallback')
      } finally {
        if (!ignore) {
          setLoading(false)
        }
      }
    }

    loadProducts()

    return () => {
      ignore = true
    }
  }, [])

  return {
    products,
    categories,
    loading,
    error,
    source,
  }
}
