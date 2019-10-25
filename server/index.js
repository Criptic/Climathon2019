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

function getTicketById(ticketId) {
  const ticket = db.ref(`/tickets/${ticketId}`).once(
    "value",
    snapshot => {
      return snapshot.val();
    },
    err => console.log(err)
  );

  return ticket;
}

app.listen(5000);
getTicketById("0000001");
