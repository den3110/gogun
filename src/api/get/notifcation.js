import axiosInstance from "..";

const handleNotification = async (data) => {
  try {
    const response = await axiosInstance.get("/api/notification", {params: data});
    return response.data;
  } catch (error) {
    return error
  }
};

export default handleNotification;
