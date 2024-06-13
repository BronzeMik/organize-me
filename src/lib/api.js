import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:3001/api', // Base URL of your email server
  headers: {
    'Content-Type': 'application/json'
  }
});

export const getEmails = async () => {
  try {
    const response = await apiClient.get('/emails');
    return response.data;
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
};
