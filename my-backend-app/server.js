// console.log("FILE READ: ' server.js'");

const express = require("express");
const app = express();
const cors = require('cors');
const quizRouter = require('./routes/quiz_router.js')

// CORS middleware setup
app.use(cors({
  origin: '*', // Set your desired origin here or use a function for dynamic origin determination
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed HTTP methods
  allowedHeaders: ['Content-Type', 'Authorization'], // Allowed headers
}));

// Other middleware setup
app.get('/favicon.ico', (req, res) => {
  res.sendFile(__dirname + '/public/favicon.ico');
});
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set("view engine", "ejs");

// Route setup

app.use("/api", quizRouter);

// Routes
app.get("/", (req, res) => {
    res.json({ "message": "Welcome to the homepage" });
    // res.send(`This is the homepage`);
});

// Server start
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
