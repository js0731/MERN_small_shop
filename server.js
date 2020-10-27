const express = require('express');
const app = express();
require('dotenv').config()
const connectDB = require('./config/db');

connectDB();
const api = require('./routes/api');



app.use('/api', api);


const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})