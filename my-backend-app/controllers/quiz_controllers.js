require('dotenv').config();
const apiKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;


async function getAllQuizzes(req, res) {

}

async function getQuizById(req, res) {
}

// ----------------- DELETE-------------------------------------------------------------------------------
async function deleteQuizById(req, res) {
    console.log("delete called")
    try {
        const response = await fetch(`${supabaseUrl}/rest/v1/quizzes?id=eq.${req.params.id}`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
                'apiKey': apiKey
            },
        });
        if (response.ok) {
            console.log("ok")
            const data = await response.text(); // Read the response as text
            let jsonData = data ? JSON.parse(data) : {}; // Parse JSON if data is not empty
            res.json(jsonData);
        } else {
            console.error(`Failed to DELETE quiz`);
            console.log(response.status)
            res.status(500).json({ error: `Failed to DELETE quiz` });
        }
    } catch (error) {
        console.error('Error updating data:', error);
        res.status(500).json({ error: 'An error occurred while updating data' });
    }
}  

// ----------------- POST -------------------------------------------------------------------------------
async function postQuiz(req, res) {
    console.log("post called")

    try {
        const response = await fetch(`${supabaseUrl}/rest/v1/quizzes`, {
            method: "POST",
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
            console.error(`Failed to [${req.body.method}] quiz`);
            res.status(500).json({ error: `Failed to POST quiz` });
        }
    } catch (error) {
        console.error('Error updating data:', error);
        res.status(500).json({ error: 'An error occurred while updating data' });
    }
}



// ----------------- UPDATE -------------------------------------------------------------------------------
async function updateQuizById(req, res) {
    console.log("patch called")
    console.log(JSON.stringify(req.body.data))
    try {
        const response = await fetch(`${supabaseUrl}/rest/v1/quizzes?id=eq.${req.params.id}`, {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json',
                'apiKey': apiKey
            },
            body: JSON.stringify(req.body.data)
        });
        if (response.ok) {
            console.log("ok")
            const data = await response.text(); // Read the response as text
            let jsonData = data ? JSON.parse(data) : {}; // Parse JSON if data is not empty
            res.json(jsonData);
        } else {
            console.error(`Failed to UPDATE quiz`);
            console.log(response.status)
            res.status(500).json({ error: `Failed to UPDATE quiz` });
        }
    } catch (error) {
        console.error('Error updating data:', error);
        res.status(500).json({ error: 'An error occurred while updating data' });
    }
}
  

module.exports = {
    getAllQuizzes: getAllQuizzes,
    getQuizById: getQuizById,
    postQuiz: postQuiz,
    deleteQuizById: deleteQuizById,
    updateQuiz: updateQuizById
};