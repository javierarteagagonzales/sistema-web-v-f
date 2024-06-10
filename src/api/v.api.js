import axios from 'axios'

const API_URL = process.env.https://sistema-web-v-f.vercel.app/;
export const getAllData = axios.create({
    baseURL: API_URL,
});

export default axiosInstance;