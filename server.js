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

<link href="https://fonts.googleapis.com/css2?family=Kanit:wght@300;400;600;700&display=swap" rel="stylesheet">

<style>
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family:'Kanit',sans-serif;
}

body{
    display:flex;
    justify-content:center;
    align-items:center;
    min-height:100vh;
    background:linear-gradient(135deg,#4facfe,#00f2fe,#43e97b);
    background-size:300% 300%;
    animation:bgMove 8s ease infinite;
}

@keyframes bgMove{
    0%{background-position:0% 50%;}
    50%{background-position:100% 50%;}
    100%{background-position:0% 50%;}
}

.card{
    width:90%;
    max-width:700px;
    background:rgba(255,255,255,.18);
    backdrop-filter:blur(12px);
    border:1px solid rgba(255,255,255,.3);
    border-radius:25px;
    padding:40px;
    text-align:center;
    color:white;
    box-shadow:0 15px 40px rgba(0,0,0,.25);
    animation:fadeIn 1s ease;
}

@keyframes fadeIn{
    from{
        opacity:0;
        transform:translateY(30px);
    }
    to{
        opacity:1;
        transform:translateY(0);
    }
}

.logo{
    width:100px;
    height:100px;
    margin:auto;
    border-radius:50%;
    background:white;
    color:#2196f3;
    display:flex;
    justify-content:center;
    align-items:center;
    font-size:45px;
    font-weight:bold;
    margin-bottom:20px;
    box-shadow:0 8px 20px rgba(0,0,0,.25);
}

h1{
    font-size:2rem;
    margin-bottom:15px;
}

.info{
    margin:20px 0;
    padding:20px;
    border-radius:15px;
    background:rgba(255,255,255,.12);
}

.info p{
    font-size:1.2rem;
    margin:10px 0;
}

span{
    color:#ffe082;
    font-weight:bold;
}

.status{
    margin-top:25px;
    display:inline-block;
    padding:12px 25px;
    border-radius:50px;
    background:#4CAF50;
    color:white;
    font-size:1rem;
    box-shadow:0 5px 15px rgba(0,0,0,.2);
}

.footer{
    margin-top:30px;
    opacity:.8;
    font-size:.95rem;
}

</style>

</head>
<body>

<div class="card">

<div class="logo">🌐</div>

<h1>ใบงานปฏิบัติการ</h1>
<h2>การสร้างและจำลอง Web Server</h2>

<div class="info">
<p>🎓 <span>รหัสนักศึกษา</span><br>69319010027</p>

<p>👨‍🎓 <span>ชื่อ-นามสกุล</span><br>นายปรัตถกร คำศรี</p>
</div>

<div class="status">
✅ Web Server กำลังทำงานบน Cloud สำเร็จ
</div>

<div class="footer">
Express.js | Node.js | Cloud Deployment
</div>

</div>

</body>
</html>
`);
});

app.listen(PORT, () => {
  console.log(\`🚀 Server is running on port \${PORT}\`);
});
