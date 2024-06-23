import axios from 'axios';

const handleResetPassword = async (data) => {
  try {
    const result= await axios.put('/api/reset-password', data, {headers: {Authorization: "Bearer " + localStorage.getItem("accessToken")}});
    return result
  } catch (error) {
    console.error('Logout failed:', error);
  }
};

export default handleResetPassword
