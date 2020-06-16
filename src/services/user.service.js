import axios from 'axios'
import { resolveAPIResponse } from '../helpers/api'

export const getUserList = async () => {
  return axios.get('/user/list').then(resolveAPIResponse)
}

export const getUser = async ({ id }) => {
  return axios.get(`/user/${id}`).then(resolveAPIResponse)
}

export const postUser = async ({ username, email, phone, skillsets, hobby }) => {
  return axios.post('/user', { username, email, phone, skillsets, hobby }).then(resolveAPIResponse)
}

export const putUser = async ({ id, username, email, phone, skillsets, hobby }) => {
  return axios.put(`/user/${id}`, { username, email, phone, skillsets, hobby }).then(resolveAPIResponse)
}

export const deleteUser = async ({ id }) => {
  return axios.delete(`/user/${id}`).then(resolveAPIResponse)
}
