import React from 'react'
import CardProducts from "../components/Products/CardProducts"
import Categories from '../components/Categories/Categories'
import Josh from '../components/Josh/Josh'

const Home = () => {
  return (
      <div style={{width: "100vw", minHeight: "80vh"}}>
        <Josh message="Fiuu! mira que bonitos productos" active={true} displayTime={3000} /> 
        <Categories></Categories>
        <CardProducts></CardProducts>
      </div>

  )
}

export default Home