const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
// require('dontenv');

app.use(cors());

app.use(bodyParser.json());


// IMPORT ROUTES
const luresRoute = require('./routes/lures.js');

app.use('/lures', luresRoute);

// Middlewares
app.use('/lures', () =>{
  console.log('This is a middleware running');
})

app.use(express.static(__dirname + '/'));
// app.use(express.static(__dirname + '/lures'));

// ROUTES
app.get('/', (req, res) => {
  res.send('We are on home');
});

app.get('/lures', (req, res) => {
  res.send('We are on lures');
});


// Connect to DB
mongoose.connect(
  'mongodb+srv://haleyw:12345@the-beginner-fisher.ccett.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
  { useNewUrlParser: true,  useUnifiedTopology: true  }
);

const db = mongoose.connection;
db.once('open', () => {
  console.log("Connected to MongoDB");
});


app.listen(5000, console.log("Listening on port 5000"));
