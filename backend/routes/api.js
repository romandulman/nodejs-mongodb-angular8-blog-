const express = require('express');
const api = express.Router();
const postsController = require('../controllers/postsCtl');

api.get("/allposts",postsController.getAllPosts);
api.single("/single/posts",postsController.getSinglePost);
api.post('/newpost',postsController.newPost);
api.delete('/delpost/:id',postsController.delPost);


module.exports = api;
