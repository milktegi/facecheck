const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt-nodejs');
const cors = require('cors');
const knex = require('knex');

const register = require('./controllers/register');
const signin = require('./controllers/signin');
const image = require('./controllers/image');
const profile = require('./controllers/profile');

const postgres = knex({
  client: 'pg',
  connection: {
    host: '127.0.0.1',
    user: 'postgres',
    password: '1111',
    database: 'smartbrain'
  }
});

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('working!');
});

app.post('/signin', signin.handleSignIn(postgres, bcrypt));

app.post('/register', (req, res) => {
  register.handleRegister(req, res, postgres, bcrypt);
});

app.get('/profile/:id', (req, res) => {
  profile.handleProfile(req, res, postgres)
});

app.put('/image', (req, res) => {
  image.handleImage(req, res, postgres);
});

app.post('/imageurl', (req, res) => {
  image.handleAPICall(req, res);
});

const PORT = process.env.PORT

app.listen(PORT, () => {
  console.log(`server is listening on port${PORT}`);
});

// console.log(process.env);
/**
 * --> res = this is working
 * /signin --> POST success/fail
 * /register --> POST user
 * /profile/:userId --> GET = user
 * /image --> PUT (update) user
 *
 */
