const sendgridMail = require("@sendgrid/mail");
require("dotenv").config()


sendgridMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendEmail = async (data) => {
const email = {...data, from: "svetli4nuyvla2islav@gmail.com"};
await sendgridMail.send(email);
return true;

}

module.exports = sendEmail;

// const email = {
//     to: "vokip66207@getmola.com",
//     from: "svetli4nuyvla2islav@gmail.com",
//     subject: "Test email",
//     html: "<p><strong> Test email</strong> from localhost:3000</p>"
// }
// sendgridMail.send(email)
//     .then(() => console.log("Verification successful"))
//     .catch(error => console.log(error.message))
     // "User not found"