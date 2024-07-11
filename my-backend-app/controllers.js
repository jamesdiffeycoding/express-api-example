/* 🌎 CONTROLLERS JS FILE 🌎 */
/* This file contains and exports the functions for interacting with the database. */


/* 🍕 IMPORTS 🍕 */
require('dotenv').config();
const apiKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;

/* 🍕 DECLARATION OF FUNCTIONS 🍕 */
/* UNUSED FUNCTIONS NOTICE: Currently only the post, delete and patch functions are fleshed out because
   get can be handled by front end, while onClick functionality is needed
   for posting, deleting and patching. Next JS does not always work well with
   onClick functionality.
*/
async function getAllQuizzes(req, res) { }

async function getQuizById(req, res) { }

async function deleteQuizById(req, res) {
    console.log("Delete method called by front-end.")
    try {
        const response = await fetch(`${supabaseUrl}/rest/v1/quizzes?id=eq.${req.params.id}`, {
            method: "DELETE",
            headers: { 'Content-Type': 'application/json', 'apiKey': apiKey },
        });
        if (response.ok) {
            console.log("Response ok.")
            const data = await response.text(); // Read the response as text
            let jsonData = data ? JSON.parse(data) : {}; // Parse JSON if data is not empty
            res.json(jsonData);
        } else {
            console.error(`Response not OK.`, error);
            console.log(response.status)
            res.status(500).json({ error: `Method failed.` });
        }
    } catch (error) {
        console.error('Error updating data:', error);
        res.status(500).json({ error: 'An error occurred while updating data' });
    }
}  

async function postQuiz(req, res) {
    console.log("Post method called by front-end.")
    try {
        const response = await fetch(`${supabaseUrl}/rest/v1/quizzes`, {
            method: "POST",
            headers: { 'Content-Type': 'application/json', 'apiKey': apiKey },
            body: JSON.stringify(req.body.data)
        });
        if (response.ok) {
            console.log("Response ok.")
            const data = await response.text(); // Read the response as text
            let jsonData = data ? JSON.parse(data) : {}; // Parse JSON if data is not empty
            res.json(jsonData);
        } else {
            console.error(`Response not OK.`, error);
            console.log(response.status)
            res.status(500).json({ error: `Method failed.` });
        }
    } catch (error) {
        console.error('Error updating data:', error);
        res.status(500).json({ error: 'An error occurred while updating data' });
    }
}

async function updateQuizById(req, res) {
    console.log("Patch (update) method called by front-end.")
    console.log(JSON.stringify(req.body.data))
    try {
        const response = await fetch(`${supabaseUrl}/rest/v1/quizzes?id=eq.${req.params.id}`, {
            method: "PATCH",
            headers: { 'Content-Type': 'application/json', 'apiKey': apiKey },
            body: JSON.stringify(req.body.data)
        });
        if (response.ok) {
            console.log("Response ok.")
            const data = await response.text(); // Read the response as text
            let jsonData = data ? JSON.parse(data) : {}; // Parse JSON if data is not empty
            res.json(jsonData);
        } else {
            console.error(`Response not OK.`, error);
            console.log(response.status)
            res.status(500).json({ error: `Method failed.` });
        }
    } catch (error) {
        console.error(`Response ERROR.`, error);
        res.status(500).json({ error: 'An error occurred while updating data' });
    }
}

/* 🍕 EXPORT FUNCTIONS 🍕 */
module.exports = {
    getAllQuizzes: getAllQuizzes,
    getQuizById: getQuizById,
    postQuiz: postQuiz,
    deleteQuizById: deleteQuizById,
    updateQuiz: updateQuizById
};