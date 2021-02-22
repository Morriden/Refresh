const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser');
require('dotenv/config');

app.use(bodyParser.json());
//import routes
const postsRoute = require('./routes/posts');

app.use('/posts', postsRoute);

app.get('/', (req, res) => {
    res.send('We are home');
});

//connect to DB
mongoose.connect(
    process.env.DB_CONNECTION,
    { 
        useUnifiedTopology: true,
        useNewUrlParser: true
    },
    () => console.log('connected to DB!')
);

app.listen(3000);