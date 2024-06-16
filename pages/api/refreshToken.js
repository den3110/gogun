// pages/api/refreshToken.js
import jwt from 'jsonwebtoken';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { refreshToken } = req.body;

  try {
    const decoded = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET);

    const newAccessToken = jwt.sign({ userId: decoded.userId }, process.env.ACCESS_TOKEN_SECRET, {
      expiresIn: '15m' 
    });

    return res.status(200).json({ accessToken: newAccessToken });
  } catch (error) {
    console.error('Refresh token failed:', error);
    return res.status(401).json({ error: 'Refresh token failed' });
  }
}
