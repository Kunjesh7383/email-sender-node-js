const nodemailer = require("nodemailer")

let transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user:"kunjesh7383@gmail.com",
        pass:"dezxaugtydjyfsnk"
    }
})

let mailOptions = {
    from: "kunjesh7383@gmail.com",
    to: "jainishjk77@gmail.com",
    subject: "Email using Node js",
    text: "Hello JAY MOTERIYA we here happy to announce you that you are selected for 3 month gaming facality to join and hvae a greate fun with lots of gamer and cheer up with it , We are also happy to share you your STIPEND upto 30 per month. Hope you reply us for your responce.     Location : Ahmedabad , Time Duration : April 2023"
  };

transport.sendMail(mailOptions, (error , info)=>{
if(error){
    console.log("email not sent" + error)
}
else{
    console.log("Email sent successfully")
}
})