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
        * {
          box-sizing: border-box;
        }

        body {
          font-family: 'Segoe UI', 'Tahoma', 'Sarabun', Arial, sans-serif;
          background: linear-gradient(160deg, #0d0b2b 0%, #241b52 40%, #4a2d7a 75%, #7c3aed 100%);
          min-height: 100vh;
          margin: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          position: relative;
          overflow: hidden;
        }

        /* ดาวระยิบระยับพื้นหลัง */
        .stars {
          position: absolute;
          inset: 0;
          background-image:
            radial-gradient(2px 2px at 20px 30px, #fff, transparent),
            radial-gradient(2px 2px at 60px 80px, #fff, transparent),
            radial-gradient(1.5px 1.5px at 100px 20px, #fff, transparent),
            radial-gradient(1.5px 1.5px at 150px 60px, #fff, transparent),
            radial-gradient(2px 2px at 200px 100px, #fff, transparent),
            radial-gradient(1.5px 1.5px at 250px 40px, #fff, transparent),
            radial-gradient(2px 2px at 300px 90px, #fff, transparent),
            radial-gradient(1.5px 1.5px at 350px 15px, #fff, transparent);
          background-size: 400px 200px;
          animation: twinkle 4s ease-in-out infinite alternate;
          opacity: 0.6;
        }

        @keyframes twinkle {
          from { opacity: 0.3; }
          to { opacity: 0.7; }
        }

        .container {
          position: relative;
          z-index: 1;
          width: 100%;
          max-width: 420px;
          background: rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          padding: 40px 30px;
          border-radius: 20px;
          box-shadow: 0 20px 50px rgba(124, 58, 237, 0.4);
          text-align: center;
          animation: fadeIn 0.6s ease-out;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .icon {
          font-size: 48px;
          margin-bottom: 10px;
          filter: drop-shadow(0 0 12px rgba(196, 181, 253, 0.8));
        }

        h1 {
          color: #ffffff;
          font-size: 22px;
          margin: 10px 0 5px;
          text-shadow: 0 0 10px rgba(167, 139, 250, 0.6);
        }

        h2.subtitle {
          color: #c4b5fd;
          font-size: 17px;
          font-weight: 600;
          margin: 0 0 20px;
        }

        .info-box {
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(196, 181, 253, 0.3);
          border-radius: 12px;
          padding: 15px 20px;
          margin: 15px 0;
          text-align: left;
        }

        .info-box p {
          margin: 6px 0;
          color: #ede9fe;
          font-weight: normal;
          font-size: 15px;
        }

        .info-box .label {
          font-weight: bold;
          color: #a78bfa;
        }

        .status {
          margin-top: 20px;
          padding: 12px;
          background: linear-gradient(135deg, #8b5cf6 0%, #3b82f6 100%);
          border-radius: 10px;
          color: white;
          font-weight: bold;
          font-size: 14px;
          box-shadow: 0 4px 15px rgba(139, 92, 246, 0.5);
        }

        .status::before {
          content: "✅ ";
        }
      </style>
    </head>
    <body>
      <div class="stars"></div>
      <div class="container">
        <div class="icon">🔮</div>
        <h1>ใบงานปฏิบัติการ</h1>
        <h2 class="subtitle">การสร้างและจำลอง Web Server</h2>

        <div class="info-box">
          <p><span class="label">รหัสนักศึกษา:</span> 69319010027</p>
          <p><span class="label">ชื่อ-นามสกุล:</span> นายปรัตถกร คำศรี</p>
        </div>

        <div class="status">Status: Web Server กำลังทำงานอยู่บน Cloud</div>
      </div>
    </body>
    </html>
  `);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
