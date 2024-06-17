import axiosInstance from "..";
import Cookies from "js-cookie";

const handleGetuser = async (data) => {
  try {
    const response = await axiosInstance.get("/api/user", {headers: {
        "Authorization": "Bearer " + Cookies.get("accessToken")
    }}, data);
    return response.data;
  } catch (error) {
    return error
  }
};

export default handleGetuser;
