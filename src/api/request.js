import { axiosInstance } from "./config"

export const getRecommendRequest = () => axiosInstance.get('/recommend')
export const getClassifyHotRequest = () => axiosInstance.get('/classifyhot')