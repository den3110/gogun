import axiosInstance from "..";

const handleRanking = async (data) => {
  try {
    const response = await axiosInstance.get("/api/ranking", data);
    return response.data;
  } catch (error) {
    return error
  }
};

export default handleRanking;
