// pages/api/data.js

const data = {
    momo: {
        account: "012456789",
        name: "Nguyen Van A"
    },
    atm: {
        account: "2190281092021",
        name: "MBBank - Nguyen Van A"
    }
}
  
  export default function handler(req, res) {
    if (req.method === "GET") {
      res.status(200).json(data);
    } else {
      res.setHeader("Allow", ["GET"]);
      res.status(405).json({ message: `Method ${req.method} Not Allowed` });
    }
  }
  