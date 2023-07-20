import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { products } from '../../data/data'
import { ButtonContainer, ContainerStyled, FloatBtn } from './ProductStyle'
import { addToCart } from '../../redux/selected/DataSlice'
import { BsFillArrowLeftCircleFill } from 'react-icons/bs'

const Product = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const data = useParams()
    const selectedProduct = products.filter((el)=> {
        return el.name === data.product
    })

    const { name, id, img, price } = selectedProduct[0]
    const handleAdd = () =>{
        dispatch(addToCart(selectedProduct[0]))
        navigate('/checkout')
      }
    

    console.log();
  return (
    <ContainerStyled>
        <FloatBtn onClick={()=>navigate(-1)}><BsFillArrowLeftCircleFill size={30} color='white'/></FloatBtn>
        <div>
            <img src={img} alt="" />
        </div>
        <div>
            <h1>{name}</h1>
            <p>$ {price}</p>
            <ButtonContainer>
                <button onClick={()=>dispatch(addToCart(selectedProduct[0]))}>agregar al carrito</button>
                <button onClick={()=>handleAdd()}>comprar</button>
            </ButtonContainer>
        </div>
    </ContainerStyled>
  )
}

export default Product