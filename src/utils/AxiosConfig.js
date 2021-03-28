import axios from "axios";
export const axiosInstance = axios.create({
    baseURL: 'http://localhost:9093',
    timeout: 5000,
    headers: {'X-Custom-Header': 'foobar'}
});