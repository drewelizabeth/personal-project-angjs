// Publishable
// pk_test_2D5DxWcgjehqxAcKTVKGhUn5
	
// Secret
// sk_test_Lj8VYJMQ2DuC6VUwPjpeHvkj

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const massive = require('massive');
const session = require('express-session');
const config = require('./../config.js');

// const keyPublishable = process.env.PUBLISHABLE_KEY;
// const keySecret = process.env.SECRET_KEY;

const app = module.exports = express();
// const stripe = require('stripe')('sk_test_Lj8VYJMQ2DuC6VUwPjpeHvkj');

var corsOptions = {
  origin: 'http://localhost:3000'
};

const massiveInstance = massive.connectSync({connectionString: 'postgres://postgres@localhost/village'});

app.use(bodyParser.json());
app.use(cors(corsOptions));
app.use(express.static(__dirname + './../dist'));
app.use(session({ secret: config.sessionSecret }));
app.set('db', massiveInstance);
const serverCtrl = require('./serverCtrl');
const db = app.get('db');

app.post('/newuser', serverCtrl.newUser);

app.post('/api/login', serverCtrl.login);

app.post('/api/connections', serverCtrl.connectFriends);

app.put('/api/updateconnect', serverCtrl.updateConnect);

// app.get("/", (req, res) =>
//   res.render("index.pug", {keyPublishable}));

// app.post("/charge", (req, res) => {
//   let amount = 500;

//   stripe.customers.create({
//      email: req.body.stripeEmail,
//     source: req.body.stripeToken
//   })
//   .then(customer =>
//     stripe.charges.create({
//       amount,
//       description: "Sample Charge",
//          currency: "usd",
//          customer: customer.id
//     }))
//   .then(charge => res.render("charge.pug"));
// });



app.listen(3000, function() {
  console.log('Personal Project running on 3000');
});

