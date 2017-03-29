const express = require('express');
const bodyParser = require('body-parser');
//create express instance
const app = express();
//specify the port number
var port = 3000;

// defining the static files
app.use(express.static('./server/static/'));
app.use(express.static('./client/dist/'));

//parse HTTP body messages
app.use(bodyParser.urlencoded({ extended: false }));

// routes
const authRoutes = require('./server/routes/auth');
app.use('/auth', authRoutes);


// start the server
app.listen(port, () => {
  console.log('Server is running on http://localhost:3000 or http://127.0.0.1:3000');
});
