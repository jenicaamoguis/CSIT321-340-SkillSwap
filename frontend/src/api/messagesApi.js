import { request } from './client';

const messagesApi = {
  getConversations: async () => {
    return request({ url: '/conversations', method: 'GET' });
  },

  getMessages: async (conversationId) => {
    return request({ url: `/conversations/${conversationId}/messages`, method: 'GET' });
  },

  sendMessage: async (conversationId, data) => {
    return request({ url: `/conversations/${conversationId}/messages`, method: 'POST', data });
  },

  createConversation: async (data) => {
    return request({ url: '/conversations', method: 'POST', data });
  },
};

export default messagesApi;
