import React  from 'react'
import { useState } from 'react';
import { styled } from 'styled-components'
import { useDispatch, useSelector } from 'react-redux';
import { CartContainer, ElContainer, CartProduct } from './CheckoutStyles';

const SimplyCard = () => {

  const {cartItems } = useSelector(state => state.newData)

  return (
    <CartContainer>
      {
          cartItems.map((el)=>{ 
            
            return(
          <CartProduct key={el.name}>
            <ElContainer>
              <div>
                <img width='100px' height='100px' src={el.img} alt="" />
              </div>
            </ElContainer>
            <ElContainer>
              <p>{el.name} </p>
              <h2>${el.price} x {el.quantity}</h2>
          </ElContainer>
          </CartProduct>
             )    
          })
        }
    </CartContainer>

  )
}


export default SimplyCard