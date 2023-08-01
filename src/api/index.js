import axios from "axios"

const defaultConfig = {
    baseURL: "http://localhost:5000/api",
    headers: {
        "Content-Type": "application/json",
    },
}

export const DefaultAPIInstance = axios.create(defaultConfig)

const authConfig = {
    baseURL: "http://localhost:5000/api",
    headers: {
        "Content-Type": "application/json",
    },
}
export const AuthConfigAPIInstance = axios.create(authConfig)

//!interceptors

DefaultAPIInstance.interceptors.request.use(
    config => {
        const token = localStorage.getItem("token");
        if (token)
            config.headers.Authorization = `Bearer ${token}`;

        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

DefaultAPIInstance.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        if (error.response && error.response.status === 403) {
            localStorage.clear()
            window.location.href = '/auth'
        }
        return Promise.reject(error); //это ради catch и try 
    }
);