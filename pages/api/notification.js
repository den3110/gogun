// pages/api/data.js

const data = [
    {
      id: 1,
      link: "/news?id=2104",
      src: "https://gogun.vn/storage/images/SLIDE1.png",
      title: "Hướng dẫn chơi trên điện thoại !!! (HOT)"
    },
    {
      id: 2,
      link: "/news?id=2104",
      src: "https://gogun.vn/storage/images/slide2.jpg",
      title: "HOẠT ĐỘNG GÀ ĐÓN XUÂN"
    },
  ];
  
  export default function handler(req, res) {
    if (req.method === "GET") {
      res.status(200).json(data);
    } else {
      res.setHeader("Allow", ["GET"]);
      res.status(405).json({ message: `Method ${req.method} Not Allowed` });
    }
  }
  