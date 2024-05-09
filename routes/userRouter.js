const express = require('express');
const router = express.Router();
const nodemailer = require("nodemailer");

router.get('/invitingpatient',(req, res) => {
    try {
        const { peerId, useremail } = req.query

        const { URLSearchParams } = require('url');

        const baseUrl = `http://localhost:5173/remoteuservideocall`
        const params = new URLSearchParams({ peerId: peerId })
        const urlWithData = `${baseUrl}?${params.toString() || ''}`

        const transporter = nodemailer.createTransport({
            host: "forward-email=centaurr252@gmail.com",
            port: 465,
            secure: true,
            service: 'Gmail',
            auth: {
              // TODO: replace `user` and `pass` values from <https://forwardemail.net>
              user: 'centaurr252@gmail.com',
              pass: 'nuslvzvfidhqyjrr',
            },
          });


          async function main() {
            // send mail with defined transport object
            const info = await transporter.sendMail({
                from: 'centaurr252@gmail.com', // sender address
                to: useremail, // list of receivers
            subject: "Hello ✔", // Subject line
            text: 'copy this url to your browser', // plain text body
            html: `<p>${urlWithData}</p>`, // html body
          });                                  
        }
        
        main().catch(console.error);

        res.status(200).json({ status : true })

    } catch(err) {
        console.error(err);
    }
})

module.exports = router