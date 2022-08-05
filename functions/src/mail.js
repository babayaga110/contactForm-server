const functions = require("firebase-functions");
const admin = require("firebase-admin");
const cors = require("cors")({ origin: true }); // only requied for api request

exports.sendMail = functions
  .region("asia-south1")
  .https.onRequest((req, res) => {
    cors(req, res, async () => {
      const { to, subject, text, html } = req.body;

      admin
        .firestore()
        .collection("mail")
        .add({
          to: to,
          message: {
            subject: subject,
            text: text,
            html: html,
          },
        })
        .then(() =>
          console.log("Queued email for delivery!", to, subject, text, html)
        );
    });
  });
