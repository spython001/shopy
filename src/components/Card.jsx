//TO CONTAIN THE PRODUCT TEMPLATE FOR THE PRODUCT PAGE

export default function Card() {
  return (
    <section className='card'>
        <img src="https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg" alt="shoe" />
      
        <div className="cardDetails">
          <h3>Shoe</h3>
          
          <div className="cardReviews">
            <i className="ratingStar fa-solid fa-star"></i>
            <i className="ratingStar fa-solid fa-star"></i>
            <i className="ratingStar fa-solid fa-star"></i>
            <i className="ratingStar fa-solid fa-star"></i>
            <span className='totalReviews'>4</span>
          </div>

          <div className="cardPrice">
            <div className="price">
              <del>$300</del> 200
            </div>
          </div>

        </div>
      </section>

  )
}
