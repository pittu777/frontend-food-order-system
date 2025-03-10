import axios from "axios";

const API_URL = 'https://backend-food-order-system-1.onrender.com/api/orders';



export const placeOrder = async (orderDetails) => {
  try {
    const token = localStorage.getItem('authToken'); // Ensure the key is correct
    if (!token) {
      console.error('Token not found in localStorage.');
      throw new Error('Unauthorized: Missing token');
    }

    console.log('Placing order with details:', orderDetails);
    console.log('Using token:', token);

    const response = await axios.post(
      'https://backend-food-order-system-1.onrender.com/api/orders/order', // Update the URL as needed
      orderDetails,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    console.log('Order placed successfully:', response.data);
    return response.data;
  } catch (error) {
    console.error('Failed to place order:', error.response?.data || error.message);
    throw new Error(error.response?.data?.message || 'Failed to place order');
  }
};


export const getUserOrders = async (userId) => {
    try {
      const authToken = localStorage.getItem('authToken'); 
      if (!authToken) {
        throw new Error('No auth token found in localStorage');
      }
  
      const response = await axios.get(`${API_URL}/user/${userId}`, {
        headers: {
          Authorization: `Bearer ${authToken}`, 
        },
      });
  
      return response.data; 
    } catch (error) {
      console.error('Error fetching user orders:', error);
      throw error;
    }
  };
  
