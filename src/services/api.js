import axios from 'axios'
import { getToken } from './auth'

const Api = axios.create({
  baseURL: "http://192.168.0.6:3001/api/v1"
})

Api.interceptors.request.use(async config => {
  const token = getToken()

  if(token) {
    config.headers.Authorization = `Bearer ${token}`
  }

  return config
})

export default Api