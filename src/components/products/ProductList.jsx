import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '../../redux/productsSlice';
import { Link } from 'react-router-dom';
import { Footer } from '../ui/Footer';

export const ProductList = () => {
  const dispatch = useDispatch();
  const { products, isLoading } = useSelector(state => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <div className="flex justify-center items-center bg-gray-100 mb-3">
        <h1 className="text-3xl font-bold text-gray-800">Listado de Productos</h1>
      </div>

      {/* <nav className="flex flex-wrap justify-center lg:justify-end">
        <a href="#" className="block px-4 py-2 text-gray-900 hover:text-white hover:bg-gray-900 rounded transition duration-200">Inicio</a>
        <a href="#" className="block px-4 py-2 text-gray-900 hover:text-white hover:bg-gray-900 rounded transition duration-200">Acerca de</a>
        <a href="#" className="block px-4 py-2 text-gray-900 hover:text-white hover:bg-gray-900 rounded transition duration-200">Servicios</a>
        <a href="#" className="block px-4 py-2 text-gray-900 hover:text-white hover:bg-gray-900 rounded transition duration-200">Contacto</a>
      </nav>


      <div className="flex flex-col sm:flex-row">
        <div className="lg:w-1/6 sm:w-auto _bg-gray-200 ">
          <nav className="flex flex-col">
            <a href="#" className="block px-4 py-2 text-gray-900 hover:text-white hover:bg-gray-900 rounded transition duration-200">Inicio</a>
            <a href="#" className="block px-4 py-2 text-gray-900 hover:text-white hover:bg-gray-900 rounded transition duration-200">Acerca de</a>
            <a href="#" className="block px-4 py-2 text-gray-900 hover:text-white hover:bg-gray-900 rounded transition duration-200">Servicios</a>
            <a href="#" className="block px-4 py-2 text-gray-900 hover:text-white hover:bg-gray-900 rounded transition duration-200">Contacto</a>
          </nav>

        </div>
        <div className="w-5/6 pl-3 bg-gray-400">90%</div>
      </div> */}

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

      {/* <Footer /> */}
    </>
  );
};

