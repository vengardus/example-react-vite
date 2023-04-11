import { useState } from 'react'
import ProductList from './ProductList'
import ProductDetail from './ProductDetail'
import { useFetch } from '../../hooks/useFetch'

const API_URL = 'https://dummyjson.com/products'

export const Alice02 = () => {
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [products, loading, error] = useFetch(API_URL)

  const handleProductClick = (product) => {
    setSelectedProduct(product)
  }

  const handleBackToListClick = () => {
    setSelectedProduct(null)
  }

  console.log('alice02')

  return (
    <>
      {
      (loading)
        ? <div>Loading...</div>
        : (error)
            ? <div>Ocurrió un Error: {error}</div>
            : (
              <div>
                {
                selectedProduct
                  ? <ProductDetail
                      product={selectedProduct}
                      onBackToListClick={handleBackToListClick}
                    />
                  : <ProductList
                      products={products.products}
                      onProductClick={handleProductClick}
                    />
                }
              </div>
              )
      }
    </>
  )
}

export default Alice02
