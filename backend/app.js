const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const keys = require('./config/keys');
const db = require('mongoose');
const postsRouter = require('./routes/posts');
const authRouter = require('./routes/auth');

const app = express();

db.connect(keys.mongoAuth.dbURL);
db.connection.once('open', () => {
   // app.emit('ready');
    console.log('Mongodb Connected..')
});

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/posts', postsRouter);
app.use('/api/auth', authRouter);
module.exports = app;
