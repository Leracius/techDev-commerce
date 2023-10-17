import React from 'react'
import CardProducts from "../components/Products/CardProducts"
import Categories from '../components/Categories/Categories'

const Home = () => {
  return (
      <div style={{width: "100vw", minHeight: "80vh"}}>
        <Categories></Categories>
        <CardProducts></CardProducts>
      </div>

  )
}

export default Home