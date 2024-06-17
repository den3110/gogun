// hooks/useAuth.js
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Cookies from "js-cookie";
import cookie from "cookie"

const useAuth = () => {
//   const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState();

  useEffect(() => {
    async function checkAuth() {
      const accessToken = Cookies.get("accessToken");
      const refreshToken = Cookies.get("refreshToken");
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

            document.cookie = cookie.serialize(
              "accessToken",
              refreshResponse.data.accessToken,
              {
                httpOnly: true,
                maxAge: 60 * 15, 
              }
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
