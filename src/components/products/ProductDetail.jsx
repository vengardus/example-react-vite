import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';


const ProductDetails = ( { id } ) => {
  // const { id } = useParams();
  const { products } = useSelector(state => state.products);
  console.log('XXX', id, typeof(id), products)
  const product = products.find(p => p.id === parseInt(id));
  console.log('PROD', product)
  return (
    <div>
      <h1>{product?.title}</h1>
      <p>{product?.description}</p>
      <p>{product?.price}</p>
      <img src={product?.thumbnail} alt={product.title} />
      <Link to="/products">Volver al listado</Link>
    </div>
  );
};

export default ProductDetails;
