/* eslint-disable react/prop-types */
//TO CONTAIN THE PRODUCT TEMPLATE FOR THE PRODUCT PAGE

export default function Card({img, title, star, reviews, newPrice,  prevPrice}) {
  return (
    <section className='card' >
        <img src={img} alt="shoe" />
      
        <div className="cardDetails">
          <h3>{title}</h3>
          
          <div className="cardReviews">
            {star} {star} {star} {star} {star}
            <span className='totalReviews'>{reviews}</span>
          </div>

          <div className="cardPrice">
            <div className="price">
              <del>${prevPrice}</del> {newPrice}
            </div>
          </div>

        </div>
      </section>

  )
}
