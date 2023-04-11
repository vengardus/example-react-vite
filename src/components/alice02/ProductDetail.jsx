import { useRef } from 'react'

const ProductDetail = ({ product, onBackToListClick }) => {
  const imgRef = useRef(null)

  return (
    <div>
      <h1>{product.title}</h1>
      <p>{product.description}</p>
      <p>${product.price}</p>
      <img ref={imgRef} src={product.thumbnail} alt={product.title} />
      <br />
      <button onClick={onBackToListClick}>Back to List</button>
    </div>
  )
}

export default ProductDetail
