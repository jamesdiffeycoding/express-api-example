console.log("FILE READ: ' routes/users.js'")
const express = require("express")
const router = express.Router()
const quizControllers = require('../controllers/quiz_controllers.js')

router.get("/quiz", quizControllers.getAllQuizzes)
router.get("/quiz/:id", quizControllers.getQuizById)
router.post("/quiz", quizControllers.postQuiz)
router.delete("/quiz/:id", quizControllers.deleteQuiz)
router.put("/quiz/:id", quizControllers.updateQuiz)

module.exports = router
