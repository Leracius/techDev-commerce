import React, { useEffect, useState } from "react";
import { CategorieContainer, Container, StyledMotionDiv } from './CategoriesStyles';
import { FaFilter } from 'react-icons/fa';
import { useDispatch, useSelector } from "react-redux";
import { getCategories, selectCategory, setCategories } from '../../redux/categories/categoriesSlice';


const Categories = () => {
  const [Active, setActive] = useState(false);
  const {products} = useSelector(state=> state.products)
  const categorias = products.categorias
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(setCategories(categorias))
  },[products])

  const handleClick = () =>{
    setActive(!Active)
  }
  
  return (
    <>
      <CategorieContainer onClick={()=>handleClick()}>
      <Container>
        <p >Categorias<FaFilter size={14} /></p>
      </Container>
      </CategorieContainer>
          {Active && categorias && (
            <StyledMotionDiv
              initial={{ translateY: "-200px" }}
              animate={{ translateY: "0px" }}
              exit={{ translateY: "-200px"}}

            >
              {
                categorias.map((el)=>{
                  return <p
                  onClick={() => dispatch(selectCategory(el))} 
                  key={el} 
                  >{el}</p>
                })
              }
             
            </StyledMotionDiv>
          )}
          </>
  );
};
    


export default Categories;
