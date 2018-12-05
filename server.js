//dependencies
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');
const API = require('./routes/api');

//express middleware
const app = express();
app.use(bodyParser.json()); //body-parser
app.use('/api', API); //router

//connect to databases
const db = require('./config/key').mongoURI;
mongoose.connect(db)
    .then(() => console.log('mongo DB connected'))
    .catch(err => console.log(err));

//heroku build
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'))
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}

//connect backend
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`server started on port ${port}`))

