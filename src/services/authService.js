// contactsService.js
import api from './api';

const authService = {
  getUser: async () => {
    try {
      const response = await api.get(`/api/users/me`);
      return response;
    } catch (error) {
      throw error;
    }
  },

  // /api/users/login
  loginUser: async user => {
    console.log('this is try error', user);
    try {
      const response = await api.post('/api/users/login', user);
      console.log('response error', response);
      return response;
    } catch (error) {
      console.log(error);
    }
  },

  registerUser: async user => {
    try {
      const response = await api.put(`/api/users`, user);
      //console.log(response);
      return response;
    } catch (error) {
      throw error;
    }
  },

  updateUser: async user => {
    try {
      const response = await api.put(`/api/users/${user._id}`, user);
      return response;
    } catch (error) {
      throw error;
    }
  },

  updateUserPassword: async data => {
    try {
      const response = await api.put(`/api/users`, data);
      return response;
    } catch (error) {
      throw error;
    }
  },
};

export default authService;
