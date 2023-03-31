import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProductDetails = () => {
  const { id } = useParams();
  const { products } = useSelector(state => state.products);
  console.log('PRODUCTSS!!', products)
  console.log('id!!', typeof(id))
  const product = products.find(p => p.id === parseInt(id));
  console.log('PRODUCT!!', product)

  return (
    <div>
      <h1>{product?.title}</h1>
      <p>{product?.description}</p>
      <p>{product?.price}</p>
      <img src={product?.thumbnail} alt={product.title} />
      <Link to="/alice03">Volver al listado</Link>
    </div>
  );
};

export default ProductDetails;
