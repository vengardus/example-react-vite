import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchProducts } from '../components/products/productsSlice'
import { ProductList } from '../components/products/ProductList'
import { ProductDetail } from '../components/products/ProductDetail'
import { Layout } from '../components/ui/Layout'

export const ProductsPage = () => {
  const dispatch = useDispatch()
  const [selectedProduct, setSelectedProduct] = useState(null)
  const { products, isLoading } = useSelector(state => state.products)

  const handleProductClick = (product) => {
    setSelectedProduct(product)
  }

  const handleBackToListClick = () => {
    setSelectedProduct(null)
  }

  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch])

  console.log('page', selectedProduct, products)

  return (
    <Layout>
      {
        (isLoading)
          ? <div>Loading...</div>
          : (
            <div>
              {
              selectedProduct
                ? <ProductDetail
                    product={selectedProduct}
                    onBackToListClick={handleBackToListClick}
                  />
                : <ProductList
                    products={products}
                    onProductClick={handleProductClick}
                  />
              }
            </div>
            )
      }
    </Layout>
  )
}
