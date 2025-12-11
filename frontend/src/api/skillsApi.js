import { request } from './client';

const skillsApi = {
  getAll: async (params = {}) => {
    return request({ url: '/skills', method: 'GET', params });
  },

  getById: async (id) => {
    return request({ url: `/skills/${id}`, method: 'GET' });
  },

  create: async (data) => {
    return request({ url: '/skills', method: 'POST', data });
  },

  update: async (id, data) => {
    return request({ url: `/skills/${id}`, method: 'PUT', data });
  },

  remove: async (id) => {
    return request({ url: `/skills/${id}`, method: 'DELETE' });
  },

  search: async (query) => {
    return request({ url: '/skills/search', method: 'GET', params: { q: query } });
  },

  getMySkills: async () => {
    return request({ url: '/users/me/skills', method: 'GET' });
  },
};

export default skillsApi;
