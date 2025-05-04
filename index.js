const express = require('express');
const app = express();
const cors = require('cors');
// this is show the logs how much time and which route
const morgan = require('morgan');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const port = process.env.PORT || 3000;
const {testRouter}= require('./route/test')
const {authRouter} = require('./route/authRoutes')
const {userRouter} = require('./route/userRoute')
// db connection import
const connectDB = require('./config/db');
// middleware
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(cookieParser());
// dot env config
dotenv.config();
connectDB()
// routes
app.use('/api/v1', testRouter);
app.use('/api/v1/auth', authRouter);
app.use('/api/v1/user' , userRouter)
app.get('/', (req, res) => {
    res.send('Hello World');
});
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
// lecture 4 done