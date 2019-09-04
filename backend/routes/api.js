const express = require('express');
const api = express.Router();
const postsController = require('../controllers/postsCtl');

api.get("/allposts",postsController.getAllPosts);
api.get('/allposts',postsController.getAllPosts);


module.exports = api;
