import React from 'react'
import { BrowserRouter, Route, Routes as ReactDomRoutes, } from "react-router-dom";
import Layout from '../components/Layout/Layout';
import Home from '../Pages/Home';
import Checkout from '../Pages/Checkout/Checkout';
import Login from '../Pages/Login/Login';
import Register from '../Pages/Login/Register';
import Hero from '../Pages/Hero/Hero';
import Finder from '../Pages/Finder/Finder';
import { useSelector, useDispatch } from 'react-redux';
import Product from '../Pages/Product/Product';
import {ProtectRoute , DisprotectRoute} from '../components/ProtectedRoute/ProtectRoute';
import UserMenu from '../components/UserMenu/UserMenu';
import Orders from '../components/Orders/Orders';


const Routes = () => {

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
                <Route 
                  path='/login' 
                  element={
                    <Login/>
                    // <DisprotectRoute redirectTo='/home'>
                    //   <Login/>
                    // </DisprotectRoute>
                  }/>
                <Route 
                  path='/checkout' 
                  element={
                    <ProtectRoute redirectTo='/register'>
                      <Checkout/>
                    </ProtectRoute>
                  }/>
                <Route path='/register' element={<Register/>} />
                <Route path='/user'>
                  <Route index element={<UserMenu/>} />
                  <Route path=':user' element={<h1>holis</h1>} />
                  {/* <Route path=':user/orders' element={<Orders/>}/> */}
                </Route>
                <Route path='/orders' element={
                  <ProtectRoute redirectTo='/register'>
                      <Orders/>
                  </ProtectRoute>
                }/>
  
            </ReactDomRoutes>

        </Layout>

    </BrowserRouter>
  )


}

export default Routes