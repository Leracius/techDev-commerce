import React from 'react'
import { useFormik } from 'formik';
import { Container } from './FormStyles';
import { checkoutInitialValues } from '../../Formik/initialValues';
import { checkoutValidationSchema } from "../../Formik/validationSchema";
import { InputStyled } from '../Login/LoginStyles';
import { useSelector, useDispatch } from 'react-redux';
import { createOrder } from '../../axios/order';
import { useNavigate } from 'react-router-dom';
import { clearCart } from '../../redux/selected/DataSlice';

const FormCheck = () => {

  const {cartItems, shippingCost} = useSelector(state => state.newData)
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)
  const dispatch = useDispatch()
  const {currentUser} = useSelector((state) => state.user);
  const navigate = useNavigate()

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
        await createOrder(orderData, dispatch, currentUser);
        navigate("/home")
        dispatch(clearCart())
      } catch (error) {
        alert("Error al enviar la orden")
      }
      console.log(orderData);
      formik.resetForm();
    },
  });

  return (
    <Container>
        
        <form onSubmit={formik.handleSubmit}>
        <p>Inrega tus datos</p>
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

