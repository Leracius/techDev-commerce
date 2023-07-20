import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import { LoginContainer, InputStyled } from './LoginStyles';
import { loginValidationSchema } from '../../Formik/validationSchema';
import { useNavigate } from 'react-router-dom';
import { loginInitialValues } from '../../Formik/initialValues';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentUser } from '../../redux/user/userSlice';


const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.user.isAuth);

  useEffect(()=>{
    if(isAuth){
      navigate("/home")
    }
  },[])

  const formik = useFormik({
    initialValues: loginInitialValues,
    validationSchema: loginValidationSchema,
    onSubmit: (values) => {
      dispatch(setCurrentUser(values))
      formik.resetForm();
    },
  });

  return (
    <LoginContainer>

      <h1>Ingresá a tu cuenta</h1>
      <form onSubmit={formik.handleSubmit}>
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
          <button type="button" onClick={() => navigate('/register')}>
            Crea una
          </button>
          <button  type="submit">Enviar</button>
        </div>
      </form>
    </LoginContainer>
  );
};

export default Login;
