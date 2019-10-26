const express = require("express");
const firebase = require("firebase");
const cors = require("cors");
const bodyParser = require("body-parser");
const admin = require("firebase-admin");

const keys = require("./keys");

const serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://climathon2019-35374.firebaseio.com",
});

// Initialize Firebase
firebase.initializeApp(keys.firebaseConfig);
const db = firebase.database();

// Initialize Express
const app = express();
app.use(cors());
app.use(bodyParser());

async function getOneValueById(element, elementId) {
  await db.ref(`/${element}/${elementId}`).once(
    "value",
    snapshot => {
      console.log(snapshot.val());
      return snapshot.val();
    },
    err => console.log(err)
  );
}

async function createTicket(
  vehicleId,
  incidentCategory,
  complaint,
  customerId
) {
  const newTicket = {
    vehicleId: vehicleId,
    incidentCategory: incidentCategory,
    complaint: complaint,
    customerId: customerId,
    timeSubmitted: Math.floor(new Date().getTime() / 1000),
    workerId: 0,
    status: 0,
    routeId: "5",
  };

  const newTicketId = await db.ref("/tickets").push(newTicket);
  return newTicketId.key;
}

async function updateTicket(ticketId, ticket) {
  await db.ref(`/tickets/${ticketId}`).update(ticket, err => console.log(err));
}

app.listen(5000);

async function sendNotificationCustomer(
  customerId,
  ticketId,
  timeSubmitted,
  timeResolved
) {
  var registrationToken =
    "eC-lJf1iJ2qB15yA8IVBdQ:APA91bGzw6KayKEyPRJNoKTxi_20ZN59R_bSX-nZxEgRNOj3Yc_cVx6QdBKM46B5znsOSprGdjJv252d8A9xZx-YwaIwsPh-HD6ggs1cgi4D60ADmo5iDKPowKfweLPFz20PzxAjkWVP";

  var message = {
    data: {
      score: "850",
      time: "2:45",
    },
    token: registrationToken,
  };

  // Send a message to the device corresponding to the provided
  // registration token.
  admin
    .messaging()
    .send(message)
    .then(response => {
      // Response is a message ID string.
      console.log("Successfully sent message:", response);
    })
    .catch(error => {
      console.log("Error sending message:", error);
    });
}

sendNotificationCustomer(1, 1, 1, 1);

/*
console.log(getOneValueById("tickets", "1"));
const ticketId = createTicket(1, 1, "David Test", 1);
updateTicket("-Ls4RM6Xtuihgvt2gKY1", {
  vehicleId: 1,
  incidentCategory: 1,
  complaint: "David Test Update",
  customerId: 1,
  timeSubmitted: Math.floor(new Date().getTime() / 1000),
  workerId: 0,
  status: 0,
  routeId: "5",
});
*/
