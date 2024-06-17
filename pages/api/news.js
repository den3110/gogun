// pages/api/data.js

const data = [
  {
    id: 1,
    link: "/news?id=2104",
    tag: 1,
    title: "2/5 - 31/5 | Cập Nhật Rương Phát Tài Tháng 5 - Huy Hiệu Tháng 5",
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
