import axios from "axios";

export const userRegisterApi = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_BASE_API,
    // withCredentials: true,
});

export default userRegisterApi;