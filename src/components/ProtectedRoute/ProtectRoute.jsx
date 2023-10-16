import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

export const ProtectRoute = ({children, redirectTo}) =>{
    const {currentUser} = useSelector((state) => state.user);
    return currentUser ? (children)
    : (<Navigate to={redirectTo}/>)
}

export const DisprotectRoute = ({children, redirectTo}) =>{
    const {currentUser} = useSelector((state) => state.user);
    return currentUser ? (<Navigate to={redirectTo}/>)
    : (children)
}


