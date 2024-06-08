// api.js

import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const api = axios.create({
  baseURL: 'http://localhost:8000',
  // baseURL: 'https://contacts-api-five.vercel.app',
  // https://contacts-api-five.vercel.app/
  // https://contacts-api-five.vercel.app/
});

// Request interceptor
api.interceptors.request.use(
  async config => {
    const token = await AsyncStorage.getItem('token');
    console.log('token pring in ', token);
    if (token != null) {
      config.headers.Authorization = `Bearer ${token}`;
      console.log('Header ', config.headers.Authorization);
    }
    console.log('config error', config);
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

export default api;
