import axios from 'axios'

export const getAllData = () => {
    return axios.get('https://sistema-web-v.onrender.com/')
}