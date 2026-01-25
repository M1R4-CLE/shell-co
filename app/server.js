const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post('/send-email', async (req, res) => {
  const { name, email, phone, message } = req.body;

  // Configure transporter (use Gmail App Password)
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'yourgmail@gmail.com', // replace with your Gmail
      pass: 'your-app-password'    // use Gmail App Password
    }
  });

  let mailOptions = {
    from: email,
    to: 'monecorporation1@gmail.com',
    subject: 'New Consultation Request',
    text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send('Email sent!');
  } catch (error) {
    res.status(500).send('Error sending email: ' + error.message);
  }
});

app.listen(3001, () => console.log('Server running on port 3001'));