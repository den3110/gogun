// hooks/useAuth.js
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

const useAuth = () => {
  //   const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState();

  useEffect(() => {
    async function checkAuth() {
      const accessToken = localStorage.getItem("accessToken");
      const refreshToken = localStorage.getItem("refreshToken");
      if (!accessToken || !refreshToken) {
        setIsLoggedIn(false);
        return;
      }

      try {
        const response = await axios.post("/api/verifyToken", { accessToken });
        setIsLoggedIn(true);
      } catch (error) {
        console.error("Token verification failed:", error);

        if (
          error.response.status === 401 &&
          error.response.data.error === "TokenExpiredError"
        ) {
          try {
            const refreshResponse = await axios.post("/api/refreshToken", {
              refreshToken,
            });

            localStorage.setItem(
              "accessToken",
              refreshResponse.data.accessToken
            );

            setIsLoggedIn(true);
          } catch (refreshError) {
            console.error("Refresh token failed:", refreshError);
            setIsLoggedIn(false);
          }
        } else {
          setIsLoggedIn(false);
        }
      }
    }

    checkAuth();
  }, []);

  return isLoggedIn;
};

export default useAuth;
