
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const massive = require('massive');
const session = require('express-session');
const config = require('./../config.js');
const d3 = require("d3");
const stripe = require('stripe')('config.STRIPE_KEYS.secretKey');
// const Chart = require('chart.js');
// var myChart = new Chart({donations});
// var ctx = "myChart";

// const mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');
 
// mapboxgl.accessToken = 'pk.eyJ1IjoiZHJld2VsaXphYmV0aCIsImEiOiJjajJwbTRhMzQwMnB3MzNudzQ4NGVieW56In0.W4netTs3XWHy2aZvpNwHRQ';
// var map = new mapboxgl.Map({
// container: 'mapid',
// style: 'mapbox://styles/mapbox/light-v9'
// });

const keyPublishable = process.env.PUBLISHABLE_KEY;
const keySecret = process.env.SECRET_KEY;

const app = module.exports = express();

var corsOptions = {
  origin: 'http://localhost:3000'
};

const massiveInstance = massive.connectSync({connectionString: 'postgres://postgres@localhost/village'});

app.use(bodyParser.json());
app.use(cors(corsOptions));
app.use(express.static(__dirname + './../dist'));
app.use(session({ 
  secret: config.sessionSecret,
  resave: false,
  saveUninitialized: false
 }));
app.set('db', massiveInstance);
const serverCtrl = require('./serverCtrl');
const db = app.get('db');

app.post('/newuser', serverCtrl.newUser);

app.post('/api/login', serverCtrl.login);

app.post('/api/connections', serverCtrl.connectFriends);

app.put('/api/updateconnect', serverCtrl.updateConnect);

app.get('/api/getnames', serverCtrl.getnames);

app.post('/api/servicecost', serverCtrl.serviceCost);

app.post('/api/donation', serverCtrl.donation);
// app.get("/", (req, res) =>
//   res.render("index.pug", {keyPublishable}));

// app.post("/charge", (req, res) => {
//   let amount = 500;




app.listen(3000, function() {
  console.log('Personal Project running on 3000');
});

