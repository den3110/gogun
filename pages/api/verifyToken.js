// pages/api/verifyToken.js
import jwt from 'jsonwebtoken';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { accessToken } = req.body;

  try {
    const decoded = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET);

    return res.status(200).json({ valid: true, decoded });
  } catch (error) {
    console.error('Token verification failed:', error);
    return res.status(401).json({ valid: false, error: error.message });
  }
}
