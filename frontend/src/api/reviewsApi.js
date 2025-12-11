import { request } from './client';

const reviewsApi = {
  getBySkill: async (skillId) => {
    return request({ url: `/skills/${skillId}/reviews`, method: 'GET' });
  },

  create: async (skillId, data) => {
    return request({ url: `/skills/${skillId}/reviews`, method: 'POST', data });
  },

  remove: async (id) => {
    return request({ url: `/reviews/${id}`, method: 'DELETE' });
  },
};

export default reviewsApi;
