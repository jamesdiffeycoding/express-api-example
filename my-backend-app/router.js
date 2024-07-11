
/* 🌎 ROUTER JS FILE 🌎 */
/* This file defines the accessible routes, methods and corresponding controller methods to use. */


/* 🍕 IMPORTS 🍕 */
const express = require("express")
const router = express.Router()
const quizControllers = require('./controllers.js')


/* 🍕 DEFINING ROUTES 🍕 */
/* Defines the routes and their corresponding functions. */
/* UNUSED FUNCTIONS NOTICE: Currently only the post, delete and patch functions are fleshed out because
   get can be handled by front end, while onClick functionality is needed
   for posting, deleting and patching. Next JS does not always work well with
   onClick functionality.
*/

router.get("/quiz", quizControllers.getAllQuizzes) 
router.get("/quiz/:id", quizControllers.getQuizById)
router.post("/quiz", quizControllers.postQuiz)
router.delete("/quiz/:id", quizControllers.deleteQuizById)
router.patch("/quiz/:id", quizControllers.updateQuiz)

/* 🍕 EXPORT 🍕 */
module.exports = router
