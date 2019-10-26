const proxy = require("http-proxy-middleware");
module.exports = function(app) {
  app.use(
    proxy(["/createTicket", "/getTickets"], {
      target: "http://localhost:5000",
    })
  );
};
