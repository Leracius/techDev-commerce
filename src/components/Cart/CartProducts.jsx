import React  from 'react'
import { useState } from 'react';
import { styled } from 'styled-components'
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../../redux/selected/DataSlice';

const CartProducts = () => {

  const dispatch = useDispatch()
  const {cartItems, shippingCost} = useSelector(state => state.newData)

  return (
    <CartContainer>
      {
          cartItems.map((el)=>{ 
            
            return(
          <CartProduct key={el.name}>
            <ElContainer>
              <div>
                <img src={el.img} alt="" />
              </div>
            </ElContainer>
            <ElContainer>
              <p>{el.name} </p>
              <h2>${el.price} x {el.quantity}</h2>
              <div>
                <button onClick={(e)=>{
                  e.preventDefault()
                  dispatch(removeFromCart(el.id))
                }}>-1</button>
                <button onClick={(e) =>(
                  e.preventDefault(),
                  dispatch(addToCart(el))
                )}id={el.name}>+1</button> 
             </div>
          </ElContainer>
          </CartProduct>
             )    
          })
        }
    </CartContainer>

  )
}

export const CartContainer = styled.div`
  width: 360px;
  height: 70%;
  align-items: center;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  @media (max-width: 768px) {
    width: 100%;
  }
  &::-webkit-scrollbar {
        background-color: black;;
        width: 10px;
    }
  &::-webkit-scrollbar-thumb {
        background-color: white;
    }
`

export const CartProduct = styled.div`
    margin: 4px;
    width: 90%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    background-color: #282d38;
    border-radius: 10px;
    padding: 10px;
    @media (max-width: 768px) {
      width: 90%;
  }

`
export const ElContainer = styled.div`
    height: 100%;
    display: flex;
    justify-content: space-between;
    gap: 10px;
    align-items: center;
    flex-direction: column;
    overflow: hidden;

    p{
      text-align: center;
      font-size: 18px;
      font-weight: 700;
      color:white;
    }
    h2{
      text-align: center;
      font-size: 18px;
      color: #00D14D;
      margin: 0;
    } 
    button{
      padding: 5px 20px 5px 20px;
      border: none;
      background-color:  white;
      color: black;
      font-size: 14px;
      border-radius: 10px;
      font-weight: bold;
      text-align: center;
      cursor: pointer;
      margin-left: 5px;
      &:hover{
        background-color: black;
        color: white;
      }
    }
    div{
      display: flex;
    }img{
      border-radius: 10px;
      width: 90px;
      height: 90x;
    }
`

export default CartProducts