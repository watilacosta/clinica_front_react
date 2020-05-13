import axios from 'axios'
import { getToken } from './auth'

const Api = axios.create({
  baseURL: "http://localhost:3001/api/v1"
})

// Este algoritmo intercepta as requisições 
// para a Api e envia o headers com o token
Api.interceptors.request.use(async config => {
  const token = getToken()
  
  if(token) {
    config.headers.Authorization = `Bearer ${token}`
    config.headers.post['Content-Type'] = 'application/json'
  }

  return config
})

export default Api