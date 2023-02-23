import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "your-email@gmail.com",
    pass: "your-email-password",
  },
});

const message = {
  from: "Your Name <your-email@gmail.com>",
  to: "recipient-email@example.com",
  subject: "New Form Submission",
  html: "<p>You have received a new form submission!</p>",
};
