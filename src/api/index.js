
import axios from "axios";


export const axiosInstance = axios.create({
    baseURL: `${import.meta.env.VITE_BASEURL}/hackathon`,
    headers: {
      'Content-Type': 'application/json',
    //   'Access-Control-Allow-Origin': '*', // Allow requests from all origins
    },
});


export const getCategories = async () => {
    try {
        const res = await axiosInstance.get(`/categories-list`)

        return res
    } catch (error) {
        return error
    }
}

export const register = async (data) => {
    try {
        const res = await axiosInstance.post(`/registration`, data)
        return res
    } catch (error) {
        return error
    }
}

export const contact = async (data) => {
    try {
        const res = await axiosInstance.post(`/contact-form`, data)
        return res
    } catch (error) {
        return error
    }
}
