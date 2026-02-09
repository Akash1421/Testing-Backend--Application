import express from 'express';

const app = express(); //creates an express application

//importing routes
import userRoute from './routes/user.route.js'

//implementing routes
app.use("/api/v1/users", userRoute);

export default app;
