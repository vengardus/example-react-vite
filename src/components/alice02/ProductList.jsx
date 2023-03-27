import { useRef } from 'react';

const ProductList = ({ products, onProductClick }) => {
  const imgRef = useRef(null);

  console.log('products', products)

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Título</th>
          <th>Descripción</th>
          <th>Precio</th>
          <th>Thumbnail</th>
        </tr>
      </thead>
      <tbody>
        {products?.map(product => (
          <tr key={product.id} onClick={() => onProductClick(product)}>
            <td>{product.id}</td>
            <td>{product.title}</td>
            <td>{product.description}</td>
            <td>{product.price}</td>
            <td><img ref={imgRef} src={product.thumbnail} alt={product.title} /></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ProductList;
