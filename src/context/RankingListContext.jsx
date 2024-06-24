// hooks/useAuth.js
"use client";
import { useEffect, useState } from "react";
import handleGetuser from "../api/get/user";
import handleServer from "../api/get/server";
import handleRanking from "../api/get/ranking";

const RankingListData = () => {
  //   const router = useRouter();
  const [data, setData] = useState(JSON.parse(window.localStorage.getItem("rankingList")) || null);
  useEffect(() => {
    const fetchData = async () => {
      const serverData = (JSON.parse(localStorage.getItem("rankingList")) || null);
      try {
        if(serverData) {
            setData(serverData)
            return
        }
        const response = await handleRanking();
        localStorage.setItem("rankingList", JSON.stringify(response))
        setUser(response);
      } catch (error) {
        console.log("Failed to fetch user data:", error);
      }
    };

    fetchData();
  }, []);

  return data;
};

export default RankingListData;
