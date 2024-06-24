// hooks/useAuth.js
"use client";
import { useEffect, useState } from "react";
import handleGetuser from "../api/get/user";

const UserData = () => {
  //   const router = useRouter();
  const [user, setUser] = useState(JSON.parse(window.localStorage.getItem("userData")) || {});
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userData = (JSON.parse(localStorage.getItem("userData")) || {});
        if(userData?.username) {
            setUser(userData)
            return
        }
        const response = await handleGetuser();
        localStorage.setItem("userData", JSON.stringify(response))
        setUser(response);
      } catch (error) {
        console.log("Failed to fetch user data:", error);
      }
    };

    fetchUser();
  }, []);

  return user;
};

export default UserData;
