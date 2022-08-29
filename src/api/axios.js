import axios from "axios";
import useAuth from "../hooks/useAuth";
const BASE_URL = 'http://localhost:5000/api';

// const useToken = () => {
//     const { auth } = useAuth();
//     return auth.token;
// }
export default axios.create({
    baseURL: BASE_URL,
    withCredentials: true,
});

// export const axiosWithToken = axios.create({
//     baseURL: BASE_URL,
//     withCredentials: true,
//     headers: ({
//         Authorization: `Bearer ${() =>useToken()}`,
//     })
// })