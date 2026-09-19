const express = require('express');
const nodemailer = require('nodemailer');
require('dotenv').config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
})

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

app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;

  if (typeof name !== 'string' || typeof message !== 'string' || !name.trim() || !message.trim()) {
    res.status(400).json({ message: 'Name and message are required.' });
    return;
  }

  const mailOptions = {
   from: process.env.EMAIL_USER, // Sent via your authenticated server email
    replyTo: email,               // Allows you to click 'Reply' in your inbox to email the user back directly
    to: process.env.EMAIL_USER,   // Destination: Sends the form results straight to you
    subject: `New Contact Form Submission from ${name}`,
    text: `You received a new message:\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    html: `
      <h3>New Contact Form Submission</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
      <p><strong>Message:</strong></p>
      <p style="white-space: pre-wrap; background: #f4f4f4; padding: 10px; border-radius: 5px;">${message}</p>
    `
  };

  try {
    // 3. Dispatch the email
    await transporter.sendMail(mailOptions);
    return res.status(200).json({ success: true, message: 'Thank you! Your message has been sent.' });
  } catch (error) {
    console.error('Contact form email failed:', error);
    return res.status(500).json({ error: 'Something went wrong on our end. Please try again later.' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});