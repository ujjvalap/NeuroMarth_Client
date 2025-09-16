// import axios from "axios";

// const API = axios.create({
//   baseURL: import.meta.env.VITE_API_URL, // ✅ env se base URL
//   withCredentials: true, // cookies/session ke liye
// });

// export default API;


import axios from "axios";

const Api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    withCredentials: true, // agar server cookies use karta hai
});

// Request interceptor
Api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("token"); // ya user?.token
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

export default Api;
