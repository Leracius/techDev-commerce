import React from 'react'
import { useDispatch, useSelector } from "react-redux";

export const CategorieMap = () => {

const categories = useSelector(state => state.categories.categories)


  return (
    <div>
        {
        categories.map((el)=>{
          return <p
          key={el} 
          onClick={() => dispatch(selectCategory(el))} 
          >{el}</p>
        })
      }
    </div>

  )
}
