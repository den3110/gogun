import axiosInstance from "..";

const handleRegister = async (data) => {
  try {
    const response = await axiosInstance.post("/register", data);
    return response.data;
  } catch (error) {
    return error
  }
};

export default handleRegister;
