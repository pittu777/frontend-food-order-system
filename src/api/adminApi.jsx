import axios from 'axios';

const API_BASE_URL = 'https://backend-food-order-system-1.onrender.com/api/admin';



export const loginAdminUser = async (email, password) => {
  const response = await axios.post(`${API_BASE_URL}/admin-login`, { email, password });
  console.log(response.data)
  return response.data;
};

