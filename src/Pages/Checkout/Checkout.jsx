import React from 'react'
import { CartTitle, CartButtons } from '../../components/Cart/CartStyles'
import { useSelector } from 'react-redux';
import { formatPrice } from '../../utils/FormatPrice';
import { CheckoutContainer, SidesContainer,  StyledCheck } from './CheckoutStyles';
import FormCheck from '../Form/FormCheck';
import SimplyCard from './SimplyCard'

const Checkout = () => {
    const {cartItems, shippingCost} = useSelector(state => state.newData)
    const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)


  return (
    <CheckoutContainer>
        < StyledCheck>
            <CartTitle>
                <h1>Tu pedido</h1>
            </CartTitle>
            {
                cartItems.length? (
                <>
                <SimplyCard/>
                <CartButtons>
                    <div>
                    <h2>subtotal: {formatPrice(totalPrice)}</h2>
                    <h2>envío: {formatPrice(shippingCost)}</h2>
                    <h2>----------------------</h2>
                    <h2>Total:{formatPrice(totalPrice + shippingCost)}</h2>
                    </div>
                </CartButtons>
            </>
        ) : (
        <h1>No hay productos en el carrito</h1>
      )
    }
        </ StyledCheck>
        <SidesContainer>
          <FormCheck/>
        </SidesContainer>
    </CheckoutContainer>
  )
}

export default Checkout