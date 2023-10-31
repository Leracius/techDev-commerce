import React, { useState } from 'react'
import { useFormik } from 'formik';
import { Container } from './FormStyles';
import { checkoutInitialValues } from '../../Formik/initialValues';
import { checkoutValidationSchema } from "../../Formik/validationSchema";
import { InputStyled } from '../Login/LoginStyles';
import { useSelector, useDispatch } from 'react-redux';
import { createOrder } from '../../axios/order';
import { useNavigate } from 'react-router-dom';
import { clearCart } from '../../redux/selected/DataSlice';
import Josh from '../../components/Josh/Josh';
import { clearError } from '../../redux/orders/orderSlice';

const FormCheck = () => {

  const {cartItems, shippingCost} = useSelector(state => state.newData)
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)
  const dispatch = useDispatch()
  const {currentUser} = useSelector((state) => state.user)
  const navigate = useNavigate()

  const [active, setActive] = useState(false)
  const [msg, setMsg] = useState("")

  const setJosh= (joshSay) => {
    setActive(true);
    setMsg(joshSay)

    setTimeout(() => {
      setActive(false);
      navigate('/buy')
    }, 3000);
  };

  const formik = useFormik({
    initialValues: checkoutInitialValues,
    validationSchema: checkoutValidationSchema,
    onSubmit: async(values) => {
      const orderData = {
        price: totalPrice,
        shippingCost: shippingCost,
        total: totalPrice + shippingCost,
        shippingDetails:{
          ...values
        },
        items: cartItems
      }

      try {
        if (currentUser.verified && cartItems && cartItems.length > 0){
          await createOrder(orderData, dispatch, currentUser);
          dispatch(clearCart())
          setJosh("Órden enviada!")
        }
        else if(!currentUser.verified){
          return setJosh("No estas verificado")
        }if(cartItems.length <= 0){
          return setJosh("No se puede enviar una orden vacía")
        }
      } catch (error) {
        alert("Algo malio sal")
      }
      formik.resetForm();
    },
  });

  return (
    <Container>
        { active && <Josh message={msg} active={true} displayTime={3000}/>}
        <form onSubmit={formik.handleSubmit}>
        <p>Ingresa tus datos</p>
        <div>
          <InputStyled
            type="text"
            id="name"
            name="name"
            placeholder="Nombre"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
          />
          {formik.touched.name && formik.errors.name && (
            <h1>{formik.errors.name}</h1>
          )}
        </div>
        <div>
          <InputStyled
            type="cellphone"
            id="cellphone"
            name="cellphone"
            placeholder="Numero de celular"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.cellphone}
          />
          {formik.touched.cellphone && formik.errors.cellphone && (
            <h1>{formik.errors.cellphone}</h1>
          )}
        </div>
        <div>
          <InputStyled
            type="location"
            id="location"
            name="location"
            placeholder="Ciudad"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.location}
          />
          {formik.touched.location && formik.errors.location && (
            <h1>{formik.errors.location}</h1>
          )}
        </div>
        <div>
          <InputStyled
            type="address"
            id="address"
            name="address"
            placeholder="Direccion"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.address}
          />
          {formik.touched.address && formik.errors.address && (
            <h1>{formik.errors.address}</h1>
          )}
        </div>
        <button type="submit">Confirmar envío</button>
      </form>
    </Container>
  )
}

export default FormCheck

