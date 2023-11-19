const nodemailer = require('nodemailer');
const pug = require('pug');
const { convert } = require('html-to-text');
// const { Resend } = require('resend');

// const resend = new Resend(process.env.RESEND_KEY);

module.exports = class Email {
  constructor(user, url) {
    this.to = user.email;
    this.firstName = user.name.split(' ')[0];
    this.url = url;
    this.from = `yekini sodiq  <${process.env.EMAIL_FROM}>`;
  }

  newTransport() {
    // if (process.env.NODE_ENV === 'production') {
    //   // Using the Resend service || sendGrid service
    //   return nodemailer.createTransport({
    //     service: 'SendGrid',
    //     auth: {
    //       user: process.env.SENDGRID_USERNAME,
    //       pass: process.env.SENDGRID_PASSWORD,
    //     },
    //   });
    // }

    return nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD,
      },
    });
  }

  // Send email for google drive
  gmailTransport() {
    return nodemailer.createTransport({
      service: 'gmail',
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: process.env.GMAIL_USERNAME,
        pass: process.env.GMAIL_PASSWORD,
      },
    });
  }

  async sendGmail(template, subject) {
    const html = pug.renderFile(
      // `${__dirname}/../../views/emails/${template}.pug`,
      `${__dirname}/../views/email/${template}.pug`,
      {
        firstName: this.firstName,
        url: this.url,
        subject,
      }
    );

    const mailOptions = {
      from: this.from,
      to: this.to,
      subject,
      html,
      text: convert(html),
    };

    await this.gmailTransport().sendMail(mailOptions);
  }

  // Send the actual Email
  async send(template, subject) {
    // 1) Render HTML based on a pug template
    const html = pug.renderFile(
      // `${__dirname}/../../views/emails/${template}.pug`,
      `${__dirname}/../views/email/${template}.pug`,
      {
        firstName: this.firstName,
        url: this.url,
        subject,
      }
    );

    // 2) Define Email options
    const mailOptions = {
      from: this.from,
      to: this.to,
      subject,
      html,
      text: convert(html),
    };

    // 3) Create a transport and send Email
    await this.newTransport().sendMail(mailOptions);
  }

  async sendPasswordResetGmail() {
    await this.sendGmail(
      'passwordReset',
      'Your password reset token (Valid for only 10 minutes)'
    );
  }

  async sendWelcome() {
    await this.send('welcome', 'Welcome to the Natours Family');
  }

  async sendPasswordReset() {
    await this.send(
      'passwordReset',
      'Your password reset token (Valid for only 10 minutes)'
    );
  }
};

// const sendEmail = async (options) => {
//   1) Create a transporter
//   const transporter = nodemailer.createTransport({
//     host: process.env.EMAIL_HOST,
//     port: process.env.EMAIL_PORT,
//     auth: {
//       user: process.env.EMAIL_USERNAME,
//       pass: process.env.EMAIL_PASSWORD,
//     },
//   });

//   2) Define the email options
//   const mailOptions = {
//     from: 'yekini sodiq opeyemi <hello@ralph.io>',
//     to: options.email,
//     subject: options.subject,
//     text: options.message,
//   };

//   3) Send actual email
//   await transporter.sendMail(mailOptions);
// };