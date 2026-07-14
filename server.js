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
<title>Web Server</title>

<style>
body{
    font-family: Arial, sans-serif;
    background:#f4f6f9;
    display:flex;
    justify-content:center;
    align-items:center;
    height:100vh;
    margin:0;
}

.card{
    background:#fff;
    width:400px;
    padding:30px;
    border-radius:10px;
    text-align:center;
    box-shadow:0 5px 15px rgba(0,0,0,0.2);
}

h1{
    color:#007bff;
}

p{
    font-size:18px;
    margin:15px 0;
}

.status{
    color:green;
    font-weight:bold;
}
</style>

</head>
<body>

<div class="card">
    <h1>🌐 Web Server</h1>
    <p><strong>ใบงาน:</strong> การสร้างและจำลอง Web Server</p>
    <p><strong>รหัสนักศึกษา:</strong> 69319010027</p>
    <p><strong>ชื่อ:</strong> นายปรัตถกร คำศรี</p>
    <p class="status">✅ Web Server กำลังทำงานอยู่</p>
</div>

</body>
</html>
  `);
});

app.listen(PORT, () => {
  console.log(\`Server is running on port \${PORT}\`);
});
