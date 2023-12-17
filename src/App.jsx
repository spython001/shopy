import './App.css'
import Recommended from './components/recommended/Recommended'
import Sidebar from './components/sidebar/Sidebar'
import Topbar from './components/topbar/Topbar'
import Product from './pages/product/Product'

function App() {

  return (
    <div className='app'>
     <Topbar />

      <div className="container">
        <div className='side'><Sidebar/></div>
        <div className="mainContent">
          <Recommended/>
          <Product/>
        </div>
      </div>
    </div>
  )
}

export default App
