import axios from 'axios'
import { resolveAPIResponse } from '../helpers/api'

export const getDashboard = async () => {
  return axios.get('/dashboard').then(resolveAPIResponse)
}
