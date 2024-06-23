import jwt from "jsonwebtoken";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const { account, password } = req.body;

      if (account === "user" && password === "password") {
        const accessToken = jwt.sign(
          { account },
          process.env.ACCESS_TOKEN_SECRET,
          {
            expiresIn: "30m",
          }
        );
        const refreshToken = jwt.sign(
          { account },
          process.env.REFRESH_TOKEN_SECRET,
          {expiresIn: "24h"}
        );

        res.status(200).json({ accessToken, refreshToken, ok: true });
      } else {
        res.status(401).json({ error: "Invalid credentials" });
      }
    } catch (error) {
      console.log(error);
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
