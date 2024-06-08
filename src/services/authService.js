// contactsService.js
import api from './api';

const authService = {
  getUser: async () => {
    try {
      console.log('before the respnse error');
      const response = await api.get('/api/users/me');
      console.log('respnser lien 8', response);
      return response;
    } catch (error) {
      // throw error;
      console.log('errror  line 12 ', error);
      return error;
    }
  },

  // /api/users/login
  loginUser: async user => {
    console.log('this is try error', user);
    try {
      const response = await api.post('/api/users/login', user);
      return response;
    } catch (error) {
      console.log(error);
      return error;
    }
  },

  registerUser: async user => {
    try {
      // const response = await api.put('/api/users', user);
      const response = await api.post('/api/users', user);
      // https://contacts-api-five.vercel.app/api/users
      //console.log(response);
      return response;
    } catch (error) {
      // throw error;
      console.log(error);
      return error;
    }
  },

  updateUser: async user => {
    try {
      const response = await api.put(`/api/users/${user._id}`, user);
      return response;
    } catch (error) {
      // throw error;
      console.log(error);
      return error;
    }
  },

  updateUserPassword: async data => {
    try {
      const response = await api.put(`/api/users`, data);
      return response;
    } catch (error) {
      // throw error;
      console.log(error);
      return error;
    }
  },
};

export default authService;
