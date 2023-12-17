import './colors.scss'

export default function Colors() {
  return (
    <div className='colors'>
      <h2 className='colorTitle'>Colors</h2>

      <label className='labelContainer color-title'>
          <input type='radio' name='test3'/>
          <span className="checkmark"></span>All
      </label>

      <label className='labelContainer'>
          <input type='radio' name='test3'/>
          <span className="checkmark"></span>Black
      </label>

      <label className='labelContainer'>
          <input type='radio' name='test3'/>
          <span className="checkmark"></span>Blue
      </label>

      <label className='labelContainer'>
          <input type='radio' name='test3'/>
          <span className="checkmark"></span>Red
      </label>

      <label className='labelContainer'>
          <input type='radio' name='test3'/>
          <span className="checkmark"></span>Green
      </label>

      <label className='labelContainer'>
          <input type='radio' name='test3'/>
          <span className="checkmark"></span>White
      </label>
    </div>
  )
}
