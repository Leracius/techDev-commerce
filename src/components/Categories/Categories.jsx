import React, { useState } from "react";
import { CategorieContainer, Container, StyledMotionDiv } from './CategoriesStyles';
import { FaFilter } from 'react-icons/fa';
import { useDispatch, useSelector } from "react-redux";
import { getCategories, selectCategory } from '../../redux/categories/categoriesSlice';


const Categories = () => {
  const [Active, setActive] = useState(false);
  const categories = useSelector(state => state.categories.categories)
  const dispatch = useDispatch()
  dispatch(getCategories)

  const handleClick = () =>{
    setActive(!Active)
    dispatch(getCategories())
  }
  
  return (
    <>
      <CategorieContainer onClick={()=>handleClick()}>
      <Container>
        <p >Categorias<FaFilter size={14} /></p>
      </Container>
      </CategorieContainer>
          {Active && (
            <StyledMotionDiv
              initial={{ translateY: "-200px" }}
              animate={{ translateY: "0px" }}
              exit={{ translateY: "-200px"}}

            >
              {
                categories.map((el)=>{
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
