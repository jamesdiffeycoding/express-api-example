# Night Quizzer - Backend API

## Scripts
In the my-backend-app folder, npm run devStart runs the server.js file using Nodemon, which auto-refreshes on file change (which is useful for development).

## Structure
The server.js file is the base file. 
- It imports express and the quizRouter specified in the routes/quiz_router.js file.
- It applies middlewear, specifies allowed methods and headers.
- It sets the /api route to the quizRouter
