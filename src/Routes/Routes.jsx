import React from 'react'
import { BrowserRouter, Route, Routes as ReactDomRoutes, } from "react-router-dom";
import Layout from '../components/Layout/Layout';
import Home from '../Pages/Home';
import Checkout from '../Pages/Checkout/Checkout';
import Login from '../Pages/Login/Login';
import Register from '../Pages/Login/Register';
import Hero from '../Pages/Hero/Hero';
import Finder from '../Pages/Finder/Finder';
import ProtectedRoute from '../components/ProtectedRoute/ProtectedRoute';
import { useSelector, useDispatch } from 'react-redux';
import { clearCurrentUser } from '../redux/user/userSlice';
import Product from '../Pages/Product/Product';


const Routes = () => {
  const dispatch = useDispatch()
  return (
    <BrowserRouter>
        <Layout>
            <ReactDomRoutes>
                <Route path='/'element={<Hero/>} />
                <Route path='/home'element={<Finder/>} />           
                <Route path='/buy'>
                  <Route index element={<Home/>} />
                  <Route path=':product' element={<Product/>} />
                </Route>
                <Route path='/login' element={<Login/>} />
                <Route path='/checkout' element={<Checkout/>} />
                <Route path='/register' element={<Register/>} />
            </ReactDomRoutes>

        </Layout>

    </BrowserRouter>
  )


}

export default Routes