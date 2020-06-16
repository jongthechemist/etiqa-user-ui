import axios from 'axios'
import { resolveAPIResponse } from '../helpers/api'

export const postLogin = async ({ name, apiKey }) => {
  return axios.post('/login', { name, apiKey }).then(resolveAPIResponse)
}
