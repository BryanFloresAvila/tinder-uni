const nodemailer = require('nodemailer');

const transport = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  secure: true,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
});

const sendConfirmationEmail = (name, email, confirmationCode) => {
  transport
    .sendMail({
      from: process.env.EMAIL,
      to: email,
      subject: 'Please confirm your account',
      html: `<h1>Email Confirmation</h1>
        <h2>Hello ${name}</h2>
        <p>Thank you for subscribing. Please confirm your email by clicking on the following link</p>
        <a href=http://localhost:${process.env.PORT}/confirm/${confirmationCode}> Click here</a>
        </div>`,
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = { sendConfirmationEmail };
