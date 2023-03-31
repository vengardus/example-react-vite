import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '../../redux/productsSlice';
import { Link } from 'react-router-dom';

export const ProductList = () => {
  console.log('ed')
  const dispatch = useDispatch();
  const { products, isLoading } = useSelector(state => state.products);
  console.log('PRODIUCS', products)
  

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Description</th>
          <th>Price</th>
          <th>Thumbnail</th>
        </tr>
      </thead>
      <tbody>
        {products.map(product => (
          <tr key={product.id}>
            <td>{product.id}</td>
            <td>{product.title}</td>
            <td>{product.description}</td>
            <td>{product.price}</td>
            <td>
              <img src={product.thumbnail} alt={product.title} />
            </td>
            <td>
              <Link to={`/product/${product.id}`}>Ver detalles</Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

