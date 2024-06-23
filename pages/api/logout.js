// pages/api/logout.js
export default function handler(req, res) {
  if (req.method === 'POST') {
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('accessToken');

    // Điều hướng về trang đăng nhập hoặc trang chủ
    res.status(200).json({ message: 'Logged out successfully', ok: true });
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).json({ error: `Method ${req.method} Not Allowed` });
  }
}
