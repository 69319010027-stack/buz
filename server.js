const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

// หน้าแรก
app.get("/", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="th">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Web Server สำหรับส่งงาน</title>

      <style>
        body{
          font-family: Arial, sans-serif;
          background-color: #f4f4f9;
          text-align: center;
          margin: 0;
          padding-top: 80px;
        }

        .container{
          width: 400px;
          margin: auto;
          background: white;
          padding: 30px;
          border-radius: 10px;
          box-shadow: 0 4px 10px rgba(0,0,0,0.2);
        }

        h1{
          color: #333;
        }

        h2{
          color: #007bff;
        }

        p{
          color: green;
          font-weight: bold;
        }
      </style>

    </head>

    <body>

      <div class="container">
        <h1>ใบงานปฏิบัติการ</h1>
        <h2>การสร้างและจำลอง Web Server</h2>

        <h2>รหัสนักศึกษา: 69319010027</h2>
        <h2>ชื่อ-นามสกุล: นายปรัตถกร คำศรี</h2>

        <p>✅ Status: Web Server กำลังทำงานอยู่บน Cloud</p>
      </div>

    </body>
    </html>
  `);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
