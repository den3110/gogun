// pages/api/data.js

const data = [
  {
    NickName: "Tuấn Phong",
    FightPower: "18152980",
  },
  {
    NickName: "ҠuƊo",
    FightPower: "15473019",
  },
  {
    NickName: "chichi",
    FightPower: "12250709",
  },
  {
    NickName: "Đậu Đen ಠ_ಠ",
    FightPower: "12053245",
  },
  {
    NickName: "❖︵d̠i̠ễm̠m̠y̠ッ❤",
    FightPower: "11098323",
  },
  {
    NickName: "꧁•⊹٭Sh✦",
    FightPower: "10426002",
  },
  {
    NickName: "NelCrazy",
    FightPower: "10050092",
  },
  {
    NickName: "Gao♦Icarus",
    FightPower: "8351210",
  },
  {
    NickName: "Revive",
    FightPower: "8312927",
  },
  {
    NickName: "OniChannnnn",
    FightPower: "7693527",
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
