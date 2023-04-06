import React from 'react'
import { Layout } from '../components/ui/Layout'
import ProductDetails from '../components/products/ProductDetail'
import { useParams } from 'react-router-dom'

export const ProductDetailPage = () => {
    const { id } = useParams()

    console.log('ID', id)

    return (
        <Layout>
            <ProductDetails id={ id } />
        </Layout>
    )
}
