import axios from 'axios'
import { BASE_URL } from '../utils/costants.js'

export const createUser = async (name, surname, email, password) =>{
    try {
        const response = await axios.post(`${BASE_URL}/auth/register`,
        {
            name, surname, email, password
        });
        return response.data

    } catch (error) {
        console.log(error);
    }
}

export const loginUser = async (email, password)=>{
    try {
        const response = await axios.post(`${BASE_URL}/auth/login`,
        {
            email, password
        });
        return response.data

    } catch (error) {
        return error.response.data.msg
    }
}