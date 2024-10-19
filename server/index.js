const express = require("express")
const cors = require("cors")
const app = express()
app.use(express.json())
const nodemailer = require("nodemailer")
app.use(cors({
    origin: 'http://localhost:5173'
}));
require("dotenv").config()
app.post("/mail", async (req, res) => {
    const {name,email,subject,message} = req.body;
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_EMAIL,
        pass: process.env.GMAIL_PASSWORD,
      },
    });
  
    let mailOptions = {
      from: process.env.GMAIL_EMAIL,
      to: email,
      subject: subject,
      text: message
    };
    try {
      let info = await transporter.sendMail(mailOptions);
      res.status(200).json({
        message: "Email sent successfully",
        messageId: info.messageId,
        previewUrl: nodemailer.getTestMessageUrl(info),
      });
    } catch (error) {
      res.status(500).json({
        message: "Error sending email",
        error: error.message,
      });
    }
})
app.listen(process.env.PORT || 3120)