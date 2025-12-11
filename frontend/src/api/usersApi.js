import { request, setAuthToken } from './client';

const usersApi = {
  getProfile: async (id = 'me') => {
    return request({ url: `/users/${id}`, method: 'GET' });
  },

  updateProfile: async (id = 'me', data) => {
    return request({ url: `/users/${id}`, method: 'PUT', data });
  },

  // Authentication helpers (if backend provides tokens)
  login: async (credentials) => {
    const res = await request({ url: '/auth/login', method: 'POST', data: credentials });
    if (res.token) setAuthToken(res.token);
    return res;
  },

  signup: async (payload) => {
    const res = await request({ url: '/auth/signup', method: 'POST', data: payload });
    if (res.token) setAuthToken(res.token);
    return res;
  },
};

export default usersApi;
