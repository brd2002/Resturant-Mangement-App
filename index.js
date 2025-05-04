const express = require('express');

const app = express();
const cors = require('cors');
// this is show the logs how much time and which route
const morgan = require('morgan');
const dotenv = require('dotenv');
const port = process.env.PORT || 3000;
const {testRouter}= require('./route/test')
const {authRouter} = require('./route/authRoutes')
// db connection import
const connectDB = require('./config/db');
// middleware
app.use(cors());
app.use(express.json({urlencoded : true}));
app.use(morgan('dev'));
// dot env config
dotenv.config();
connectDB()
// routes
app.use('/api/v1', testRouter);
app.use('/api/v1/user', authRouter);
app.get('/', (req, res) => {
    res.send('Hello World');
});
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
// lecture 4 done