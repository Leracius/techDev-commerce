import React, { useState } from "react";
import { CategorieContainer, Container, StyledMotionDiv } from './CategoriesStyles';
import { FaFilter } from 'react-icons/fa';
import { useDispatch, useSelector } from "react-redux";
import { selectCategory } from '../../redux/categories/categoriesSlice';


const Categories = () => {
  const [Active, setActive] = useState(false);
  const selectedCategory = useSelector(state=> state.categories.selectedCategory)
  const categories = useSelector(state => state.categories.categories)
  const dispatch = useDispatch()
  
  return (
    <>
      <CategorieContainer>
      <Container>
        <p onClick={()=>setActive(!Active)}>Categorias: {selectedCategory}<FaFilter size={14} /></p>
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
                  key={el} 
                  onClick={()=>dispatch(selectCategory(el))} 
                  id={el} 
                  >{el}</p>
                })
              }
             
            </StyledMotionDiv>
          )}
          </>
  );
};
    


export default Categories;
