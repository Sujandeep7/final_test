const express = require('express');
const session = require('express-session');
const crypto = require('crypto');
const app = express();


app.use(session({
  secret: 'mysecretkey',
  resave: false,
  saveUninitialized: false
}));
