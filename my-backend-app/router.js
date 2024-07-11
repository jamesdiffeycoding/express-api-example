
/* 🌎 ROUTER JS FILE 🌎 */
/* This file defines the accessible routes, methods and corresponding controller methods to use. */


/* 🍕 IMPORTS 🍕 */
const express = require("express")
const router = express.Router()
const quizControllers = require('./controllers.js')


/* 🍕 DEFINING ROUTES 🍕 */
router.get("/quiz", quizControllers.getAllQuizzes)
router.get("/quiz/:id", quizControllers.getQuizById)
router.post("/quiz", quizControllers.postQuiz)
router.delete("/quiz/:id", quizControllers.deleteQuizById)
router.patch("/quiz/:id", quizControllers.updateQuiz)

/* 🍕 EXPORT 🍕 */
module.exports = router
