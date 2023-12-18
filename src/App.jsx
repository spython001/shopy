/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react'
import './App.css'
import Recommended from './components/recommended/Recommended'
import Sidebar from './components/sidebar/Sidebar'
import Topbar from './components/topbar/Topbar'
import data from './data'
import Product from './pages/product/Product'

function App() {
  const [filtered, setFiltered] = useState([])

  useEffect(() => {
    const fetchProducts = async () => {
      const products = await data;
      setFiltered(data);
      console.log(products)
    }
    fetchProducts();
  }, [])
  


  return (
    <div className='app'>
     <Topbar />

      <div className="container">
        <div className='side'>
          <Sidebar/>
        </div>
        <div className="mainContent">
          <Recommended/>
          <Product/>
        </div>
      </div>
    </div>
  )
}

export default App
