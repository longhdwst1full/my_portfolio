// const express = require("express");
// const app = express();

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// app.post("/send", (req, res) => {
//   const formData = req.body;

//   message.html = `
//     <p>Name: ${formData.name}</p>
//     <p>Email: ${formData.email}</p>
//     <p>Message: ${formData.message}</p>
//   `;

//   transporter.sendMail(message, (error, info) => {
//     if (error) {
//       console.log(error);
//       res.status(500).send("Error sending email");
//     } else {
//       console.log("Email sent: " + info.response);
//       res.status(200).send("Email sent successfully");
//     }
//   });
// });

// app.listen(3001, () => {
//   console.log("Server running on port 3001");
// });


// import axios from "axios";

// const sendForm = (formData) => {
//     axios
//       .post("/send", formData)
//       .then((response) => console.log(response.data))
//       .catch((error) => console.log(error));
//   };
  


import express from 'express';
import nodemailer from 'nodemailer';

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post('/send', (req, res) => {
  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'youremail@gmail.com',
      pass: 'yourpassword'
    }
  });

  const mailOptions = {
    from: 'youremail@gmail.com',
    to: 'recipientemail@gmail.com',
    subject: `Message from ${name} <${email}>`,
    text: message
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.send('error');
    } else {
      console.log('Email sent: ' + info.response);
      res.send('success');
    }
  });
});

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
