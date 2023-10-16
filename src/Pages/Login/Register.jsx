import React from 'react';
import { useFormik } from 'formik';
import { LoginContainer, InputStyled } from './LoginStyles';
import { registerValidationSchema } from '../../Formik/validationSchema';
import { useNavigate } from 'react-router-dom';
import { registerInitialValues } from '../../Formik/initialValues';
import { setCurrentUser } from '../../redux/user/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { createUser } from '../../axios/user';


const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userCurrent = useSelector((state) => state.user.currentUser);

  const formik = useFormik({
    initialValues: registerInitialValues,
    validationSchema: registerValidationSchema,
    onSubmit: async (values, actions) => {
      const {name, surname, email, password} = values
      const user = await createUser(name, surname, email, password)
      if(user){
        navigate('/login')
        actions.resetForm()
        return
      }
      alert("El email ya esta registrado")
      
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
            id="surname"
            name="surname"
            placeholder="Apellido"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.surname}
          />
          {formik.touched.surname && formik.errors.surname && (
            <h1>{formik.errors.surname}</h1>
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
