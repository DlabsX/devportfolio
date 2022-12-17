const router = require("express").Router();
const nodemailer = require("nodemailer");

router.post("/contact", (req, res) => {
 
  let  data  = req.body 
  console.log(req.body)
  if ( data.name.length === 0 || data.email.length === 0 || data.message.length === 0) {
    return res.json({ msg: "Please Fill All The Fields!" });
  }

  let smtpTransporter = nodemailer.createTransport({
    service: "Gmail",
    port: 465,
    auth: {
      user: "dalton.soto.14@gmail.com", //uocczvupodqtvude
      //pass: "dalton48044940",
      pass: "uocczvupodqtvude"
    },
     }); 
          
  let mailOptions = {
    
    from: data.email,
    to: "dalton.soto.14@gmail.com",
    subject: `message from ${data.email}`,
    html: `

            <h3>Informations<h3/>
            <ul>
            <li Name: ${data.name} />
            <li Email: ${data.email} />
            </ul>
            <h3>Message</h3>
            <p>${data.message}<p/>
            `,
  };

  smtpTransporter.sendMail(mailOptions, (error) => {
    try {
      if (error)
      return res.status(400).json({ msg: "Please Fill All The Fields!" });
      return res.status(200).json({ msg: "Thank You For Contacting Dalton." });
    } catch (error) {
      if (error) return res.status(500).json({ msg: "There is server error" });
    }
  });
});
module.exports = router;
