import axios from 'axios'
import { resolveAPIResponse } from '../helpers/api'

export const getTasks = async () => {
  return axios.get('/tasks').then(resolveAPIResponse)
}

export const postTask = async ({ name }) => {
  return axios.post('/tasks', { name }).then(resolveAPIResponse)
}

export const putTask = async ({ id, name, completed }) => {
  return axios.put(`/tasks/${id}`, { name, completed }).then(resolveAPIResponse)
}

export const deleteTask = async ({ id }) => {
  return axios.delete(`/tasks/${id}`).then(resolveAPIResponse)
}
