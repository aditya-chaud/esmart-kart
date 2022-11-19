const nodeMailer = require("nodemailer");

const sendEmail = async (options) => {
  const transporter = nodeMailer.createTransport({
    // host: process.env.SMPT_HOST,
    port: process.env.SMPT_PORT,
    secure: false,
    service: process.env.SMPT_SERVICE,
    auth: {
      user: process.env.SMPT_MAIL,
      pass: process.env.SMPT_PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.SMPT_MAIL,
    to: options.email,
    subject: options.subject,
    text: options.message,
  };

  const response = await transporter.sendMail(mailOptions);

  console.log({ response });

  return response;
  // await transporter.sendMail(mailOptions);
};

module.exports = sendEmail;
