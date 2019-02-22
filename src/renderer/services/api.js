import axios from 'axios'

export const Api = axios.create({
  baseURL: `${process.env.VUE_APP_BASE_URL}/api`,
  headers: {
    Authorization: 'Bearer {token}'
  }
});