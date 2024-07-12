import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:3001/api', // Base URL of your email server
  headers: {
    'Content-Type': 'application/json'
  }
});

const apiClient2 = axios.create({
  baseURL: 'http://localhost:4000', // Base URL of your email server
  headers: {
    'Content-Type': 'application/json'
  }
});

export const getEmails = async (limit, query, grantId) => {
  try {    
    const response = await apiClient.post('/emails/search-email', {
      params: {
        searchQuery: query, 
        searchLimit: limit,
        grantId: grantId 
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
};

// Add authenticated email
export const addAuthEmail = async () => {
  try {    
    const response = await apiClient.get('/emails/nylas/auth');
  } catch (error) {
    console.error('Unable to redirect: ', error);
    throw error;
  }
};

// Get chat conversations
export const getChatConversations = async (orgId, usersId) => {
  try {    
    const response = await apiClient2.get('/conversations', {
      params: {
        organizationId: orgId,
        userId: usersId
      }
    });

    return response;
    
  } catch (e) {
    console.error('Unable to redirect: ', error);
    throw error;
  }
};
