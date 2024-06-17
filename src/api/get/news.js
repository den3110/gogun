import axiosInstance from "..";

const handleNews = async (data) => {
  try {
    const response = await axiosInstance.get("/api/news", {params: data});
    return response.data;
  } catch (error) {
    return error
  }
};

export default handleNews;
