// hooks/useAuth.js
"use client";
import { useEffect, useState } from "react";
import handleGetuser from "../api/get/user";
import handleServer from "../api/get/server";

const ServerListData = () => {
  //   const router = useRouter();
  const [data, setData] = useState(JSON.parse(window.localStorage.getItem("serverList")) || {});
  useEffect(() => {
    const fetchData = async () => {
      const serverData = (JSON.parse(localStorage.getItem("serverList")) || {});
      console.log(serverData)
      try {
        if(serverData) {
            setData(serverData)
            return
        }
        const response = await handleServer();
        localStorage.setItem("serverList", JSON.stringify(response))
        setUser(response);
      } catch (error) {
        console.log("Failed to fetch user data:", error);
      }
    };

    fetchData();
  }, []);

  return data;
};

export default ServerListData;
