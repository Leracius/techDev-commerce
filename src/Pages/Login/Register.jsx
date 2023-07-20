import React from 'react';
import { useFormik } from 'formik';
import { LoginContainer, InputStyled } from './LoginStyles';
import { registerValidationSchema } from '../../Formik/validationSchema';
import { useNavigate } from 'react-router-dom';
import { registerInitialValues } from '../../Formik/initialValues';
import { setCurrentUser } from '../../redux/user/userSlice';
import { useDispatch, useSelector } from 'react-redux';


const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const isAuth = useSelector((state) => state.user.isAuth);

  const formik = useFormik({
    initialValues: registerInitialValues,
    validationSchema: registerValidationSchema,
    onSubmit: (values) => {
      dispatch(setCurrentUser(values))
      navigate('/')
      formik.resetForm();
    },
  });

  return (
    <LoginContainer>
      <h1>Crea tu cuenta</h1>
      <form onSubmit={formik.handleSubmit}>
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
            type="text"
            id="email"
            name="email"
            placeholder="Correo electrónico"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email && (
            <h1>{formik.errors.email}</h1>
          )}
        </div>
        <div>
          <InputStyled
            type="password"
            id="password"
            name="password"
            placeholder="Contraseña"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          {formik.touched.password && formik.errors.password && (
            <h1>{formik.errors.password}</h1>
          )}
        </div>
        <div>
          <button onClick={() => navigate('/login')}>atrás</button>
          <button type="submit">Enviar</button>
        </div>
      </form>
    </LoginContainer>
  );
};

export default Register;
