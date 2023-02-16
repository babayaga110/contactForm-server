// todo:https://asia-south1-networking-pre-event-app.cloudfunctions.net/
// const cors = require("cors")({ origin: true });
// const functions = require("firebase-functions"); //  cloud function
const admin = require("firebase-admin"); // firebae server

// todo: you will need this in remember me
var serviceAccount = require("./biz-contact-form-8001a-firebase-adminsdk-awysn-735061c5a4.json");
var firebaseConfig = {
  credential: admin.credential.cert(serviceAccount),
  // storageBucket: "",//bizconnectchat.appspot.com
  // credential: admin.credential.cert(serviceAccount),
  // databaseURL:
  //   "",//https://bizconnectchat-default-rtdb.asia-southeast1.firebasedatabase.app
};
admin.initializeApp(firebaseConfig);

const mail = require("./src/mail");
const companyMail = require("./src/companymail");
const mailMice = require("./src/bizconnectmice");

// Mail
exports.sendMail = mail.sendMail;
exports.sendMailFromCompany = companyMail.sendMailFromCompany;
exports.sendMailFromBizConnectMice = mailMice.sendMailFromBizConnectMice;
