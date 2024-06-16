import axiosInstance from "..";

const register = async (data) => {
  try {
    const response = await axiosInstance.post("/auth-gogun/register", data);
    const { accessToken, refreshToken } = response.data;

    localStorage.setItem("accessToken", accessToken);
    localStorage.setItem("refreshToken", refreshToken);
    return response.data;
  } catch (error) {
    return error
  }
};

export default register;
