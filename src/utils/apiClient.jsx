import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://backend-food-order-system-1.onrender.com/api/',
  headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
});

export default apiClient;
