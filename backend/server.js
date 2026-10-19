import 'dotenv/config'; //reads .env password
import express from 'express'; //load express to build server
import createError from 'http-errors';//load error messages
import morgan from 'morgan';//prints requests in terminal
import cors from 'cors';//allows frontend to communicate to server
import { connectToMongoDB } from './config/db.js'; //load function db.js

const app = express();
app.use(morgan('dev'));//logger
app.use(cors());
app.use(express.json());

//test route
app.get('/', (req, res) => {
    res.json({success:true, message: 'API is running'});
});

app.use((req, res, next) => {
    next(createError(404, 'Route not found'));
});

//global error handler
app.use((err, req, res, next) => {
    res.status(err.status || 500).json({
        success: false,
        message: err.message,
    });
});

//start server
const PORT = process.env.PORT || 3000;
await connectToMongoDB();

app.listen(PORT, () => {
    console.log(`Running on port ${PORT}`);
});