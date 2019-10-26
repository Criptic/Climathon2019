const express = require("express");
const firebase = require("firebase");
const cors = require("cors");
const bodyParser = require("body-parser");

const keys = require("./keys");

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
) {}

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
