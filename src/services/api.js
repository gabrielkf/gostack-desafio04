import axios from 'axios';

const api = axios.create({
  baseURL: 'http://172.27.101.184:3333',
});

export default api;
