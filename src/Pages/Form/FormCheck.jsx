import React from 'react'
import { useFormik } from 'formik';
import { Container } from './FormStyles';
import { checkoutInitialValues } from '../../Formik/initialValues';
import { checkoutValidationSchema } from "../../Formik/validationSchema";
import { InputStyled } from '../Login/LoginStyles';

const FormCheck = () => {

  const formik = useFormik({
    initialValues: checkoutInitialValues,
    validationSchema: checkoutValidationSchema,
    onSubmit: (values) => {
      console.log(values);
      formik.resetForm();
    },
  });

  return (
    <Container>
        
        <form onSubmit={formik.handleSubmit}>
        <h2>Inrega tus datos</h2>
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
            placeholder="TNumero de celular"
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
            placeholder="Contraseña"
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

