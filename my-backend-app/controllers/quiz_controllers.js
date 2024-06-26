require('dotenv').config();
const apiKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;

async function getAllQuizzes(req, res) {

}

async function getQuizById(req, res) {
}

async function postQuiz(req, res) {
    try {
        const response = await fetch(`${supabaseUrl}/rest/v1/${req.body.table}`, {
            method: req.body.method,
            headers: {
                'Content-Type': 'application/json',
                'apiKey': apiKey
            },
            body: JSON.stringify(req.body.data)
        });
        if (response.ok) {
            const data = await response.text(); // Read the response as text
            let jsonData = data ? JSON.parse(data) : {}; // Parse JSON if data is not empty
            res.json(jsonData);
        } else {
            console.error(`Failed to ${req.body.method} quiz`);
            res.status(500).json({ error: `Failed to ${req.body.method} quiz` });
        }
    } catch (error) {
        console.error('Error updating data:', error);
        res.status(500).json({ error: 'An error occurred while updating data' });
    }
}

async function deleteQuizById(req, res) {
    console.log("delete called")
    try {
        const response = await fetch(`${supabaseUrl}/rest/v1/${req.body.table}/${req.body.id}`, {
            method: req.body.method,
            headers: {
                'Content-Type': 'application/json',
                'apiKey': apiKey
            },
        });
        if (response.ok) {
            const data = await response.text(); // Read the response as text
            let jsonData = data ? JSON.parse(data) : {}; // Parse JSON if data is not empty
            res.json(jsonData);
        } else {
            console.error(`Failed to ${req.body.method} quiz`);
            res.status(500).json({ error: `Failed to ${req.body.method} quiz` });
        }
    } catch (error) {
        console.error('Error updating data:', error);
        res.status(500).json({ error: 'An error occurred while updating data' });
    }
}  

async function updateQuizById(req, res) {

}
  

module.exports = {
    getAllQuizzes: getAllQuizzes,
    getQuizById: getQuizById,
    postQuiz: postQuiz,
    deleteQuiz: deleteQuizById,
    updateQuiz: updateQuizById
};