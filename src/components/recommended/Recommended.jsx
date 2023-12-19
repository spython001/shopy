/* eslint-disable react/prop-types */
import './recommended.scss'

export default function Recommended({handleClick}) {
  return (
    <div className='recommended'>
        <h2 className='recommendedTitle'>Recommended</h2>

        <div className="recommendedBtns">
            <button className='btns' onClick={handleClick} value="">All Products</button>
            <button className="btns" onClick={handleClick} value="Nike">Nike</button>
            <button className="btns" onClick={handleClick} value="Adidas">Adidas</button>
            <button className="btns" onClick={handleClick} value="Puma">Puma</button>
            <button className="btns" onClick={handleClick} value="Vans">Vans</button>
        </div>
    </div>
  )
}
