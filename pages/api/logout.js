// pages/api/logout.js
import Cookies from 'js-cookie';

export default function handler(req, res) {
  if (req.method === 'POST') {
    // Xóa refreshToken từ cookie sử dụng js-cookie
    Cookies.remove('refreshToken');
    Cookies.remove('accessToken');

    // Điều hướng về trang đăng nhập hoặc trang chủ
    res.status(200).json({ message: 'Logged out successfully', ok: true });
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).json({ error: `Method ${req.method} Not Allowed` });
  }
}
