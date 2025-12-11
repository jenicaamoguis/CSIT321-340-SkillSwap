import axios from 'axios';

const baseURL = process.env.REACT_APP_API_URL || 'http://localhost:8080/api';

const client = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000,
});

// Optional: attach token
export function setAuthToken(token) {
  if (token) {
    client.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    delete client.defaults.headers.common['Authorization'];
  }
}

// Basic error wrapper
export async function request(config) {
  try {
    const res = await client.request(config);
    return res.data;
  } catch (err) {
    // normalize error
    const error = err.response?.data || { message: err.message || 'Network error' };
    throw error;
  }
}

export default client;
// end of file - exports above
