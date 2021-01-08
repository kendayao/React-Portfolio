require('dotenv').config()
const express = require("express");

const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
// app.use(routes);

require("./routes/apiRoutes.js")(app)

// Connect to the Mongo DB
mongoose.connect("mongodb+srv://kendayao:"+process.env.DB_PASS+"@portfolio.1bkdg.mongodb.net/portfolio?retryWrites=true&w=majority", { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true })

// mongodb://localhost/portfoliomessages
// mongodb+srv://kendayao:"+process.env.DB_PASS+"@portfolio.1bkdg.mongodb.net/portfolio?retryWrites=true&w=majority

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
