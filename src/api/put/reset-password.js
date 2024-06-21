import axios from 'axios';
import Cookies from 'js-cookie';

const handleResetPassword = async (data) => {
  try {
    const result= await axios.put('/api/reset-password', data, {headers: {Authorization: "Bearer " + Cookies.get("accessToken")}});
    return result
  } catch (error) {
    console.error('Logout failed:', error);
  }
};

export default handleResetPassword
