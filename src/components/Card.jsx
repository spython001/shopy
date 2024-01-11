/* eslint-disable react/prop-types */
//TO CONTAIN THE PRODUCT TEMPLATE FOR THE PRODUCT PAGE

export default function Card({product}) {
  return (
    <section className='card' >
        <img src={product.img} alt={product.title} />
      
        <div className="cardDetails">
          <h3>{product.title}</h3>
          
          <div className="cardReviews">
            {product.star} {product.star} {product.star} {product.star} {product.star}
            <span className='totalReviews'>{product.reviews}</span>
          </div>

          <div className="cardPrice">
            <div className="price">
              <del>{product.prevPrice}</del> {product.newPrice}
            </div>
          </div>

        </div>
      </section>

  )
}
