import './sidebar.scss'
import Category from './category/Category'
import Price from './price/Price'
import Colors from './colors/Colors'

export default function Sidebar() {
  return (
    <div className='sidebar'>
      <div className='logoContainer'>
          <h1>🛒</h1>
      </div>

      <Category />
      <Price/>
      <Colors/>
    </div>
  )
}
