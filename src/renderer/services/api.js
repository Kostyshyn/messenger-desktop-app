import axios from 'axios'

export const Api = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL,
  headers: {
    Authorization: 'Bearer {token}'
  }
});