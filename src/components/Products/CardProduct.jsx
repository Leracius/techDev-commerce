import React from 'react';
import { ButtonContainer, CardContainer, PStyled } from './CardStyles';
import { BsFillCartFill } from 'react-icons/bs';
import { formatPrice } from '../../utils/FormatPrice';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../redux/selected/DataSlice';
import { NavLinkStyled } from '../Cart/CartStyles';


const CardProduct = ({ category, img, name, price, id }) => {

  const dispatch = useDispatch(); 
  
  const handleAdd = (e) =>{
    e.preventDefault()
    dispatch(addToCart({ category, img, name, price, id }))
  }

  return (
    <CardContainer>
      <img width={'230px'} src={img} alt="" />
      <PStyled>{formatPrice(price)}</PStyled>
      <p>{name}</p>
      <ButtonContainer>
        
        <button id={name}><NavLinkStyled to={name} >ver mas</NavLinkStyled></button>
        <button onClick={(e)=>handleAdd(e)} id={name}>Comprar</button>
      </ButtonContainer>
    </CardContainer>
  );
}



export default CardProduct;
