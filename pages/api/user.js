import { verifyToken } from '../../utils/auth.js'; // Thay đổi tên và đường dẫn tùy thuộc vào cấu trúc dự án của bạn

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const decoded = await verifyToken(req);

    const userId = decoded.userId;

    const user = {
      id: userId,
      username: 'exampleUser',
      email: 'example@example.com',
      coin: 0,
      accountId: "31145",
      phone: "039821928",
      twoFa: false,
      verifyEmail: false
    };

    // Trả về thông tin người dùng
    res.status(200).json(user);
  } catch (error) {
    console.error('Error fetching user data:', error);
    res.status(401).json({ error: 'Unauthorized' });
  }
}
