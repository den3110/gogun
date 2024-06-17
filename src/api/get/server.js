import axiosInstance from "..";

const handleServer = async (data) => {
  try {
    const response = await axiosInstance.get("/api/server", data);
    return response.data;
  } catch (error) {
    return error
  }
};

export default handleServer;
