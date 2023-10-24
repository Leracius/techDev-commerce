import React, { useState } from 'react'
import { FormContainer, ButtonStyled, InputStyled, StyledMotionDiv, InputContainer } from './FinderStyles'
import { HiOutlineSearch } from 'react-icons/hi';
import { useNavigate } from "react-router-dom"
import { selectCategory } from '../../redux/categories/categoriesSlice'
import { useDispatch, useSelector } from 'react-redux';
import { AnimatePresence } from 'framer-motion';
import Josh from '../../components/Josh/Josh';


const Finder = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [value, setValue] = useState("");

    const categoryList = useSelector((state)=>state.categories.categories)

    const handleSubmit = (e) =>{
        e.preventDefault()

        const newCategory = value.trim().toLowerCase().split().join("")
    
        const selectedCategory = categoryList.find((el)=>{
          return el.toLowerCase().trim() === newCategory
        })
    
        if(selectedCategory){
          dispatch(selectCategory(selectedCategory))
          navigate("/buy")
        }else{
          alert("categoria no encontrada")
        }
    
        setValue("")
    
      }

  return (
    <FormContainer>
      <Josh message="Aqui puedes buscar por categorias" active={true} displayTime={5000} />
        <AnimatePresence>
            <StyledMotionDiv
                animate={{ y: [-10, 10, -10], transition: { duration: 5, repeat: Infinity, repeatType: 'reverse' } }}>
                <img src="https://res.cloudinary.com/dbo7lbynt/image/upload/v1689649018/assets-integrador/integrador-assets/fondo-hero_i1eqxb.png" alt="" />
            </StyledMotionDiv>
        </AnimatePresence>
        <InputContainer>
          <InputStyled
          value={value} 
          onChange={(e)=>setValue(e.target.value)}
          type='text' placeholder='Busca por categoria'/>
          <ButtonStyled type='submit' onClick={handleSubmit}>
          <HiOutlineSearch  color="white" size={40}/>
          </ButtonStyled>
        </InputContainer>
  
    </FormContainer>
  )
}

export default Finder