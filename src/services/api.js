import axios from 'axios'

axios.defaults.baseURL = 'https://omnistack-course.herokuapp.com/'
// axios.defaults.baseURL = 'http://localhost:4000/'

axios.interceptors.request.use(
  (config) => config,
  (error) => Promise.reject(error)
)

axios.interceptors.request.use(
  (config) => {
    return { ...config, headers: { 'Content-Type': 'application/json' } }
  },

  (error) => {
    const { status } = error.response

    if (status === 401) {
    }
    return Promise.reject(error)
  }
)

export const getIncidentsByOngId = async (ongId) => {
  // Passando o Id como parâmentro OK!
  const data = await axios.get(`/profile/${ongId}`)

  return data
}

const api = axios

export default api
