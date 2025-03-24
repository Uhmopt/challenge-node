## Description

This Node.js Express API connects to a MongoDB database to retrieve user data via a GET `/users/:id` endpoint, returning JSON details for users with a matching `_id` and age over 21, or a 404 if not found.
The code in `src/models/User.js` defines the user schema, `src/routes/userRoutes.js` handles the endpoint logic with ObjectId validation and age filtering, and `src/app.js` sets up the Express server and MongoDB connection.

## Getting Started

1. Install dependencies: `npm install`
2. Set up the database in `.env` file with `MONGO_URI`
3. Start server `npm start` or `node src/app.js`
