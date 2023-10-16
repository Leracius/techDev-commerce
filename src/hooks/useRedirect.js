import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

const useRedirect = (redirectTo) =>{
    const {currentUser} = useSelector(state => state.user)
    const navigate = useNavigate()

    useEffect(()=>{
        if(currentUser){
            navigate(redirectTo)
        }
    },[currentUser, redirectTo])
}

export default useRedirect