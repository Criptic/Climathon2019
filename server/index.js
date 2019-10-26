const express = require("express");
const firebase = require("firebase");
const cors = require("cors");
const bodyParser = require("body-parser");
const admin = require("firebase-admin");
const axios = require("axios");

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

app.get("/createTicket", (req, res) => {
  createTicket(
    req.query.vehicleId,
    req.query.incidentCategory,
    req.query.complaint,
    req.query.customerId
  );
  console.log(req.query);
});

app.get("/getTickets", async (req, res) => {
  res.send(await getTicketsByCustomerId(req.query.customerId));
});

app.get("/getNews", async (req, res) => {
  const news = axios
    .get(
      "http://rnv.the-agent-factory.de:8080/easygo2/api/regions/rnv/modules/news",
      {
        headers: {
          RNV_API_TOKEN: "a30n2m3sesqn5ogo8t4nmvgduq",
          Accept: "application/json",
        },
      }
    )
    .then(response => {
      return response.data;
    })
    .catch(function(error) {
      console.log(error);
    });
  res.send(await news);
});
app.listen(5000);

async function getTicketsByCustomerId(customerId) {
  const criteria = {
    type: "customerId",
    value: customerId,
  };

  let tickets = await retrieveHistory(criteria);
  // console.log("tickets", tickets);

  const strippedTickets = Promise.all(
    tickets.map(async ticket => {
      delete ticket.workerId;
      delete ticket.vehicleId;
      ticket.incidentCategory = await getOneValueById(
        "incidentCategory",
        1
      ).then(val => {
        return val.val().incidentText;
      });
      return ticket;
    })
  );

  return strippedTickets;
}

async function getOneValueById(element, elementId) {
  return await db.ref(`/${element}/${elementId}`).once(
    "value",
    snapshot => {
      // console.log(snapshot.val());
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

/**
 *
 * @param {String} recipientToken token of the device the receive notification
 * @param {Object} data payload to be sent to device
 */
async function sendNotificationToX(recipientToken, data) {
  const message = {
    data,
    token: recipientToken,
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

// criteria = {
//   type: type,
//   value: value
// }
async function retrieveHistory(criteria) {
  const { type, value } = criteria;
  // console.log(type, value);

  return await db
    // ? FETCH tickets from db
    .ref(`/tickets`)
    .once("value")
    .then(
      snapshot => {
        // console.log(snapshot.val());
        return snapshot.val();
      },
      err => console.log(err)
    )
    .then(tickets => {
      // ? FILTER for criteria
      return Object.entries(tickets).map(ticket => {
        // check if requested field exists on ticket
        if (ticket[1][type] !== undefined) {
          // check if field is an array
          if (Array.isArray(ticket[1][type])) {
            // check if field includes requested value
            if (ticket[1][type].includes(value)) {
              // console.log(ticket[1]);
              return ticket[1];
            }
          } else {
            if (ticket[1][type] === value) {
              // console.log(ticket[1]);
              return ticket[1];
            }
          }
        }
      });
      // console.log(preFilteredTickets);
    })
    .then(preFilteredTickets => {
      // console.log(preFilteredTickets.filter(el => el !== undefined));
      return preFilteredTickets.filter(el => el !== undefined);
    });

  // const ticketsAsArray =
  // Object.entries(tickets).map(ticket => console.log(ticket));
  // console.log("tickets", tickets);
}

// const criteria = { type: "tags", value: "Heizung" };
// retrieveHistory(criteria);

// const customerToken =
//   "eC-lJf1iJ2qB15yA8IVBdQ:APA91bGzw6KayKEyPRJNoKTxi_20ZN59R_bSX-nZxEgRNOj3Yc_cVx6QdBKM46B5znsOSprGdjJv252d8A9xZx-YwaIwsPh-HD6ggs1cgi4D60ADmo5iDKPowKfweLPFz20PzxAjkWVP";
// const customerData = {
//   customerId: "1",
//   ticketId: "1",
//   timeSubmitted: "1",
//   timeResolved: "1",
// };

// sendNotificationToX(customerToken, customerData);

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
