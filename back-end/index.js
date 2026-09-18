const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: "Welcome to your Express backend!" });
});

app.post('/api/data', (req, res) => {
  const incomingData = req.body;
  res.status(201).json({
    message: "Data received successfully",
    data: incomingData
  });
});

app.post('/api/contact', (req, res) => {
  const { name, message } = req.body;

  if (typeof name !== 'string' || typeof message !== 'string' || !name.trim() || !message.trim()) {
    res.status(400).json({ message: 'Name and message are required.' });
    return;
  }

  console.log(`Contact message from ${name.trim()}: ${message.trim()}`);
  res.status(201).json({ message: 'Message received successfully.' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});