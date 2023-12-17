import './category.scss'

export default function Category() {
  return (
    <div className='category'>
      <h2>Category</h2>

      <div className='labels'>
        <label className='labelContainer'>
          <input className='labelInput' type='radio' name='test'/>
          <span className="checkmark"></span>All
        </label>

        <label className='labelContainer'>
          <input className='labelInput' type='radio' name='test'/>
          <span className="checkmark"></span>Sneakers
        </label>

        <label className='labelContainer'>
          <input className='labelInput' type='radio' name='test'/>
          <span className="checkmark"></span>Flats
        </label>

        <label className='labelContainer'>
          <input className='labelInput' type='radio' name='test'/>
          <span className="checkmark"></span>Sandals
        </label>

        <label className='labelContainer'>
          <input className='labelInput' type='radio' name='test'/>
          <span className="checkmark"></span>Heels
        </label>
      </div>
    </div>
  )
}
