import axios from 'axios'

export const setBaseURL = (baseURL) => {
  axios.defaults.baseURL = baseURL
}
export const setToken = (token) => {
  axios.defaults.headers['Authorization'] = token
}
