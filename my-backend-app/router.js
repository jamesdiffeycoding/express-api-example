const express = require("express")
const router = express.Router()
const quizControllers = require('./controllers.js')

router.get("/quiz", quizControllers.getAllQuizzes) 
router.get("/quiz/:id", quizControllers.getQuizById)
router.post("/quiz", quizControllers.postQuiz)
router.delete("/quiz/:id", quizControllers.deleteQuizById)
router.patch("/quiz/:id", quizControllers.updateQuiz)

module.exports = router
