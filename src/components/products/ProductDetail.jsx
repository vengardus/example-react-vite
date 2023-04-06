

export const ProductDetail = ( { product, onBackToListClick } ) => {
  console.log('detail', product)
  return (
    <div>
      <h1>{product?.title}</h1>
      <p>{product?.description}</p>
      <p>{product?.price}</p>
      <img src={product?.thumbnail} alt={product.title} />
      <button onClick={ onBackToListClick }>Volver al listado</button>
    </div>
  );
};

