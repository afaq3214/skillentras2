const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: 's20.hosterpk.com',
  port: 465,
  secure: true,
  auth: {
    user: 'info@skillentras.com',
    pass: 'zulfi123#',
  },
  tls: {
    minVersion: 'TLSv1.2',
    rejectUnauthorized: true,
  },
  logger: true,
  debug: true,
});

transporter.verify((error, success) => {
  if (error) {
    console.error('SMTP Error:', error);
  } else {
    console.log('SMTP Server is ready to send emails');
  }
});