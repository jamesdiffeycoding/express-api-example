console.log("FILE READ: ' routes/users.js'")
const express = require("express")
const router = express.Router()
const quizControllers = require('../controllers/quiz_controllers.js')


router.get("/quiz", quizControllers.getAllQuestions)
router.get("/quiz/:id", quizControllers.getQuestionById)
router.post("/quiz", quizControllers.createQuestion)
router.delete("/quiz/:id", quizControllers.deleteQuestion)
router.put("/quiz/:id", quizControllers.updateQuestion)
// router.get("/", (req, res) => {
//   console.log('Query name: ', req.query.name)
//   res.send("User List")
// })

// router.get("/new", (req, res) => {
//   res.render("users/new")
// })

// router.post("/", (req, res) => {
//   const isValid = true
//   if (isValid) {
//     users.push({ firstName: req.body.firstName })
//     res.redirect(`/users/${users.length - 1}`)
//   } else {
//     console.log("Error")
//     res.render("users/new", { firstName: req.body.firstName })
//   }
// })

// router
//   .route("/:id")
//   .get((req, res) => {
//     console.log('req.user: ', req.user)
//     res.send(`Get User With ID ${req.params.id}... Name = ${req.user.firstName}`)
//   })
//   .put((req, res) => {
//     res.send(`Update User With ID ${req.params.id}`)
//   })
//   .delete((req, res) => {
//     res.send(`Delete User With ID ${req.params.id}`)
//   })

// router.param("id", (req, res, next, id) => {
//   req.user = users[id]
//   next()
// })

// // logger logs the route that has been requested
// function logger(req, res, next) {
//   console.log("URL request received at ", "'",  req.originalUrl, "'")
//   next()
// }

module.exports = router
