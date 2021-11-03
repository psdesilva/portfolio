export default function (req, res) {
    require('dotenv').config()
    
    let nodemailer = require('nodemailer')
    const transporter = nodemailer.createTransport({
      port: 465,
      host: "smtp.gmail.com",
      auth: {
        user: 'psdesilva.portfolio@gmail.com',
        pass: 'asdf1234!@#$',
      },
      secure: true,
    })
    const mailData = {
      from: 'psdesilva.portfolio@gmail.com',
      to: 'prnkdslv@gmail.com',
      subject: `Portfolio mail: ${req.body.subject}`,
      text: req.body.message + " | Sent from: " + req.body.email,
      html: `<div>${req.body.message}</div><p>From:${req.body.name} (${req.body.email})</p>`
    }
    transporter.sendMail(mailData, function (err, info) {
      if(err)
        console.log(err)
      else
        console.log(info)
        res.status(200).end()
    })
}