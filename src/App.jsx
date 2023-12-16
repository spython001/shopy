import './App.css'
import Sidebar from './components/topbar/sidebar/Sidebar'
import Topbar from './components/topbar/Topbar'
import Product from './pages/product/Product'

function App() {

  return (
    <div className='app'>
      <Topbar />

      <div className="container">
        <Sidebar />
        <Product />
      </div>
    </div>
  )
}

export default App
