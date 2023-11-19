const nodemailer = require('nodemailer');
const pug = require('pug');
const htmlToText = require('html-to-text');
const { Resend } = require('resend');

module.exports = class Email {
  constructor(user, url) {
    this.to = user.email;
    this.firstName = user.name.split(' ')[0];
    this.url = url;
    this.from = `Your App <${process.env.EMAIL_FROM}>`;
    this.transporter = this.newTransport();
  }

  newTransport() {
    if (process.env.NODE_ENV === 'production') {
      // Use Resend in production
      return new Resend(process.env.resend_API_KEY);
    }

    // Use Mailtrap in development
    return nodemailer.createTransport({
      host: process.env.MAILTRAP_HOST,
      port: process.env.MAILTRAP_PORT,
      auth: {
        user: process.env.MAILTRAP_USERNAME,
        pass: process.env.MAILTRAP_PASSWORD,
      },
    });
  }

  async send(template, subject) {
    const html = pug.renderFile(`${__dirname}/../views/email/${template}.pug`, {
      firstName: this.firstName,
      url: this.url,
      subject,
    });

    const mailOptions = {
      from: this.from,
      to: this.to,
      subject,
      html,
    };

    if (typeof this.transporter.send === 'function') {
      // Resend case
      await this.transporter.send(mailOptions);
    } else {
      // Nodemailer case
      await this.transporter.sendMail(mailOptions);
    }
  }
};
