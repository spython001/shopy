import './topbar.scss'

export default function Topbar() {
  return (
    <nav className='topbar'>   
        <div className="inputContainer">
            <input type="text" placeholder='Enter your search ...' className='searchInput'/>
        </div>

        <div className="profileContainer">
            <a href=""><i className="navIcon fa-regular fa-heart"></i></a>
            <a href=""><i className="navIcon fa-solid fa-cart-plus"></i></a>
            <a href=""><i className="navIcon fa-regular fa-user"></i></a>
        </div>
    </nav>
  )
}
