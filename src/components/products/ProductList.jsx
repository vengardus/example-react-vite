// import { useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { fetchProducts } from '../../redux/productsSlice';
// import { Link } from 'react-router-dom';

export const ProductList = ( { products, onProductClick } ) => {
  // const dispatch = useDispatch();
  // const [selectedProduct, setSelectedProduct] = useState(null);
  // const { products, isLoading } = useSelector(state => state.products);

  // const handleProductClick = (product) => {
  //   setSelectedProduct(product);
  // };

  // const handleBackToListClick = () => {
  //   setSelectedProduct(null);
  // };

  // useEffect(() => {
  //   dispatch(fetchProducts());
  // }, [dispatch]);

  // if (isLoading) {
  //   return <p>Loading...</p>;
  // }

  return (
    <>
      <div className="flex justify-center items-center bg-gray-100 mb-3">
        <h1 className="text-3xl font-bold text-gray-800">Listado de Productos</h1>
      </div>

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
          {products?.map(product => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.title}</td>
              <td>{product.description}</td>
              <td>{product.price}</td>
              <td>
                <img src={product.thumbnail} alt={product.title} />
              </td>
              <td>
                <button onClick={ () =>  onProductClick(product) }> Ver detalles</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

    </>
  );
};

