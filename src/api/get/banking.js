import axiosInstance from "..";

const handleBanking = async (data) => {
  try {
    const response = await axiosInstance.get("/api/banking", data);
    return response.data;
  } catch (error) {
    return error
  }
};

export default handleBanking;
