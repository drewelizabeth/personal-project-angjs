const app = require('./index'),
  db = app.get('db');

module.exports = {
  newUser: function (req, res) {
    console.log('serverCtrl: ', req.body);
    let first = req.body.newUser.firstname,
      last = req.body.newUser.lastname,
      username = req.body.newUser.username,
      password = req.body.newUser.password,
      zip = req.body.newUser.zip,
      duedate = req.body.newUser.duedate,
      multiples = req.body.newUser.multiples,
      kids = req.body.newUser.kids;
    db.newuser([first, last, username, password, zip, duedate, multiples, kids], function (err, sqlResponse) {
      if(!err) {
        res.status(200).send(sqlResponse);
      }
      else {
        console.log(err);
        res.status(500).send('');
      } 
    });
  },

  login: function(req, res) {
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

connectFriends (req,res){
  console.log(req.body, req.session.user);
  db.select_friends([req.session.user.id, req.body.condition], function(err, response) {
    res.status(200).send(response);
  })

  // res.status(200).send('yay');
},

updateConnect (req, res) {
  console.log(req.body);
  res.status(200).send('updated');
}

};