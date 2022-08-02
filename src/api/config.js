// 配置请求对象
import axios from 'axios'
export const baseUrl = 'https://www.fastmock.site/mock/703b1dba3fa5e4c0d678a0aeb270c2fc/huya'

const axiosInstance = axios.create({
    baseURL: baseUrl    
})


axiosInstance.interceptors.response.use(
    res => res.data,
    err => {
        console.log(err, '网络错误')
    }
)

export { axiosInstance }