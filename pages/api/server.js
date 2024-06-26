// pages/api/data.js

const data = [
    {
      ServerName: "Gà huyền thoại (Mới)",
      ServerId: "1"
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
  