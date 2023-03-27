import { useState, useEffect } from 'react';
import ProductList from '../../components/alice02/ProductList';
import ProductDetail from '../../components/alice02/ProductDetail';
import { useFetch } from '../../hooks/useFetch';


const API_URL = 'https://dummyjson.com/products'

function Alice02() {
    //   const [products, setProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);

    const [products, loading] = useFetch(API_URL)

    //   useEffect(() => {
    //     const getProducts = async () => {
    //         try {
    //           const products = await apiProducts();
    //           setProducts(products);
    //         } catch (error) {
    //           console.log(error);
    //         }
    //       };
    //       getProducts();
    //   }, []);

    const handleProductClick = (product) => {
        setSelectedProduct(product);
    };

    const handleBackToListClick = () => {
        setSelectedProduct(null);
    };

    return (
        <>
            {(loading)
                ? <div>Loading...</div>
                :
                <div>
                    {selectedProduct ? (
                        <ProductDetail product={selectedProduct} onBackToListClick={handleBackToListClick} />
                    ) : (
                        <ProductList products={products.products} onProductClick={handleProductClick} />
                    )}
                </div>
            }
        </>
    );
}

export default Alice02;
