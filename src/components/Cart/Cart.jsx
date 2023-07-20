import { CartBody, CartTitle, Cartcontainer, CartButtons, QuantityElement, DeleteAll, NavLinkStyled } from './CartStyles'
import {AiOutlineArrowRight, AiFillDelete, AiOutlineArrowUp} from 'react-icons/ai'
import { HiShoppingBag } from 'react-icons/hi'
import React, { useState } from 'react'
import CartProducts from './CartProducts';
import { useDispatch, useSelector } from 'react-redux';
import { formatPrice } from '../../utils/FormatPrice';
import { clearCart, toggleHiddenCart } from '../../redux/selected/DataSlice';
import { useNavigate } from "react-router-dom"
import { styles } from '../../colors/styleArray';


const Cart = () => {

  const currentStyleIndex = useSelector((state) => state.style);
  const hiddenCart = useSelector(state => state.newData.hidden)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const {cartItems, shippingCost} = useSelector(state => state.newData)
  const currentStyle = styles[currentStyleIndex];

  const totalCart = cartItems.reduce((total, item) => total += item.quantity, 0)
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)

  



  return (
      <Cartcontainer style={currentStyle}>
        <div onClick={()=>dispatch(toggleHiddenCart())}>
        <QuantityElement>{totalCart}</QuantityElement>
        <HiShoppingBag  color="white" size={40}/>
        </div>
          <CartBody style={{ transform: hiddenCart ? "translateY(0%) ": "translateY(-200%)"}}>
            <CartTitle>
                <AiOutlineArrowUp onClick={()=>dispatch(toggleHiddenCart())}/>
                <h1>Carrito de compras</h1>
            </CartTitle>
            {cartItems.length?<DeleteAll onClick={()=> dispatch(clearCart())}><AiFillDelete color="white" size={20}/></DeleteAll> : ''}
            {
              cartItems.length? (
                <>
                <CartProducts/>
                  <CartButtons>
                    <button onClick={()=>navigate("/checkout")} >Iniciar compra</button>
                    <div>
                      <h1>subtotal: {formatPrice(totalPrice)}</h1>
                      <h1>envío: {formatPrice(shippingCost)}</h1>
                      <h1>----------------------</h1>
                      <h1>Total:{formatPrice(totalPrice + shippingCost)}</h1>
                    </div>
                  </CartButtons>
                </>
              ) : (
                <h1>No hay productos en el carrito</h1>
              )
            }

          </CartBody>
      </Cartcontainer>
)
}

export default Cart
