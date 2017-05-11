const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const massive = require('massive');
const session = require('express-session');
const config = require('./../config.js');

const app = module.exports = express();

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




app.listen(3000, function() {
  console.log('Personal Project running on 3000');
});

