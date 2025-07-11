import axios from 'axios';
const api = axios.create({ baseURL: 'https://ussoppqq.redirectme.net/api' });
api.interceptors.request.use(config => {
  const token = localStorage.getItem('token');
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});
export default api;
