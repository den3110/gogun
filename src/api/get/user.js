import axiosInstance from "..";

const handleGetuser = async (data) => {
  try {
    const response = await axiosInstance.get("/api/user", {headers: {
        "Authorization": "Bearer " + localStorage.getItem("accessToken")
    }}, data);
    return response.data;
  } catch (error) {
    return error
  }
};

export default handleGetuser;
