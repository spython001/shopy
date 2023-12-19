/* eslint-disable react/prop-types */
import Input from '../../Input'
import './category.scss'

export default function Category({handleChange}) {
  return (
    <div className='category'>
      <h2>Category</h2>

      <div className='labels'>
        <label className='labelContainer'>
          <input type="radio" className='labelInput' onChange={handleChange} value="" name="test"/>
          <span className="checkmark"></span>All
        </label>

        <Input handleChange={handleChange} value='sneakers' title='Sneakers' name='test'/>
        <Input handleChange={handleChange} value='flats' title='Flats' name='test'/>
        <Input handleChange={handleChange} value='sandals' title='Sandals' name='test'/>
        <Input handleChange={handleChange} value='heels' title='Heels' name='test'/>
      </div>
    </div>
  )
}
