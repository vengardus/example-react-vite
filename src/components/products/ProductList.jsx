export const ProductList = ({ products, onProductClick }) => {
  return (
    <>
      <div className='flex justify-center items-center bg-gray-100 mb-3'>
        <h1 className='text-3xl font-bold text-gray-800'>Listado de Productos</h1>
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
                <button onClick={() => onProductClick(product)}> Ver detalles</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

    </>
  )
}
