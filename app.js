const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();
const send = require('./routes/send');  // subrouter ADD ME
const port = 3000;

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());

//set static folder to place front-end app in 
app.use(express.static(path.join(__dirname, 'public'))); 

app.use('/send', send);     // subrouter ADD ME


app.get('/', function (req, res) {
    res.send('Invalid Enpoint Bitch');
});

app.listen(port, function(){
    console.log('Server started on port ' + port);
});