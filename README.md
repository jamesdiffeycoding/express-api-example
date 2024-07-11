# Night Quizzer - Backend API

## Summary
This backend server for the Night Quizzer projects interacts directly with the Supabase database API. Rather than using Auth through the Supabase client they provide, it directly uses their API which usually runs behind the scenes, and uses an API Key with universal access to perform any desired methods (e.g. updating, deleting or posting new data).  

## Scripts
In the my-backend-app folder, npm run devStart runs the server.js file using Nodemon, which auto-refreshes on file change (which is useful for development).

## Structure
The server.js file is the base file. 
- It imports express and the quizRouter specified in the router.js file.
- It applies middlewear, specifies allowed methods and headers.
- It sets the /api route to the quizRouter

The router.js file is connected to the controllers.js file, which makes requests directly to the supabase API using an API Key.

## Future changes
UNUSED FUNCTIONS NOTICE: Currently only the post, delete and patch functions are fleshed out because get can be handled by front end, while onClick functionality is needed for posting, deleting and patching. Next JS does not always work well with  onClick functionality. 

## Commenting and maintenance
File names are denoted by 🌎 FILE NAME 🌎 at the top.
Section names are denoted by slices 🍕 SECTION 🍕 throughout the body.
Comments are provided throughout to explain the code.

## Environment variables
Environment variables need to be configured to allow access to the supabase database using an apiKey that has permissions for updating, deleting and posting data.
