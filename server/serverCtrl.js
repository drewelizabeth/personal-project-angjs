const app = require('./index'),
  db = app.get('db');
  const config = require('./../config')
  const stripe = require('stripe')(config.STRIPE_KEYS.secretKey);


module.exports = {
  // newUser: function (req, res) {
  //   console.log('serverCtrl: ', req.body);
  //   let first = req.body.newUser.firstname,
  //     last = req.body.newUser.lastname,
  //     username = req.body.newUser.username,
  //     password = req.body.newUser.password,
  //     zip = req.body.newUser.zip,
  //     duedate = req.body.newUser.duedate,
  //     multiples = req.body.newUser.multiples,
  //     kids = req.body.newUser.kids;
  //   db.newuser([first, last, username, password, zip, duedate, multiples, kids], function (err, sqlResponse) {
  //     if(!err) {
  //       res.status(200).send(sqlResponse);
  //     }
  //     else {
  //       console.log(err);
  //       res.status(500).send('');
  //     } 
  //   });
  // },

newUser (req, res) {
  let first = req.body.newUser.firstname,
      last = req.body.newUser.lastname,
      username = req.body.newUser.username,
      password = req.body.newUser.password,
      zip = req.body.newUser.zip,
      duedate = req.body.newUser.duedate,
      multiples = req.body.newUser.multiples,
      kids = req.body.newUser.kids
      db.newuser([first, last, username, password, zip, duedate, multiples, kids], (err, sqlResponse) => !err ? res.status(200).send(sqlResponse) : res.status(err.status).send(err));
},

  login(req, res) {
    console.log(req.body);
    let username = req.body.username,
        password = req.body.password
    db.finduser([username, password], function(err, response) {
      if(!err) {
        if(!response[0]) {
          res.send('User not found');      
      } else {
        delete response.password;
        req.session.user = response[0]
        console.log(req.session)
        res.status(200).send(response);
      }
    }
  })
},

// login (req, res) {
//   let username = req.body.username,
//         password = req.body.password
//         db.finduser([username, password], (err, response) => !err ? res.status(200).send(response) : res.status(err.status).send(err));
// },

connectFriends (req,res){
  console.log('req.body', req.body, req.session.user);
  console.log(req.session.user.id, req.body.checked);
  db.select_friends([req.session.user.id, req.body.checked], function(err, response) {
    console.log('serverCtrl', response);
    res.status(200).send(response);
  });
},

serviceCost (req, res) {
  console.log(req.body);
  console.log(req.body.services);
  db.service_cost([req.body.services], function(err, response) {
    res.status(200).send(response);
  })
},

donation (req, res, next) {
  console.log(req.body);
  const chargeAmt = req.body.amount;
  const amountArray = chargeAmt.toString().split('');
  const pennies = [];
  for (var i = 0; i < amountArray.length; i++) {
    if(amountArray[i] === ".") {
      if (typeof amountArray[i + 1] === "string") {
        pennies.push(amountArray[i + 1]);
      } else {
        pennies.push("0");
      }
      if (typeof amountArray[i + 2] === "string") {
        pennies.push(amountArray[i + 2]);
      } else {
        pennies.push("0");
      }
    	break;
    } else {
    	pennies.push(amountArray[i])
    }
  }
  const convertedAmt = parseInt(pennies.join(''));
  console.log("Pennies: ");
  console.log(convertedAmt);


  // const amountArray = donateAmount.toString().split('');
  const charge = stripe.charges.create({
  amount: convertedAmt, // amount in cents, again
  currency: 'usd',
  source: req.body.donation.token,
  description: 'Village Donation'
},
function(err, charge) {
  console.log(err, charge)
     res.sendStatus(200);
});
},

updateConnect (req, res) {
  console.log(req.body);
  res.status(200).send('updated');
},

getnames (req, res) {
  db.getnames((err, names) => !err ? res.status(200).send(names) : res.status(err.status).send(err));
}

};