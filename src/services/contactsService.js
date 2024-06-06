// contactsService.js
import api from './api';

const contactsService = {
  getAllContacts: async () => {
    try {
      const response = await api.get('/api/contacts');
      // console.log('Standard API Data ==>', response.data);
      return response;
    } catch (error) {
      throw error;
    }
  },

  getContactById: async id => {
    try {
      const response = await api.get(`/api/contacts/${id}`);
      // console.log('Standard API Data ==>', response.data);
      return response;
    } catch (error) {
      throw error;
    }
  },

  addContact: async contact => {
    try {
      const response = await api.post('/api/contacts', contact);
      return response;
    } catch (error) {
      throw error;
    }
  },

  updateContact: async contact => {
    try {
      const response = await api.put(`/api/contacts/${contact._id}`, contact);
      return response;
    } catch (error) {
      throw error;
    }
  },

  deleteContact: async contactId => {
    try {
      await api.delete(`/api/contacts/${contactId}`);
    } catch (error) {
      throw error;
    }
  },
};

export default contactsService;
