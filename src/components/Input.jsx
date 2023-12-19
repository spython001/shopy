/* eslint-disable react/prop-types */

export default function Input({handleChange, value, title, name, color}) {
  return (
    <label className='labelContainer'>
          <input onChange={handleChange} className='labelInput' type='radio' name={name} value={value}/>
          <span className="checkmark" style={{backgroundColor: color}}></span>{title}
    </label>
  )
}
