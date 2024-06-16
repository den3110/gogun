import axios from 'axios';

const handleLogout = async () => {
  try {
    const result= await axios.post('/api/logout');
    return result
  } catch (error) {
    console.error('Logout failed:', error);
  }
};

export default handleLogout
