const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// เมื่อมีคนคลิกเข้าหน้าแรก (ลิงก์ URL หลัก) จะแสดงข้อมูลนี้
app.get('/', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="th">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Web Server สำหรับส่งงาน</title>
            <style>
                body { font-family: Arial, sans-serif; text-align: center; margin-top: 50px; background-color: #f4f4f9; }
                .container { background: white; padding: 30px; display: inline-block; border-radius: 10px; box-shadow: 0 4px 8px rgba(0,0,0,0.1); }
                h1 { color: #333; }
                h2 { color: #007bff; }
            </style>
        </head>
        <body>
            <div class="container">
                <h1>ใบงานปฏิบัติการ: การสร้างและจำลอง Web Server</h1>
                <h2>รหัสนักศึกษา: 69319010027</h2>
                <h2>ชื่อ-นามสกุล: นายปรัตถกร คำศรี</h2>
                <p>Status: Web Server กำลังทำงานอยู่บน Cloud สำเร็จ!</p>
            </div>
        </body>
        </html>
    `);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
