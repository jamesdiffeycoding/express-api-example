/* 🌎 SERVER JS FILE 🌎 */
/* This file imports, configures and runs express.
It imports the quizRouter to handle different api routes. */


/* 🍕 IMPORTS 🍕 */
require('dotenv').config(); // import dotenv
const cors = require('cors'); // Import cors
const express = require("express"); // Import express server
const app = express(); // Assign express to app 
const quizRouter = require('./router.js') // Import router

/* 🍕 EXPRESS APP CONFIGURATION 🍕*/
app.use(cors({
  origin: '*', 
  methods: ['GET', 'POST', 'PATCH', 'DELETE'], 
  allowedHeaders: ['Content-Type', 'Authorization', 'apiKey', 'id'], 
})); // set allowed HTTP methods and Headers

app.use(express.urlencoded({ extended: true })); // parse url encoded payloads
app.use(express.json()); // parse JSON, allowing access to req.body


/* 🍕 ROUTING 🍕*/
app.use("/api", quizRouter); // use custom router
app.get("/", (req, res) => {
    res.send(`The server is up and running on the /api route.`);
}); // home page message


/* 🍕 INITIALISE SERVER 🍕 */
const PORT = process.env.PORT || 3001; // use port 3000 unless otherwise specified
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
