import axios from 'axios'
import { getItem } from 'src/helpers/localStorageControl'
import { createStandaloneToast } from '@chakra-ui/react'

const toast = createStandaloneToast()

const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT
// const dispatch = useDispatch()

const authHeader = () => ({
  Authorization: `${getItem('access_token')}`
})

const client = axios.create({
  baseURL: API_ENDPOINT,
  headers: {
    Authorization: `${getItem('access_token')}`,
    'Content-Type': 'application/json'
  }
})

class DataService {
  static get(path = '') {
    return client({
      method: 'GET',
      url: path,
      headers: { ...authHeader() }
    })
  }

  static post(path = '', data = {}, optionalHeader = {}) {
    return client({
      method: 'POST',
      url: path,
      data,
      headers: { ...authHeader(), ...optionalHeader }
    })
  }

  static postDownloadFile(path = '', data = {}, optionalHeader = {}, responseType = 'blob') {
    return client({
      method: 'POST',
      url: path,
      data,
      headers: { ...authHeader(), ...optionalHeader },
      responseType
    })
  }

  static patch(path = '', data = {}) {
    return client({
      method: 'PATCH',
      url: path,
      data: JSON.stringify(data),
      headers: { ...authHeader() }
    })
  }

  static put(path = '', data = {}) {
    return client({
      method: 'PUT',
      url: path,
      data: JSON.stringify(data),
      headers: { ...authHeader() }
    })
  }

  static delete(path = '') {
    return client({
      method: 'DELETE',
      url: path,
      headers: { ...authHeader() }
    })
  }
}

/**
 * axios interceptors runs before and after a request, letting the developer modify req,req more
 * For more details on axios interceptor see https://github.com/axios/axios#interceptors
 */
client.interceptors.request.use(config => {
  // do something before executing the request
  // For example tag along the bearer access token to request header or set a cookie
  const requestConfig = config
  const { headers } = config
  requestConfig.headers = {
    ...headers,
    Authorization: `${getItem('access_token')}`
  }

  return requestConfig
})

client.interceptors.response.use(
  response => {
    return response.data
  },
  error => {
    /**
     * Do something in case the response returns an error code [3**, 4**, 5**] etc
     * For example, on token expiration retrieve a new access token, retry a failed request etc
     */
    const { response } = error
    const originalRequest = error.config
    if (response) {
      if (response.status === 500) {
        // do something here
      }
      if (response.status === 400) {
        toast({
          title: response.data.error,
          status: 'error',
          duration: 5000,
          position: 'bottom-right',
          isClosable: true
        })
        Promise.reject(response.data)
        return response.data
      }
      if (response.status === 401 || response.data.message === '401 Unauthorized' || response.status === 403) {
        Promise.reject(response.data)
        // return store.dispatch(logOut())
      }

      if (response.status === 404) {
        toast({
          title: 'Có lỗi xảy ra trong quá trình kết nối máy chủ (404)',
          status: 'error',
          duration: 2000,
          position: 'bottom-right',
          isClosable: true
        })
        return Promise.reject(response.data)
      }

      return originalRequest
    }
    return Promise.reject(error)
  }
)
export { DataService }
