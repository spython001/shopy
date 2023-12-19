/* eslint-disable react/prop-types */
import Input from '../../Input'
import './colors.scss'

export default function Colors({handleChange}) {
  return (
    <div className='colors'>
      <h2 className='colorTitle'>Colors</h2>
      <label className='labelContainer'>
          <input type="radio" className='labelInput' onChange={handleChange} value="" name="test3"/>
          <span className="checkmark all"></span>All
      </label>
      
      <Input handleChange={handleChange} value="black" title="Black" name="test3" color='black'/>
      <Input handleChange={handleChange} value="blue" title="Blue" name="test3" color='blue'/>
      <Input handleChange={handleChange} value="red" title="Red" name="test3" color='red'/>
      <Input handleChange={handleChange} value="green" title="Green" name="test3" color='green'/>
      
      <label className="labelContainer">
        <input type="radio" className="labelInput" onChange={handleChange} value="white" name='test3'/>
        <span className="checkmark" style={{backgroundColor: "white", border: '2px solid black'}}></span>White
      </label>
    </div>
  )
}
