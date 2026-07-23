const http = require('http');
const { Pool } = require('pg');

// ตั้งค่าการเชื่อมต่อ
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

const port = process.env.PORT || 3000;

const server = http.createServer(async (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html; charset=utf-8');

  try {
    // ดึงข้อมูลจากตาราง students
    const result = await pool.query('SELECT * FROM students');
    
    // ประกอบเป็นตาราง HTML
    let html = `<h1>ฐานข้อมูลนักศึกษา (ทดสอบการเชื่อมต่อ)</h1>`;
    html += `<table border="1" cellpadding="10">`;
    html += `<tr><th>รหัสนักศึกษา</th><th>ชื่อ-นามสกุล</th></tr>`;
    
    // วนลูปแสดงข้อมูลแต่ละแถว
    if (result.rows && result.rows.length > 0) {
      result.rows.forEach(row => {
        // ใช้ escapeHtml เพื่อป้องกัน XSS
        const studentId = escapeHtml(row.student_id);
        const studentName = escapeHtml(row.student_name);
        html += `<tr><td>${studentId}</td><td>${studentName}</td></tr>`;
      });
    } else {
      html += `<tr><td colspan="2">ไม่มีข้อมูล</td></tr>`;
    }
    
    html += `</table>`;
    res.end(html);
    
  } catch (err) {
    console.error(err);
    res.statusCode = 500;
    const errorMessage = escapeHtml(err.message);
    res.end(`<h1>เกิดข้อผิดพลาด!</h1><p>${errorMessage}</p>`);
  }
});

// ฟังก์ชันป้องกัน XSS
function escapeHtml(text) {
  if (!text) return '';
  const map = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  };
  return String(text).replace(/[&<>"']/g, m => map[m]);
}

server.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
