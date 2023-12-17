import './price.scss'

export default function Price() {
  return (
    <div className='price'>
      <h2 className='priceTitle'>Price</h2>

      <label className='labelContainer'>
          <input type='radio' name='test2'/>
          <span className="checkmark"></span>All
      </label>

      <label className='labelContainer'>
          <input type='radio' name='test2'/>
          <span className="checkmark"></span>$0-50
      </label>

      <label className='labelContainer'>
          <input type='radio' name='test2'/>
          <span className="checkmark"></span>$50-$100
      </label>

      <label className='labelContainer'>
          <input type='radio' name='test2'/>
          <span className="checkmark"></span>$100-$150
      </label>

      <label className='labelContainer'>
          <input type='radio' name='test2'/>
          <span className="checkmark"></span>Over $150
      </label>
    </div>
  )
}
