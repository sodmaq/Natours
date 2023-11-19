const { Resend } = require('resend');
const pug = require('pug');
const resend = new Resend(process.env.resend_API_KEY);

module.exports = class Email {
  constructor(user, url) {
    this.to = user.email; // Change to the recipient email address
    this.firstName = user.name.split(' ')[0];
    this.url = url;
    this.from = 'Sodmaq <onboarding@resend.dev>';
  }

  // Send the actual email
  async send(template, subject) {
    // 1) Render HTML based on a pug template
    const html = pug.renderFile(`${__dirname}/../views/email/${template}.pug`, {
      firstName: this.firstName,
      url: this.url,
      subject,
    });

    // 2) Create email options
    const emailOptions = {
      from: this.from,
      to: this.to,
      subject,
      html,
    };

    // 3) Send email
    const data = await resend.emails.send(emailOptions);
    // console.log(data);
  }

  async sendWelcome() {
    await this.send('welcome', 'Welcome to the Natours Family!');
  }

  async sendPasswordReset() {
    await this.send(
      'passwordReset',
      'Your password reset token (valid for only 10 minutes)'
    );
  }
};
