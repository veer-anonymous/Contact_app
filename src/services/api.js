// api.js

import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const api = axios.create({
  // baseURL: 'http://localhost:3001',
  baseURL: 'https://contacts-api-five.vercel.app',
  // https://contacts-api-five.vercel.app/
  // https://contacts-api-five.vercel.app/
});

// Request interceptor
api.interceptors.request.use(
  async config => {
    const token = await AsyncStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

export default api;
