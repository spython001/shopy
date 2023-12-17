import './recommended.scss'

export default function Recommended() {
  return (
    <div className='recommended'>
        <h2 className='recommendedTitle'>Recommended</h2>

        <div className="recommendedBtns">
            <button className='btns'>All Products</button>
            <button className="btns">Nike</button>
            <button className="btns">Adidas</button>
            <button className="btns">Puma</button>
            <button className="btns">Vans</button>
        </div>
    </div>
  )
}
