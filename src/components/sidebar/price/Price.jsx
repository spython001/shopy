/* eslint-disable react/prop-types */
import Input from '../../Input'
import './price.scss'

export default function Price({handleChange}) {
  return (
    <div className='price'>
      <h2 className='priceTitle'>Price</h2>
      <label className='labelContainer'>
          <input type="radio" className='labelInput' onChange={handleChange} value="" name="test2"/>
          <span className="checkmark"></span>All
      </label>
      
      <Input handleChange={handleChange} value={50} title="$0-50" name="test2"/>
      <Input handleChange={handleChange} value={100} title="$5-100" name="test2"/>
      <Input handleChange={handleChange} value={150} title="$100-150" name="test2"/>
      <Input handleChange={handleChange} value={200} title="Over $150" name="test2"/>

    </div>
  )
}
