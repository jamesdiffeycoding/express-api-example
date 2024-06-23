const hardCodedQuestions = require("../data/users.json");
var fs = require('fs');

console.log(hardCodedQuestions);

async function getAllQuestions(req, res) {
  try {
    const response = hardCodedQuestions
    // const response = await res.json()
    return res.status(200).send({message: "All questions retrieved successfully", data: response});
  }
  catch (error) {
    return res.status(500).send({message: "Error retrieving questions", error: error});
  }
}

async function getQuestionById(req, res) {
  try {
    const response = hardCodedQuestions[req.params.id] 
    // const response = await res.json()
    return res.status(200).send({message: "Question with specified id retrived successfully", data: response});
  }
  catch (error) {
    return res.status(500).send({message: "Error retrieving questions with specified id", error: error});
  }
}

function createQuestion(req, res) {
try {
  const response = hardCodedQuestions
  hardCodedQuestions.push({
    "Id": hardCodedQuestions.length,
    "Question": req.body.Question,
    "AnswerA": req.body.AnswerA,
    "AnswerB": req.body.AnswerB,
    "TrueAnswer": req.body.TrueAnswer,
    // example query body: { "Question": "7What is CSS?", "AnswerA": "7Cascading Snake Style", "AnswerB": "7Cascading Style Sheets", "TrueAnswer": "7B" }
    }
  )
  fs.writeFileSync('../v1deployed/data/users.json', JSON.stringify(hardCodedQuestions, null, 2));
  // const response = await res.json()
  return res.status(200).send({message: "Question with specified id updated successfully", data: response});
  }
  catch (error) {
    return res.status(500).send({message: "Error updating questions with specified id", error: error});
  }
}

function deleteQuestion(req, res) {

  try {
    const response = hardCodedQuestions
    console.log(req.params.id)
    console.log(hardCodedQuestions)
    let questionsAfterDeletion = hardCodedQuestions.filter(question => question.Id != req.params.id)
    fs.writeFileSync('../v1deployed/data/users.json', JSON.stringify(questionsAfterDeletion, null, 2));
    return res.status(200).send({message: "Question with specified id deleted successfully", data: response});
    }
    catch (error) {
      return res.status(500).send({message: "Error deleting questions with specified id", error: error});
    }
  }  

  function updateQuestion(req, res) {
    try {
      const questionId = parseInt(req.params.id); // Convert the ID to a number
      const updatedQuestion = {
        "Id": questionId,
        "Question": req.body.Question,
        "AnswerA": req.body.AnswerA,
        "AnswerB": req.body.AnswerB,
        "TrueAnswer": req.body.TrueAnswer
      };
  
      // Find the index of the question to update
      const questionIndex = hardCodedQuestions.findIndex(question => question.Id == questionId);
  
      if (questionIndex != -1) {
        hardCodedQuestions[questionIndex] = updatedQuestion; // Update the question at the found index
        fs.writeFileSync('../v1deployed/data/users.json', JSON.stringify(hardCodedQuestions, null, 2));
        return res.status(200).send({ message: "Question with specified ID updated successfully", data: updatedQuestion });
      } else {
        return res.status(404).send({ message: "Question with specified ID not found" });
      }
    } catch (error) {
      return res.status(500).send({ message: "Error updating question with specified ID", error: error });
    }
  }
  

module.exports = {
    getAllQuestions: getAllQuestions,
    getQuestionById: getQuestionById,
    createQuestion: createQuestion,
    deleteQuestion: deleteQuestion,
    updateQuestion: updateQuestion
};