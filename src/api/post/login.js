import axiosInstance from "..";

const login = async (data) => {
  try {
    const response = await axiosInstance.post("/api/login", data);
    // const { accessToken, refreshToken } = response.data;

    // localStorage.setItem("accessToken", accessToken);
    // localStorage.setItem("refreshToken", refreshToken);
    return response.data;
  } catch (error) {
    return error
  }
};

export default login;
