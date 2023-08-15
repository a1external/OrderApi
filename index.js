const express = require('express'); // Uncomment this line to import express
const app = express();
const PORT = 9101;
const cors = require('cors');
const fs = require('fs');

app.use(express.json());
app.use(cors());

let ordersInfo = [];

app.post('/orders', (req, res) => {
  const requestData = req.body;

  try {
    ordersInfo.push(requestData);
    fs.writeFileSync('orders.json', JSON.stringify(ordersInfo, null, 2), 'utf-8');
  
    res.status(200).json({ message: 'Order received successfully', data: requestData });
    console.log("Response sent.");
    console.log(requestData);
  } catch (error) {
    console.error("Error processing request:", error);
    res.status(500).json({ message: 'Error processing request' });
  }
});

app.get('/orders', (req, res) => {
  const cookieValue = req.cookies.myCookie;
  const userAgent = req.headers['user-agent'];
  // Process cookieValue and userAgent and respond accordingly
});

app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});
