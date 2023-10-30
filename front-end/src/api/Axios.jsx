import axios from 'axios'
import { baseURL } from './Api'
import Cookie from 'cookie-universal'

const Cookies = Cookie()
const token = Cookies.get('Ecommerce')

export const Axios = axios.create({
    baseURL: baseURL ,
    headers: {
        Authorization: `Bearer ${token}`,
    }
}) 

