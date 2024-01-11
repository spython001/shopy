/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react'
import './App.css'
import Card from './components/Card'
import Recommended from './components/recommended/Recommended'
import Sidebar from './components/sidebar/Sidebar'
import Topbar from './components/topbar/Topbar'
import data from './data'
import Product from './pages/product/Product'

function App() {

  const [product, setProduct] = useState([]);
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const products = await data;
      console.log(products);
      setProduct(products);
      setFiltered(products);
    }
    fetchData();
  }, [])
  

  //for cateogory
  const [selectedCategory, setSelectedCategory] = useState(null);

  //for inputs filter 
  const [query, setQuery] = useState("");
  
  const filteredItems = data.filter((data) =>
    data.title.toLocaleLowerCase().indexOf(query.toLowerCase()) !== -1
  );

  //for radio buttons filter
  const handleChange = (e) => {
    setSelectedCategory(e.target.value)
  }

  //for buttons filter
  const handleClick = (e) => {
    setSelectedCategory(e.target.value)
  }
  

  //MAIN FUNCTION FOR FILTERED DATA
  function filteredData(products, selected, query){
    let filteredProducts = products

    //filtering items
    if(query){
      filteredProducts = filteredItems
    }

    //Selected filter
    if(selected){
      filteredProducts = filteredProducts.filter(({ category, color, company, 
        newPrice, title})=> category === selected || color ===selected ||
        company === selected || newPrice === selected || title === selected);
    }

    return filteredProducts.map(({img, title, star, reviews, newPrice,  prevPrice}) => (
      <Card 
        key={Math.random()}
        img={img}
        title={title}
        star={star}
        reviews={reviews}
        newPrice={newPrice}
        prevPrice={prevPrice}
      />
    ))
  }

  const result = filteredData(data, selectedCategory, query)

  return (
    <div className='app'>
     <Topbar query={query} setQuery={setQuery}/>

      <div className="container">
        <div className='side'>
          <Sidebar handleChange={handleChange} />
        </div>
        <div className="mainContent">
          <Recommended handleClick={handleClick}/>
          <Product result={result}/>

          
        </div>
      </div>
      
    </div>
  )
}

export default App
