const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send(`
<!DOCTYPE html>
<html lang="th">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Web Server สำหรับส่งงาน</title>

<style>
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}

body{
    font-family:Arial, Helvetica, sans-serif;
    background:linear-gradient(135deg,#0f172a,#1e3a8a,#2563eb);
    display:flex;
    justify-content:center;
    align-items:center;
    min-height:100vh;
}

.container{
    width:90%;
    max-width:650px;
    background:#ffffff;
    border-radius:18px;
    box-shadow:0 10px 30px rgba(0,0,0,.25);
    overflow:hidden;
}

.header{
    background:#2563eb;
    color:white;
    text-align:center;
    padding:30px;
}

.header h1{
    font-size:30px;
    margin-bottom:10px;
}

.header p{
    font-size:16px;
}

.content{
    padding:35px;
}

.info{
    display:flex;
    justify-content:space-between;
    margin:18px 0;
    padding:15px;
    border-left:5px solid #2563eb;
    background:#f8fafc;
    border-radius:8px;
}

.info span:first-child{
    font-weight:bold;
    color:#1e3a8a;
}

.status{
    margin-top:30px;
    text-align:center;
    padding:15px;
    background:#dcfce7;
    color:#166534;
    border-radius:10px;
    font-weight:bold;
}

.footer{
    text-align:center;
    padding:18px;
    background:#f1f5f9;
    color:#555;
    font-size:14px;
}
</style>

</head>
<body>

<div class="container">

<div class="header">
<h1>🌐 Web Server</h1>
<p>ใบงานปฏิบัติการ : การสร้างและจำลอง Web Server</p>
</div>

<div class="content">

<div class="info">
<span>รหัสนักศึกษา</span>
<span>69319010027</span>
</div>

<div class="info">
<span>ชื่อ-นามสกุล</span>
<span>นายปรัตถกร คำศรี</span>
</div>

<div class="status">
✅ Web Server กำลังทำงานบน Cloud สำเร็จ
</div>

</div>

<div class="footer">
Node.js • Express.js • Cloud Server
</div>

</div>

</body>
</html>
  `);
});

app.listen(PORT, () => {
  console.log(\`Server is running on port \${PORT}\`);
});
