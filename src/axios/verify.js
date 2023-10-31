import { setVerfiy } from '../redux/user/userSlice';
import { BASE_URL } from '../utils/costants'
import axios from 'axios'

export const postVerify = async (email, code, dispatch) => {
    try {
        const response = await axios.patch(`${BASE_URL}/auth/verify`, {
            email, code});
        console.log({email, code});
        dispatch(setVerfiy())
        return response.data;
    } catch (error) {
        console.error('Error en la solicitud:', error);
        throw new Error('Error en la solicitud de verificación');
    }
};